require('../node_modules/datejs/index');
import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore, collection, getDocs, doc, addDoc, getDoc, query, where, updateDoc, } from '../node_modules/firebase/firestore';
import { recipeConverter } from '../src/recipeModel';
import { addGroceryListToDBWithoutCheck } from './groceryListModel';
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
const daysArray = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
let globalShoppingDay = 'sun';
export let shoppingDayOffset = 0;
export const setShoppingDayOffset = () => {
    shoppingDayOffset = daysArray.indexOf(globalShoppingDay.toLowerCase());
    console.log(`Offset: ${shoppingDayOffset}`);
};
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
export class MealPlan {
    author;
    dateStart;
    dateEnd;
    expired;
    meals;
    constructor(author, dateStart, dateEnd, expired, meals) {
        (this.author = author),
            (this.dateStart = dateStart),
            (this.dateEnd = dateEnd),
            (this.expired = expired),
            (this.meals = meals);
    }
}
const mealPlanConverter = {
    toFirestore: (mealPlan) => {
        return {
            author: mealPlan.author,
            dateStart: mealPlan.dateStart,
            dateEnd: mealPlan.dateEnd,
            expired: mealPlan.expired,
            meals: mealPlan.meals,
        };
    },
    fromFirestore: (snapshot) => {
        const mealPlan = snapshot.data();
        if (mealPlan) {
            return new MealPlan(mealPlan.author, mealPlan.dateStart, mealPlan.dateEnd, mealPlan.expired, mealPlan.meals);
        }
    },
};
const setDateStart = (mealPlan, day) => {
    let dateStart;
    const today = Date.today().toString('ddd').toLowerCase();
    const daysArray = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const dayFunctionsArray = [
        Date.today().last().sun(),
        Date.today().last().mon(),
        Date.today().last().tue(),
        Date.today().last().wed(),
        Date.today().last().thu(),
        Date.today().last().fri(),
        Date.today().last().sat(),
    ];
    if (day === today) {
        dateStart = Date.today();
    }
    else if (day != today) {
        for (let i = 0; i < daysArray.length; i++) {
            if (day === daysArray[i]) {
                dateStart = dayFunctionsArray[i];
            }
        }
    }
    mealPlan.dateStart = dateStart;
};
const setDateEnd = (mealPlan, date) => {
    let dateEnd;
    const dateStart = date?.toString('ddd').toLowerCase();
    const daysArray = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const dayFunctionsArray = [
        Date.today().next().sun(),
        Date.today().next().mon(),
        Date.today().next().tue(),
        Date.today().next().wed(),
        Date.today().next().thu(),
        Date.today().next().fri(),
        Date.today().next().sat(),
    ];
    for (let i = 0; i < daysArray.length; i++) {
        if (dateStart === daysArray[i]) {
            dateEnd = dayFunctionsArray[i];
        }
    }
    mealPlan.dateEnd = dateEnd;
};
export const createNewMealPlan = async () => {
    const mealPlan = new MealPlan(userID(), undefined, undefined, false, {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
    });
    setDateStart(mealPlan, globalShoppingDay);
    console.log(`New Meal Plan Start Date: ${mealPlan.dateStart}`);
    setDateEnd(mealPlan, mealPlan.dateStart);
    console.log(mealPlan);
    return mealPlan;
};
export const addMealPlanToDB = async (user, mealPlan) => {
    const newMealPlanRef = await addDoc(collection(db, `users/${user}/mealPlans`), mealPlanConverter.toFirestore(mealPlan));
    console.log(`MealPlan ID: ${newMealPlanRef.id} written to User: ${user}`);
};
export const getCurrentMealPlanID = async (uid) => {
    const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
    const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
    const snapshot = await getDocs(mealPlanQuery);
    let mealPlanID = '';
    snapshot.forEach((mealPlan) => {
        mealPlanID += mealPlan.id;
    });
    return mealPlanID;
};
export const getCurrentMealPlanDateEnd = async (uid) => {
    const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
    const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
    const snapshot = await getDocs(mealPlanQuery);
    let mealPlanArray = [];
    snapshot.forEach((mealPlan) => {
        const mealPlanDateEnd = mealPlan.data().dateEnd.toDate();
        mealPlanArray.push(mealPlanDateEnd);
    });
    return mealPlanArray[0];
};
export const getMealPlanRecipes = async (uid) => {
    const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
    const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
    const snapshot = await getDocs(mealPlanQuery);
    let recipeArray = [];
    snapshot.forEach((mealPlan) => {
        const mealPlanObject = mealPlanConverter.fromFirestore(mealPlan);
        if (mealPlanObject) {
            const mealsObject = mealPlanObject.meals;
            recipeArray = Object.values(mealsObject);
        }
    });
    return recipeArray;
};
const getMealPlanIngredients = async () => {
    let ingredientArray = [];
    const mealPlanRecipes = await getMealPlanRecipes(userID()).then((recipeArray) => {
        for (let i = 0; i < recipeArray.length; i++) {
            if (recipeArray[i] != null) {
                for (const ingredient of recipeArray[i].ingredientList) {
                    ingredientArray.push(ingredient);
                }
            }
            else {
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
    let filteredArray = [];
    const ingredientsPromise = await getMealPlanIngredients()
        .then((ingredientArray) => {
        ingredientArray = ingredientArray.filter(function (ingredient) {
            let previous;
            if (seen.has(ingredient.name)) {
                previous = seen.get(ingredient.name);
                previous.push(ingredient['amount']);
                return false;
            }
            seen.set(ingredient.name, [ingredient.amount]);
            return true;
        });
        return ingredientArray;
    })
        .then((ingredientArray) => {
        for (let i = 0; i < ingredientArray.length; i++) {
            const seenArray = seen.get(ingredientArray[i].name);
            ingredientArray[i].amount = seenArray.reduce((previous, current) => {
                return previous + current;
            });
        }
        filteredArray = ingredientArray;
    });
    return filteredArray;
};
export const addRecipeToMealPlan = async (uid, dayIndex, recipe) => {
    const mealPlanID = await getCurrentMealPlanID(uid);
    const mealPlanRef = doc(db, `users/${uid}/mealPlans/${mealPlanID}`);
    const mealPlanSnapshot = await getDoc(mealPlanRef);
    if (mealPlanSnapshot.exists()) {
        if (dayIndex + 1 === 7) {
            await updateDoc(mealPlanRef, {
                'meals.0': recipeConverter.toFirestore(recipe),
            });
        }
        else if (dayIndex + 1 === 1) {
            await updateDoc(mealPlanRef, {
                'meals.1': recipeConverter.toFirestore(recipe),
            });
        }
        else if (dayIndex + 1 === 2) {
            await updateDoc(mealPlanRef, {
                'meals.2': recipeConverter.toFirestore(recipe),
            });
        }
        else if (dayIndex + 1 === 3) {
            await updateDoc(mealPlanRef, {
                'meals.3': recipeConverter.toFirestore(recipe),
            });
        }
        else if (dayIndex + 1 === 4) {
            await updateDoc(mealPlanRef, {
                'meals.4': recipeConverter.toFirestore(recipe),
            });
        }
        else if (dayIndex + 1 === 5) {
            await updateDoc(mealPlanRef, {
                'meals.5': recipeConverter.toFirestore(recipe),
            });
        }
        else if (dayIndex + 1 === 6) {
            await updateDoc(mealPlanRef, {
                'meals.6': recipeConverter.toFirestore(recipe),
            });
        }
    }
    else {
        console.log(`Could not access document`);
    }
};
export const getCurrentMealPlanFromDB = async (uid) => {
    const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
    const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
    const snapshot = await getDocs(mealPlanQuery);
    const mealPlanObject = mealPlanConverter.fromFirestore(snapshot.docs[0]);
    return mealPlanObject;
};
const getMealPlanHistory = (uid) => {
    const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
    const mealPlanQuery = query(mealPlansRef, where('expired', '==', true));
    console.log(`Previous Meal Plans: ${mealPlanQuery}`);
    return mealPlanQuery;
};
export const checkMealPlanExpiry = async () => {
    const dateEnd = await getCurrentMealPlanDateEnd(userID());
    const today = Date.today();
    if (today >= dateEnd) {
        console.log('mealPlan expired');
        updateCurrentMealPlanExpiry(userID()).then(() => {
            replaceMealPlan();
        });
        return true;
    }
    else if (today < dateEnd) {
        getMealPlanRecipes(userID());
        console.log('mealPlan not expired yet');
        return false;
    }
    else {
        console.log('Could not read meal plan expiry');
        replaceMealPlan();
        addGroceryListToDBWithoutCheck(userID(), getMealPlanIngredients());
        return false;
    }
};
const updateCurrentMealPlanExpiry = async (uid) => {
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
};
