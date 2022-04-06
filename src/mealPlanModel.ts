require('../node_modules/datejs/index');

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
import { RecipeInterface, recipeConverter, IngredientInterface } from '../src/recipeModel';
import { userID, getUserShoppingDay } from './userModel';

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

const daysArray: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

let globalShoppingDay = 'sun';
export let shoppingDayOffset = 0;

export const setShoppingDayOffset = () => {
	shoppingDayOffset = daysArray.indexOf(globalShoppingDay.toLowerCase());
	console.log(`Offset: ${shoppingDayOffset}`);
};

// successfully logging user's shopping day with this, works after exporting
export const setShoppingDay = () => {
	const shoppingDayPromise = getUserShoppingDay(userID()).then((shoppingDay) => {
		if (shoppingDay) {
			console.log(`User day: ${shoppingDay}, Global: ${globalShoppingDay}`);
			globalShoppingDay = shoppingDay.toLowerCase();
			setShoppingDayOffset();
			console.log(`User day: ${shoppingDay}, Global is now: ${globalShoppingDay}`);
		}
	});
};

export interface MealPlanInterface {
	author: string | undefined;
	startDate: Date | undefined;
	endDate: Date | undefined;
	meals?: {
		0: RecipeInterface | undefined | null;
		1: RecipeInterface | undefined | null;
		2: RecipeInterface | undefined | null;
		3: RecipeInterface | undefined | null;
		4: RecipeInterface | undefined | null;
		5: RecipeInterface | undefined | null;
		6: RecipeInterface | undefined | null;
	};
}

export class MealPlan {
	author: string | undefined;
	startDate: Date | undefined;
	endDate: Date | undefined;
	expired: boolean;
	meals: {
		0: RecipeInterface | undefined | null;
		1: RecipeInterface | undefined | null;
		2: RecipeInterface | undefined | null;
		3: RecipeInterface | undefined | null;
		4: RecipeInterface | undefined | null;
		5: RecipeInterface | undefined | null;
		6: RecipeInterface | undefined | null;
	};

	constructor(
		author: string | undefined,
		startDate: Date | undefined,
		endDate: Date | undefined,
		expired: boolean,
		meals: {
			0: RecipeInterface | undefined | null;
			1: RecipeInterface | undefined | null;
			2: RecipeInterface | undefined | null;
			3: RecipeInterface | undefined | null;
			4: RecipeInterface | undefined | null;
			5: RecipeInterface | undefined | null;
			6: RecipeInterface | undefined | null;
		}
	) {
		(this.author = author),
			(this.startDate = startDate),
			(this.endDate = endDate),
			(this.expired = expired),
			(this.meals = meals);
	}
}

const mealPlanConverter = {
	toFirestore: (mealPlan: MealPlan) => {
		return {
			author: mealPlan.author,
			startDate: mealPlan.startDate,
			endDate: mealPlan.endDate,
			expired: mealPlan.expired,
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
				mealPlan.expired,
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
			endDate = dayFunctionsArray[i];
		}
	}

	mealPlan.endDate = endDate;
};

