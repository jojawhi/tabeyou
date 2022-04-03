import { initializeApp } from '../node_modules/firebase/app';
import {
	getFirestore,
	arrayUnion,
	arrayRemove,
	collection,
	getDocs,
	doc,
	addDoc,
	setDoc,
	getDoc,
	CollectionReference,
	DocumentSnapshot,
	QueryDocumentSnapshot,
	query,
	where,
	QuerySnapshot,
	Timestamp,
	updateDoc,
} from '../node_modules/firebase/firestore';
import { IngredientInterface } from './recipeModel';

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

export interface GroceryListInterface {
	author: string | undefined;
	startDate: Date | undefined;
	endDate: Date | undefined;
	listItems: IngredientInterface[] | null;
}

export class GroceryList {
	author: string | undefined;
	startDate: Date | undefined;
	endDate: Date | undefined;
	expired: boolean;
	listItems: IngredientInterface[] | null;

	constructor(
		author: string | undefined,
		startDate: Date | undefined,
		endDate: Date | undefined,
		expired: boolean,
		listItems: IngredientInterface[] | null
	) {
		(this.author = author),
			(this.startDate = startDate),
			(this.endDate = endDate),
			(this.expired = expired),
			(this.listItems = listItems);
	}
}

const groceryListPlanConverter = {
	toFirestore: (groceryList: GroceryList) => {
		return {
			author: groceryList.author,
			startDate: groceryList.startDate,
			endDate: groceryList.endDate,
			expired: groceryList.expired,
			listItems: groceryList.listItems,
		};
	},
	fromFirestore: (snapshot: DocumentSnapshot) => {
		const groceryList = snapshot.data();
		if (groceryList) {
			return new GroceryList(
				groceryList.author,
				groceryList.startDate,
				groceryList.endDate,
				groceryList.expired,
				groceryList.listItems
			);
		}
	},
};

export const addGroceryListToDB = (uid: string) => {};

export const getGroceryListFromDB = (uid: string) => {};

/*
- when MakeGroceryListButton is clicked on Meal Plan page do the following:
    - run the filterIngredients function to create a filtered and reduced array of ingredients
    - async add the ingredientList to the database
    - assign the same start and end dates as the current meal plan?
    - get the grocery list from the db after it's added
    - use the retrieved grocery list to populate the display
*/
