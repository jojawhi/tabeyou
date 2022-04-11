import { initializeApp } from '../node_modules/firebase/app';
import {
	getFirestore,
	collection,
	doc,
	getDocs,
	addDoc,
	deleteDoc,
	DocumentSnapshot,
	query,
	where,
	QuerySnapshot,
} from '../node_modules/firebase/firestore';
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
//const auth = getAuth(app);
const db = getFirestore(app);

interface IngredientInterface {
	name: string | null;
	amount: number | null;
	unit: string | null;
}

interface RecipeInterface {
	name: string;
	ingredientList: IngredientInterface[];
	instructions?: string[];
}

class Recipe {
	name: string;
	ingredientList: IngredientInterface[];
	instructions?: string[];

	constructor(
		name: string,
		ingredientList: IngredientInterface[],
		instructions: string[] | undefined
	) {
		(this.name = name),
			(this.ingredientList = ingredientList),
			(this.instructions = instructions);
	}
}

export const recipeConverter = {
	toFirestore: (recipe: Recipe) => {
		return {
			name: recipe.name,
			ingredientList: recipe.ingredientList,
			instructions: recipe.instructions,
		};
	},
	fromFirestore: (snapshot: DocumentSnapshot) => {
		const recipe = snapshot.data();
		if (recipe) {
			return new Recipe(recipe.name, recipe.ingredientList, recipe.instructions);
		}
	},
};

// This retrieves recipe collection and returns as an array of objects when passing it the active user ID
export const getRecipesFromDB = async (uid: string | undefined) => {
	const recipesRef = collection(db, `users/${uid}/recipes`);
	const recipesSnap = await getDocs(recipesRef);

	return makeDatabaseRecipeArray(recipesSnap);
};

export const makeDatabaseRecipeArray = (snapshot: QuerySnapshot) => {
	let recipesArray: RecipeInterface[] = [];

	snapshot.forEach((recipe) => {
		const recipeObject = recipeConverter.fromFirestore(recipe);
		if (recipeObject) {
			recipesArray.push(recipeObject);
		}
	});

	console.log(recipesArray);

	return recipesArray;
};

const addRecipeToDB = async (uid: string | undefined, recipe: Recipe) => {
	const newRecipeRef = await addDoc(
		collection(db, `users/${uid}/recipes`),
		recipeConverter.toFirestore(recipe)
	);

	console.log(`Recipe ID: ${newRecipeRef.id} written to User: ${uid}`);
};

export const deleteRecipeFromDB = async (uid: string, recipeName: string | null) => {
	const recipeID = await getRecipeIDByName(uid, recipeName);
	console.log(`ID to be deleted: ${recipeID}`);
	await deleteDoc(doc(db, `users/${uid}/recipes/${recipeID}`));
};

const getRecipeIDByName = async (uid: string, recipeName: string | null) => {
	const recipesRef = collection(db, `users/${uid}/recipes`);
	const recipesQuery = query(recipesRef, where('name', '==', recipeName));
	const snapshot = await getDocs(recipesQuery);

	let recipeID: string = '';

	snapshot.forEach((doc) => {
		recipeID += doc.id;
		console.log(`Recipe ID: ${recipeID}`);
	});

	return recipeID;
};

const makeRecipeObject = (
	recipeName: string,
	ingredientList: IngredientInterface[],
	instructions: string[]
) => {
	const recipeObject = new Recipe(recipeName, ingredientList, instructions);

	return recipeObject;
};

const makeIngredientObject = (
	ingredientName: string,
	ingredientAmount: number,
	ingredientUnit: string
) => {
	const ingredient: IngredientInterface = {
		name: ingredientName,
		amount: ingredientAmount,
		unit: ingredientUnit,
	};

	return ingredient;
};

const makeIngredientListFromFormData = (
	ingredientsArray: string[],
	amountsArray: number[],
	unitsArray: string[]
) => {
	const ingredientList: IngredientInterface[] = [];

	for (let i = 0; i < ingredientsArray.length; i++) {
		ingredientList.push(
			makeIngredientObject(ingredientsArray[i], amountsArray[i], unitsArray[i])
		);
	}
	return ingredientList;
};

export const getFormData = (formID: string) => {
	const form: HTMLFormElement = document.getElementById(formID) as HTMLFormElement;
	let error = '';

	if (form) {
		const formData = new FormData(form);
		const recipeName = formData.get('name-input') as string;
		const ingredientNamesArray = formData.getAll('ingredient-name-input') as string[];
		const ingredientAmountsArray = formData.getAll('ingredient-amount-input');
		const ingredientUnitsArray = formData.getAll('ingredient-unit-input') as string[];

		const instructionsArray = formData.getAll('instruction-input') as string[];

		addRecipeToDB(
			userID(),
			makeRecipeObject(
				recipeName,
				makeIngredientListFromFormData(
					ingredientNamesArray,
					ingredientAmountsArray.map((item) => Number(item)),
					ingredientUnitsArray
				),
				instructionsArray
			)
		).then(() => {
			const section = document.getElementById('content-section');
			if (section) {
				sectionFactory().clearSection(section);
				displayRecipeList(section);
			}
		});
	}
};

export { RecipeInterface, IngredientInterface };

/*
To do:

- add validation for addRecipe (required fields, check for duplicate names)
- add servings function or field for increasing amounts

*/
