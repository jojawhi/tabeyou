import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore, collection, getDocs, } from '../node_modules/firebase/firestore';
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
const sampleRecipe = {
    name: `Roy Choi's Aglio e Olio`,
    ingredientList: [
        { name: 'parmesan cheese', amount: 0.5, unit: 'C' },
        { name: 'lemon', amount: 1, unit: 'pc' },
        { name: 'parsley', amount: 1, unit: 'bunch' },
        { name: 'garlic', amount: 10, unit: 'cloves' },
        { name: 'olive oil', amount: 1, unit: 'C' },
        { name: 'spaghetti', amount: 450, unit: 'g' },
        { name: 'chili flakes', amount: 1, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'tbsp' },
    ],
    instructions: [
        `Bring a pot of water to a boil, and add 1-2 tsp of salt and 1 tbsp of olive oil.`,
        `Wash and de-stem the parsley. Chop the parsley with a rough chiffonade.`,
        `Peel garlic and slice into thin discs.`,
        `Add the spaghetti to the boiling water and cook until al dente or to desired doneness (~10 minutes).`,
        `Drain the pasta and set aside, saving about 1 cup of the pasta water and also setting this aside.`,
        `In a heavy-bottomed skillet over medium heat, add about ½ cup of olive oil (or enough to coat the bottom of the pan and cover all the garlic).`,
        `Add garlic to the pan and cook until fragrant and just browning, about 3 minutes.`,
        `Add chili flakes and all but 2-3 tbsps of the chopped parsley to the pan and cook for another 30 seconds or so.`,
        `Add the cooked pasta and stir it into the oil and garlic. Then, add the saved cup of pasta water.`,
        `Allow everything to heat and incorporate, then remove from the heat.`,
        `Add 1-2 tbsp of butter to the pasta and the juice of a lemon and stir.`,
        `Use a large fork to twist the spaghetti onto your plates.`,
        `Top with some of the garlicky oil from the pan, grated parmesan cheese, and some of the leftover chopped parsley.`,
        `Serve immediately.`,
    ],
};
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
const addRecipeToDB = (user, recipe) => { };
export const getRecipesFromDB = async (user) => {
    const recipesRef = collection(db, `users/${user}/recipes`);
    await getDocs(recipesRef).then((recipesSnap) => {
        makeRecipeArray(recipesSnap);
    });
};
const makeRecipeArray = (snapshot) => {
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
const addToRecipeArray = (recipe) => {
    let recipeArray = [];
    recipeArray.push(recipe);
    return recipeArray;
};
export const getRecipeArray = () => {
    return addToRecipeArray(sampleRecipe);
};
