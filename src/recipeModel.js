import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore, collection, getDocs, addDoc, } from '../node_modules/firebase/firestore';
import { userID } from './userModel';
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
    name;
    ingredientList;
    instructions;
    constructor(name, ingredientList, instructions) {
        (this.name = name),
            (this.ingredientList = ingredientList),
            (this.instructions = instructions);
    }
}
const recipeConverter = {
    toFirestore: (recipe) => {
        return {
            name: recipe.name,
            ingredientList: recipe.ingredientList,
            instructions: recipe.instructions,
        };
    },
    fromFirestore: (snapshot) => {
        const recipe = snapshot.data();
        if (recipe) {
            return new Recipe(recipe.name, recipe.ingredientList, recipe.instructions);
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
const addRecipeToDB = async (user, recipe) => {
    const newRecipeRef = await addDoc(collection(db, `users/${user}/recipes`), recipeConverter.toFirestore(recipe));
    console.log(`Recipe ID: ${newRecipeRef.id} written to User: ${user}`);
};
const makeRecipeObject = (recipeName, ingredientList, instructions) => {
    const recipeObject = new Recipe(recipeName, ingredientList, instructions);
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
    if (form) {
        const formData = new FormData(form);
        const recipeName = formData.get('name-input');
        const ingredientNamesArray = formData.getAll('ingredient-name-input');
        const ingredientAmountsArray = formData.getAll('ingredient-amount-input');
        const ingredientUnitsArray = formData.getAll('ingredient-unit-input');
        const instructionsArray = formData.getAll('instruction-input');
        addRecipeToDB(userID(), makeRecipeObject(recipeName, makeIngredientListFromFormData(ingredientNamesArray, ingredientAmountsArray.map((item) => Number(item)), ingredientUnitsArray), instructionsArray));
    }
};
