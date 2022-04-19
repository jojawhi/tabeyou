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
	deleteDoc,
} from '../node_modules/firebase/firestore';
import { userID } from './userModel';
import { IngredientInterface } from './recipeModel';
import { filterIngredients, getCurrentMealPlanFromDB } from './mealPlanModel';
import displayGroceryList from './groceryListView';
import sectionFactory from './section';
import { generateOverwriteModal } from './overwriteModal';

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
	dateStart: Date | undefined | null;
	dateEnd: Date | undefined | null;
	listItems: IngredientInterface[] | null | undefined;
}

export class GroceryList {
	author: string | undefined;
	dateStart: Date | undefined | null;
	dateEnd: Date | undefined | null;
	expired: boolean;
	listItems: IngredientInterface[] | null | undefined;

	constructor(
		author: string | undefined,
		dateStart: Date | undefined | null,
		dateEnd: Date | undefined | null,
		expired: boolean,
		listItems: IngredientInterface[] | null | undefined
	) {
		(this.author = author),
			(this.dateStart = dateStart),
			(this.dateEnd = dateEnd),
			(this.expired = expired),
			(this.listItems = listItems);
	}
}

const groceryListConverter = {
	toFirestore: (groceryList: GroceryList) => {
		return {
			author: groceryList.author,
			dateStart: groceryList.dateStart,
			dateEnd: groceryList.dateEnd,
			expired: groceryList.expired,
			listItems: groceryList.listItems,
		};
	},
	fromFirestore: (snapshot: DocumentSnapshot) => {
		if (snapshot) {
			const groceryList = snapshot.data();
			if (groceryList) {
				return new GroceryList(
					groceryList.author,
					groceryList.dateStart,
					groceryList.dateEnd,
					groceryList.expired,
					groceryList.listItems
				);
			}
		}
	},
};

//Currently working
const generateGroceryListObject = async (
	uid: string,
	array: Promise<IngredientInterface[]> | IngredientInterface[]
): Promise<GroceryList> => {
	let groceryList = new GroceryList(uid, null, null, false, null);

	const mealPlan = await getCurrentMealPlanFromDB(uid)
		.then((mealPlan) => {
			groceryList.dateStart = mealPlan.dateStart;
			groceryList.dateEnd = mealPlan.dateEnd;

			return groceryList;
		})
		.then(async (groceryList) => {
			groceryList.listItems = await array;
		});
	return groceryList;
};

export const deleteCurrentGroceryList = async (uid: string) => {
	const groceryListID = await getCurrentGroceryListID(uid);

	await deleteDoc(doc(db, `users/${uid}/groceryLists/${groceryListID}`));
};

export const addGroceryListToDBWithoutCheck = async (
	uid: string,
	array: Promise<IngredientInterface[]> | IngredientInterface[]
) => {
	const groceryList = await generateGroceryListObject(uid, array);
	const newGroceryListRef = await addDoc(
		collection(db, `users/${uid}/groceryLists`),
		groceryListConverter.toFirestore(groceryList)
	).then(() => {
		const section = document.getElementById('content-section');
		if (section) {
			sectionFactory().clearSection(section);
			displayGroceryList(section);
		}
	});
};

export const addGroceryListToDBWithCheck = async (
	uid: string,
	array: Promise<IngredientInterface[]> | IngredientInterface[]
) => {
	//Check for expiry first
	const expiryCheck = await checkGroceryListExpiry();

	if (expiryCheck === true) {
		const groceryList = await generateGroceryListObject(uid, array);
		const newGroceryListRef = await addDoc(
			collection(db, `users/${uid}/groceryLists`),
			groceryListConverter.toFirestore(groceryList)
		).then(() => {
			const section = document.getElementById('content-section');
			if (section) {
				sectionFactory().clearSection(section);
				displayGroceryList(section);
			}
		});
		console.log(`Grocery List added to DB`);
	} else {
		document.body.appendChild(generateOverwriteModal());
	}
};

export const getCurrentGroceryListDateEnd = async (uid: string) => {
	const groceryListRef = collection(db, `users/${uid}/groceryLists`);
	const groceryListQuery = query(groceryListRef, where('expired', '==', false));
	const snapshot = await getDocs(groceryListQuery);

	let groceryListArray: any[] = [];

	snapshot.forEach((groceryList) => {
		//toDate() method required for converting from Firestore Timestamp: https://stackoverflow.com/questions/52247445/how-do-i-convert-a-firestore-date-timestamp-to-a-js-date
		const groceryListDateEnd = groceryList.data().dateEnd.toDate();

		groceryListArray.push(groceryListDateEnd);
	});

	return groceryListArray[0];
};

