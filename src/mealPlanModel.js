require('../node_modules/datejs/index');
import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore, collection, getDocs, doc, addDoc, getDoc, query, where, updateDoc, } from '../node_modules/firebase/firestore';
import { recipeConverter } from '../src/recipeModel';
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
    startDate;
    endDate;
    expired;
    meals;
    constructor(author, startDate, endDate, expired, meals) {
        (this.author = author),
            (this.startDate = startDate),
            (this.endDate = endDate),
            (this.expired = expired),
            (this.meals = meals);
    }
}
const mealPlanConverter = {
    toFirestore: (mealPlan) => {
        return {
            author: mealPlan.author,
            startDate: mealPlan.startDate,
            endDate: mealPlan.endDate,
            expired: mealPlan.expired,
            meals: mealPlan.meals,
        };
    },
    fromFirestore: (snapshot) => {
        const mealPlan = snapshot.data();
        if (mealPlan) {
            return new MealPlan(mealPlan.author, mealPlan.startDate, mealPlan.endDate, mealPlan.expired, mealPlan.meals);
        }
    },
};
const setStartDate = (mealPlan, day) => {
    let startDate;
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
        startDate = Date.today();
    }
    else if (day != today) {
        for (let i = 0; i < daysArray.length; i++) {
            if (day === daysArray[i]) {
                startDate = dayFunctionsArray[i];
            }
        }
    }
    mealPlan.startDate = startDate;
};
const setEndDate = (mealPlan, date) => {
    let endDate;
    const startDate = date?.toString('ddd').toLowerCase();
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
        if (startDate === daysArray[i]) {
            endDate = dayFunctionsArray[i];
        }
    }
    mealPlan.endDate = endDate;
};
export const createNewMealPlan = async () => {
    const mealPlan = new MealPlan(userID(), undefined, undefined, false, {
        0: undefined,
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
    });
    setStartDate(mealPlan, globalShoppingDay);
    console.log(`New Meal Plan Start Date: ${mealPlan.startDate}`);
    setEndDate(mealPlan, mealPlan.startDate);
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
        console.log(`Current Meal Plan: ${mealPlanID}`);
    });
    return mealPlanID;
};
export const getCurrentMealPlanEndDate = async (uid) => {
    const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
    const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
    const snapshot = await getDocs(mealPlanQuery);
    let mealPlanArray = [];
    snapshot.forEach((mealPlan) => {
        const mealPlanEndDate = mealPlan.data().endDate.toDate();
        console.log(`ID: ${mealPlan.id}; Date: ${mealPlanEndDate}`);
        mealPlanArray.push(mealPlanEndDate);
    });
    console.log(`String parsed to date: ${mealPlanArray[0]}`);
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
    console.log(`Meals: ${recipeArray}`);
    return recipeArray;
};
export const addRecipeToMealPlan = async (uid, dayIndex, recipe) => {
    const mealPlanID = await getCurrentMealPlanID(uid);
    const mealPlanRef = doc(db, `users/${uid}/mealPlans/${mealPlanID}`);
    const mealPlanSnapshot = await getDoc(mealPlanRef);
    console.log(`Number used for key comparison: ${dayIndex}`);
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
const updateMealPlanRecipe = async (uid, key, recipe) => {
    const mealPlanID = await getCurrentMealPlanID(uid);
    const mealPlanRef = doc(db, `users/${uid}/mealPlans/${mealPlanID}`);
    await updateDoc(mealPlanRef, {
        'meals.0': recipe,
    });
};
export const getCurrentMealPlanFromDB = async (uid) => {
    const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
    const mealPlanQuery = query(mealPlansRef, where('expired', '==', false));
    const snapshot = await getDocs(mealPlanQuery);
    const mealPlanObject = mealPlanConverter.fromFirestore(snapshot.docs[0]);
    console.log(`GetMealPlanFunction: ${mealPlanObject}`);
    return mealPlanObject;
};
const getMealPlanHistory = (uid) => {
    const mealPlansRef = collection(db, `users/${uid}/mealPlans`);
    const mealPlanQuery = query(mealPlansRef, where('expired', '==', true));
    console.log(`Previous Meal Plans: ${mealPlanQuery}`);
    return mealPlanQuery;
};
export const checkMealPlanExpiry = async () => {
    const endDate = await getCurrentMealPlanEndDate(userID());
    const today = Date.today();
    console.log(`Today: ${today}; End Date: ${endDate}`);
    if (today >= endDate) {
        console.log('mealPlan expired');
        updateCurrentMealPlanExpiry(userID()).then(() => {
            replaceMealPlan();
        });
        return true;
    }
    else if (today < endDate) {
        getMealPlanRecipes(userID());
        console.log('mealPlan not expired yet');
        return false;
    }
    else {
        console.log('Could not read meal plan expiry');
        return false;
    }
};
export const compareDates = async () => {
    const endDate = await getCurrentMealPlanEndDate(userID());
    const today = Date.today();
    console.log(`Today: ${today}; End Date: ${endDate}`);
    if (today >= endDate) {
        console.log('True, expired');
        return true;
    }
    else {
        console.log('False, still good');
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