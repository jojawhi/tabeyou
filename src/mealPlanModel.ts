require('../node_modules/datejs/index');

import { initializeApp } from '../node_modules/firebase/app';
import {
	getFirestore,
	collection,
	getDocs,
	doc,
	addDoc,
	setDoc,
	getDoc,
	CollectionReference,
	DocumentSnapshot,
	QuerySnapshot,
	Timestamp,
} from '../node_modules/firebase/firestore';
import { RecipeInterface } from '../src/recipeModel';
import { getUserWebID, getUserDocByID, checkForCurrentUser, getUserShoppingDay } from './userModel';

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

let globalShoppingDay = 'sun';

// successfully logged user's shopping day with this, works after exporting
export const setShoppingDay = () => {
	const shoppingDayPromise = getUserShoppingDay(getUserWebID(checkForCurrentUser())).then(
		(shoppingDay) => {
			if (shoppingDay) {
				console.log(`User day: ${shoppingDay}, Global: ${globalShoppingDay}`);
				globalShoppingDay = shoppingDay.toLowerCase();
				console.log(`User day: ${shoppingDay}, Global is now: ${globalShoppingDay}`);
			}
		}
	);
};

export interface MealPlanInterface {
	author: string | undefined;
	startDate: Date | undefined;
	endDate: Date | undefined;
	meals?: RecipeInterface[] | null[];
}

export class MealPlan {
	author: string | undefined;
	startDate: Date | undefined;
	endDate: Date | undefined;
	meals: RecipeInterface[] | null[];

	constructor(
		author: string | undefined,
		startDate: Date | undefined,
		endDate: Date | undefined,
		...meals: RecipeInterface[] | null[]
	) {
		(this.author = author),
			(this.startDate = startDate),
			(this.endDate = endDate),
			(this.meals = meals);
	}
}

const mealPlanConverter = {
	toFirestore: (mealPlan: MealPlan) => {
		return {
			author: mealPlan.author,
			dateStart: mealPlan.startDate,
			dateEnd: mealPlan.endDate,
			meals: mealPlan.meals,
		};
	},
	fromFirestore: (snapshot: DocumentSnapshot) => {
		const mealPlan = snapshot.data();
		if (mealPlan) {
			return new MealPlan(
				mealPlan.author,
				mealPlan.startDate,
				mealPlan.endDate,
				mealPlan.meals
			);
		}
	},
};

const setStartDate = (mealPlan: MealPlan, day: string) => {
	let startDate;
	const today = Date.today().toString('ddd').toLowerCase();
	const daysArray: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	const dayFunctionsArray: Date[] = [
		Date.today().last().sun(),
		Date.today().last().mon(),
		Date.today().last().tue(),
		Date.today().last().wed(),
		Date.today().last().thu(),
		Date.today().last().fri(),
		Date.today().last().sat(),
	];

	if (day === today) {
		startDate = Date.today();
	} else if (day != today) {
		for (let i = 0; i < daysArray.length; i++) {
			if (day === daysArray[i]) {
				startDate = dayFunctionsArray[i];
			}
		}
	}

	mealPlan.startDate = startDate;
};

// currently working
const setEndDate = (mealPlan: MealPlan, date: Date | undefined) => {
	let endDate;
	//the issue was that i forgot to add toLowerCase to the end of the comparison string
	const startDate = date?.toString('ddd').toLowerCase();
	const daysArray: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	const dayFunctionsArray: Date[] = [
		Date.today().next().sun(),
		Date.today().next().mon(),
		Date.today().next().tue(),
		Date.today().next().wed(),
		Date.today().next().thu(),
		Date.today().next().fri(),
		Date.today().next().sat(),
	];

	for (let i = 0; i < daysArray.length; i++) {
		if (startDate === daysArray[i]) {
			endDate = dayFunctionsArray[i - 1];
		}
	}

	mealPlan.endDate = endDate;
};

//currently working to create meal plan object
export const createNewMealPlan = async () => {
	const mealPlan: MealPlan = new MealPlan(
		getUserWebID(checkForCurrentUser()),
		undefined,
		undefined,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	);

	setStartDate(mealPlan, globalShoppingDay);
	console.log(mealPlan.startDate);
	setEndDate(mealPlan, mealPlan.startDate);
	console.log(mealPlan);

	return mealPlan;
};

export const addMealPlanToDB = async (user: string | undefined, mealPlan: MealPlan) => {
	const newMealPlanRef = await addDoc(
		collection(db, `users/${user}/mealPlans`),
		mealPlanConverter.toFirestore(mealPlan)
	);

	console.log(`MealPlan ID: ${newMealPlanRef.id} written to User: ${user}`);
};

const updateMealPlan = () => {};

/*

- determine shopping day based on user settings
- automatically create new meal plan each week when endDate is reached and push previous week's meal plan to history
-



- shopping day will appear as first day in the week
- add styles to highlight current day?


*/