export const getCurrentGroceryListID = async (uid: string | undefined) => {
	const groceryListRef = collection(db, `users/${uid}/groceryLists`);
	const groceryListQuery = query(groceryListRef, where('expired', '==', false));
	const snapshot = await getDocs(groceryListQuery);

	let groceryListID: string = '';

	snapshot.forEach((groceryList) => {
		groceryListID += groceryList.id;
		console.log(`Current Grocery List: ${groceryListID}`);
	});

	return groceryListID;
};

const updateCurrentGroceryListExpiry = async (uid: string | undefined) => {
	// Needed await on the getID call
	const groceryListID = await getCurrentGroceryListID(uid);
	const groceryListRef = doc(db, `users/${uid}/groceryLists/${groceryListID}`);

	await updateDoc(groceryListRef, {
		expired: true,
	});
};

export const checkGroceryListExpiry = async () => {
	const dateEnd = await getCurrentGroceryListDateEnd(userID());
	const today: Date = Date.today();

	if (today >= dateEnd) {
		console.log('Grocery list expired');
		updateCurrentGroceryListExpiry(userID());
		// .then(() => {
		// 	filterIngredients();
		// });
		return true;
	} else if (today < dateEnd) {
		filterIngredients();
		console.log('Grocery List not expired yet');
		return false;
	} else {
		console.log('Could not read grocery list expiry');
		return false;
	}
};

export const getCurrentGroceryListFromDB = async (uid: string) => {
	const groceryListsRef = collection(db, `users/${uid}/groceryLists`);
	const groceryListsQuery = query(groceryListsRef, where('expired', '==', false));
	const snapshot = await getDocs(groceryListsQuery);

	let groceryListObject: any;

	if (snapshot.docs[0]) {
		groceryListObject = groceryListConverter.fromFirestore(snapshot.docs[0]);
	} else {
		groceryListObject = new GroceryList(userID(), null, null, false, [
			{
				name: 'Make a meal plan first',
				amount: 1,
				unit: 'pc',
			},
		]);
		addGroceryListToDBWithoutCheck(userID(), groceryListObject.listItems);
	}

	return groceryListObject as GroceryList;
};

//Currently working
export const updateGroceryListOnInput = async (uid: string) => {
	const groceryListID = await getCurrentGroceryListID(uid);
	const groceryListRef = doc(db, `users/${uid}/groceryLists/${groceryListID}`);

	const textContainers = document.getElementsByClassName('grocery-list-text-container');
	let ingredientArray = [];

	for (let i = 0; i < textContainers.length; i++) {
		//Need to coerce the input type to allow access to the value in the object
		const name = textContainers[i].children[0] as HTMLInputElement;
		const amount = textContainers[i].children[1] as HTMLInputElement;
		const unit = textContainers[i].children[2] as HTMLInputElement;

		const ingredient: IngredientInterface = {
			name: name.value,
			amount: amount.valueAsNumber,
			unit: unit.value,
		};

		ingredientArray.push(ingredient);
		console.log(ingredientArray);
	}

	await updateDoc(groceryListRef, {
		listItems: ingredientArray,
	}).then(() => {
		const section = document.getElementById('content-section');
		if (section) {
			sectionFactory().clearSection(section);
			displayGroceryList(section);
		}
	});

	/*
    - get all the grocery list text containers with querySelectorAll, convert them to IngredientInterfaces, push them to array
    - get the current grocery list reference from the db
    - update listItems of the current grocery list with ingredientArray
    - re-render display
    */
};

/*
- when MakeGroceryListButton is clicked on Meal Plan page do the following:
    - check if meal plan is fully populated
        - if not, throw error/modal to let user choose to make grocery list with only partially populated plan (if only making a partial week plan)
    - if mealPlan is fully populated, check if a grocery list already exists
        - if true:
            - show a modal asking if user wants to overwrite the current list
            - yes button overwrites (deletes old then adds new)
            - cancel button closes modal, does nothing else
        -if false:
            - run the filterIngredients function to create a filtered and reduced array of ingredients
            - async add the ingredientList to the database
            - assign the same start and end dates as the current meal plan
            - get the grocery list from the db after it's added
            - use the retrieved grocery list to populate the display


*/