//currently working to create meal plan object
export const createNewMealPlan = async () => {
	const mealPlan: MealPlan = new MealPlan(userID(), undefined, undefined, false, {
		0: null,
		1: null,
		2: null,
		3: null,
		4: null,
		5: null,
		6: null,
	});

	setStartDate(mealPlan, globalShoppingDay);
	console.log(`New Meal Plan Start Date: ${mealPlan.startDate}`);
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

export const getCurrentMealPlanID = async (uid: string | undefined) => {
	const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
	const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
	const snapshot = await getDocs(mealPlanQuery);

	let mealPlanID: string = '';

	snapshot.forEach((mealPlan) => {
		mealPlanID += mealPlan.id;
		console.log(`Current Meal Plan: ${mealPlanID}`);
	});

	return mealPlanID;
};

export const getCurrentMealPlanEndDate = async (uid: string | undefined) => {
	const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
	const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
	const snapshot = await getDocs(mealPlanQuery);

	let mealPlanArray: any[] = [];

	snapshot.forEach((mealPlan) => {
		//toDate() method required for converting from Firestore Timestamp: https://stackoverflow.com/questions/52247445/how-do-i-convert-a-firestore-date-timestamp-to-a-js-date
		const mealPlanEndDate = mealPlan.data().endDate.toDate();
		console.log(`ID: ${mealPlan.id}; Date: ${mealPlanEndDate}`);
		mealPlanArray.push(mealPlanEndDate);
	});

	console.log(`String parsed to date: ${mealPlanArray[0]}`);

	return mealPlanArray[0];
};

//Successfully accesses meal plan data
export const getMealPlanRecipes = async (uid: string | undefined) => {
	const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
	const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
	const snapshot = await getDocs(mealPlanQuery);

	let recipeArray: any[] = [];

	snapshot.forEach((mealPlan) => {
		const mealPlanObject = mealPlanConverter.fromFirestore(mealPlan);

		if (mealPlanObject) {
			const mealsObject = mealPlanObject.meals;
			// objectName['key'] with '' is how to to access the recipe key's value in mealPlanView
			recipeArray = Object.values(mealsObject);
		}
	});

	console.log(`Meals: ${recipeArray}`);

	return recipeArray as RecipeInterface[];
};

const getMealPlanIngredients = async () => {
	let ingredientArray: IngredientInterface[] = [];

	const mealPlanRecipes = await getMealPlanRecipes(userID()).then((recipeArray) => {
		console.log(`Recipes: ${recipeArray}`);
		for (let i = 0; i < recipeArray.length; i++) {
			//Loop through the recipeArray
			if (recipeArray[i] != null) {
				for (const ingredient of recipeArray[i].ingredientList) {
					//And for each ingredient in each recipeArray item's ingredientList
					ingredientArray.push(ingredient);
				}
			} else {
				ingredientArray = [
					{
						name: 'Make a meal plan first',
						amount: 1,
						unit: 'pc',
					},
				];
			}
		}
	});
	return ingredientArray;
};

export const filterIngredients = async () => {
	let seen = new Map();
	let filteredArray: IngredientInterface[] = [];

	const ingredientsPromise = await getMealPlanIngredients()
		.then((ingredientArray) => {
			// Algorithm from Stack Overflow: https://stackoverflow.com/questions/30025965/merge-duplicate-objects-in-array-of-objects
			ingredientArray = ingredientArray.filter(function (ingredient) {
				let previous;
				//Check if the name exists in the map already
				if (seen.has(ingredient.name)) {
					// If it exists, get it from the map
					previous = seen.get(ingredient.name);
					console.log(`Previous: ${previous}`);
					// and add the ingredients value to the array of values already found
					previous.push(ingredient['amount']);
					return false;
				}

				//If we haven't seen it, add it to the map as [name: [amount]] pair
				//amount needs to be an array so that we can use previous.push() above
				seen.set(ingredient.name, [ingredient.amount]);

				return true;
			});

			return ingredientArray;
		})
		.then((ingredientArray) => {
			for (let i = 0; i < ingredientArray.length; i++) {
				//get the array with the corresponding name key
				const seenArray: number[] = seen.get(ingredientArray[i].name);
				console.log(`SeenArray: ${seenArray}`);
				//sum the numbers in the seenArray and assign the total to the original ingredient's amount
				ingredientArray[i].amount = seenArray.reduce((previous, current) => {
					return previous + current;
				});
			}
			//make the accessable array equal to the new array with all the filtered and summed values
			filteredArray = ingredientArray;
		});

	return filteredArray;
};

export const addRecipeToMealPlan = async (
	uid: string,
	dayIndex: number,
	recipe: RecipeInterface
) => {
	const mealPlanID = await getCurrentMealPlanID(uid);
	const mealPlanRef = doc(db, `users/${uid}/mealPlans/${mealPlanID}`);
	const mealPlanSnapshot = await getDoc(mealPlanRef);
	//const dayIndexWithOffset = (dayIndex + shoppingDayOffset) % daysArray.length;
	console.log(`Number used for key comparison: ${dayIndex}`);

	if (mealPlanSnapshot.exists()) {
		if (dayIndex + 1 === 7) {
			await updateDoc(mealPlanRef, {
				'meals.0': recipeConverter.toFirestore(recipe),
			});
		} else if (dayIndex + 1 === 1) {
			await updateDoc(mealPlanRef, {
				'meals.1': recipeConverter.toFirestore(recipe),
			});
		} else if (dayIndex + 1 === 2) {
			await updateDoc(mealPlanRef, {
				'meals.2': recipeConverter.toFirestore(recipe),
			});
		} else if (dayIndex + 1 === 3) {
			await updateDoc(mealPlanRef, {
				'meals.3': recipeConverter.toFirestore(recipe),
			});
		} else if (dayIndex + 1 === 4) {
			await updateDoc(mealPlanRef, {
				'meals.4': recipeConverter.toFirestore(recipe),
			});
		} else if (dayIndex + 1 === 5) {
			await updateDoc(mealPlanRef, {
				'meals.5': recipeConverter.toFirestore(recipe),
			});
		} else if (dayIndex + 1 === 6) {
			await updateDoc(mealPlanRef, {
				'meals.6': recipeConverter.toFirestore(recipe),
			});
		}

		/*
		const keysArray = Object.keys(mealPlanSnapshot.data().meals);
		for (const key in keysArray) {
			if (dayString === key) {
				await updateDoc(mealPlanRef, {
					'`meals.${dayIndex}`': recipe,
				});
			}
		}
		*/
	} else {
		console.log(`Could not access document`);
	}
};

export const getCurrentMealPlanFromDB = async (uid: string) => {
	const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
	const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
	const snapshot = await getDocs(mealPlanQuery);

	const mealPlanObject = mealPlanConverter.fromFirestore(snapshot.docs[0]);

	console.log(`GetMealPlanFunction: ${mealPlanObject}`);
	return mealPlanObject as MealPlan;
};

const getMealPlanHistory = (uid: string) => {
	const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
	const mealPlanQuery = query(mealPlansRef, where('expired', '==', true));

	console.log(`Previous Meal Plans: ${mealPlanQuery}`);

	return mealPlanQuery;
};

export const checkMealPlanExpiry = async () => {
	const endDate = await getCurrentMealPlanEndDate(userID());
	const today: Date = Date.today();

	console.log(`Today: ${today}; End Date: ${endDate}`);

	if (today >= endDate) {
		console.log('mealPlan expired');
		updateCurrentMealPlanExpiry(userID()).then(() => {
			replaceMealPlan();
		});
		return true;
	} else if (today < endDate) {
		getMealPlanRecipes(userID());
		console.log('mealPlan not expired yet');
		return false;
	} else {
		console.log('Could not read meal plan expiry');
		return false;
	}
};

// export const compareDates = async () => {
// 	const endDate = await getCurrentMealPlanEndDate(userID());
// 	const today: Date = Date.today();

// 	console.log(`Today: ${today}; End Date: ${endDate}`);

// 	if (today >= endDate) {
// 		console.log('True, expired');
// 		return true;
// 	} else {
// 		console.log('False, still good');
// 		return false;
// 	}
// };

const updateCurrentMealPlanExpiry = async (uid: string | undefined) => {
	// Needed await on the getID call
	const mealPlanID = await getCurrentMealPlanID(uid);
	const mealPlanRef = doc(db, `users/${uid}/mealPlans/${mealPlanID}`);

	await updateDoc(mealPlanRef, {
		expired: true,
	});
};

export const replaceMealPlan = () => {
	const newMealPlan = createNewMealPlan().then((mealPlan) => {
		addMealPlanToDB(userID(), mealPlan);
	});

	//update display after running this
};

/*


- automatically create new meal plan each week when endDate is reached and push previous week's meal plan to history

- on login, checkExpiry and if currentMealPlan endDate is today or before today:
	- updateExpiry to true
	- run replaceMealPlan
		- createNewMealPlan
		- addMealPlanToDB
		- use new meal plan to update mealPlanDisplay


- figure out how to populate display with current mealPlan meals
	- get mealPlan
- re-render display when new mealPlan is added



- shopping day will appear as first day in the week
- add styles to highlight current day?


*/
