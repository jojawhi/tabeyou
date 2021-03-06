import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore, collection, doc, getDocs, addDoc, deleteDoc, query, where, } from '../node_modules/firebase/firestore';
import { userID } from './userModel';
import sectionFactory from './section';
import displayRecipeList from './recipeListView';
const firebaseConfig = {
    apiKey: 'AIzaSyDNq2cEXRimi9k5nFMh7RkKCMrcvvHfYEc',
    authDomain: 'tabeyou-e0c1f.firebaseapp.com',
    projectId: 'tabeyou-e0c1f',
    storageBucket: 'tabeyou-e0c1f.appspot.com',
    messagingSenderId: '806206176016',
    appId: '1:806206176016:web:74513f352b4a3305c04395',
    measurementId: 'G-VFQ5CJKGB3',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
class Recipe {
    author;
    name;
    ingredientList;
    instructions;
    constructor(author, name, ingredientList, instructions) {
        (this.author = author),
            (this.name = name),
            (this.ingredientList = ingredientList),
            (this.instructions = instructions);
    }
}
export const recipeConverter = {
    toFirestore: (recipe) => {
        return {
            author: recipe.author,
            name: recipe.name,
            ingredientList: recipe.ingredientList,
            instructions: recipe.instructions,
        };
    },
    fromFirestore: (snapshot) => {
        const recipe = snapshot.data();
        if (recipe) {
            return new Recipe(recipe.author, recipe.name, recipe.ingredientList, recipe.instructions);
        }
    },
};
export const getRecipesFromDB = async (uid) => {
    const recipesRef = collection(db, `users/${uid}/recipes`);
    const recipesSnap = await getDocs(recipesRef);
    return makeDatabaseRecipeArray(recipesSnap);
};
export const makeDatabaseRecipeArray = (snapshot) => {
    let recipesArray = [];
    snapshot.forEach((recipe) => {
        const recipeObject = recipeConverter.fromFirestore(recipe);
        if (recipeObject) {
            recipesArray.push(recipeObject);
        }
    });
    console.log(recipesArray);
    return recipesArray;
};
const addRecipeToDB = async (uid, recipe) => {
    const newRecipeRef = await addDoc(collection(db, `users/${uid}/recipes`), recipeConverter.toFirestore(recipe));
    console.log(`Recipe ID: ${newRecipeRef.id} written to User: ${uid}`);
};
export const deleteRecipeFromDB = async (uid, recipeName) => {
    const recipeID = await getRecipeIDByName(uid, recipeName);
    console.log(`ID to be deleted: ${recipeID}`);
    await deleteDoc(doc(db, `users/${uid}/recipes/${recipeID}`));
};
const getRecipeIDByName = async (uid, recipeName) => {
    const recipesRef = collection(db, `users/${uid}/recipes`);
    const recipesQuery = query(recipesRef, where('name', '==', recipeName));
    const snapshot = await getDocs(recipesQuery);
    let recipeID = '';
    snapshot.forEach((doc) => {
        recipeID += doc.id;
        console.log(`Recipe ID: ${recipeID}`);
    });
    return recipeID;
};
const makeRecipeObject = (author, recipeName, ingredientList, instructions) => {
    const recipeObject = new Recipe(author, recipeName, ingredientList, instructions);
    return recipeObject;
};
const makeIngredientObject = (ingredientName, ingredientAmount, ingredientUnit) => {
    const ingredient = {
        name: ingredientName,
        amount: ingredientAmount,
        unit: ingredientUnit,
    };
    return ingredient;
};
const makeIngredientListFromFormData = (ingredientsArray, amountsArray, unitsArray) => {
    const ingredientList = [];
    for (let i = 0; i < ingredientsArray.length; i++) {
        ingredientList.push(makeIngredientObject(ingredientsArray[i], amountsArray[i], unitsArray[i]));
    }
    return ingredientList;
};
export const getFormData = (formID) => {
    const form = document.getElementById(formID);
    let error = '';
    if (form) {
        const formData = new FormData(form);
        const recipeName = formData.get('name-input');
        const ingredientNamesArray = formData.getAll('ingredient-name-input');
        const ingredientAmountsArray = formData.getAll('ingredient-amount-input');
        const ingredientUnitsArray = formData.getAll('ingredient-unit-input');
        const instructionsArray = formData.getAll('instruction-input');
        addRecipeToDB(userID(), makeRecipeObject(userID(), recipeName, makeIngredientListFromFormData(ingredientNamesArray, ingredientAmountsArray.map((item) => Number(item)), ingredientUnitsArray), instructionsArray)).then(() => {
            const section = document.getElementById('content-section');
            if (section) {
                sectionFactory().clearSection(section);
                displayRecipeList(section);
            }
        });
    }
};
