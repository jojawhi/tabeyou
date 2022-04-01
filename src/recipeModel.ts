import { initializeApp } from '../node_modules/firebase/app';
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	DocumentSnapshot,
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
/*
const docRef = doc(db, 'users', 'jojawhi');
const docSnap = await getDoc(docRef);

//These two document and collection retrievals work

if (docSnap.exists()) {
	console.log('Document data:', docSnap.data());
} else {
	console.log('No such document!');
}

const querySnapshot = await getDocs(collection(db, 'users/jojawhi/recipes'));
querySnapshot.forEach((doc) => {
	console.log(doc.id, ' => ', doc.data());
});
*/

/*
const sampleRecipe: RecipeInterface = {
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
*/

interface IngredientInterface {
	name: string;
	amount: number;
	unit: string;
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

const addRecipeToDB = async (user: string | undefined, recipe: Recipe) => {
	const newRecipeRef = await addDoc(
		collection(db, `users/${user}/recipes`),
		recipeConverter.toFirestore(recipe)
	);

	console.log(`Recipe ID: ${newRecipeRef.id} written to User: ${user}`);
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
const recipeFactory = (name: string): {} => {
	let recipeName: string = name;
	let ingredients: IngredientInterface[] = [];
	let instructions: [] = [];

	const generateIngredientList = (ingredient: {}): {}[] => {
		let ingredientsList: {}[] = [];
		ingredientsList.push(ingredient);
		return ingredientsList;
	};

	const getInstructionsFromInput = (instruction: string): string[] => {
		let instructionsArray = [];

		instructionsArray.push(instruction);

		return instructionsArray;
	};


	return { getInstructionsFromInput };
};
*/

/*
const ingredientFactory = () => {
	const getIngredientFromInput = () => {
		const amount: number = document.getElementById('amount-input').value;
		const unitSelect = document.getElementById('unit-select');
		const unit = unitSelect.options[unitSelect.selectedIndex].value;
		const name: string = document.getElementById('name-input').value;

		return { name, amount, unit };
	};
};
*/

/*
const instructionFactory = () => {

}
*/

/*
To do:

- figure out how to get recipeArray from stored user info
- make newRecipeModal
- add servings function or field for increasing amounts

*/
