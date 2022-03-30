require('../node_modules/datejs/index');
import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore, collection, addDoc, } from '../node_modules/firebase/firestore';
import { getUserWebID, checkForCurrentUser, getUserShoppingDay } from './userModel';
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
export const setShoppingDay = () => {
    const shoppingDayPromise = getUserShoppingDay(getUserWebID(checkForCurrentUser())).then((shoppingDay) => {
        if (shoppingDay) {
            console.log(`User day: ${shoppingDay}, Global: ${globalShoppingDay}`);
            globalShoppingDay = shoppingDay.toLowerCase();
            console.log(`User day: ${shoppingDay}, Global is now: ${globalShoppingDay}`);
        }
    });
};
export class MealPlan {
    author;
    startDate;
    endDate;
    meals;
    constructor(author, startDate, endDate, ...meals) {
        (this.author = author),
            (this.startDate = startDate),
            (this.endDate = endDate),
            (this.meals = meals);
    }
}
const mealPlanConverter = {
    toFirestore: (mealPlan) => {
        return {
            author: mealPlan.author,
            dateStart: mealPlan.startDate,
            dateEnd: mealPlan.endDate,
            meals: mealPlan.meals,
        };
    },
    fromFirestore: (snapshot) => {
        const mealPlan = snapshot.data();
        if (mealPlan) {
            return new MealPlan(mealPlan.author, mealPlan.startDate, mealPlan.endDate, mealPlan.meals);
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
            endDate = dayFunctionsArray[i - 1];
        }
    }
    mealPlan.endDate = endDate;
};
export const createNewMealPlan = async () => {
    const mealPlan = new MealPlan(getUserWebID(checkForCurrentUser()), undefined, undefined, null, null, null, null, null, null, null);
    setStartDate(mealPlan, globalShoppingDay);
    console.log(mealPlan.startDate);
    setEndDate(mealPlan, mealPlan.startDate);
    console.log(mealPlan);
    return mealPlan;
};
export const addMealPlanToDB = async (user, mealPlan) => {
    const newMealPlanRef = await addDoc(collection(db, `users/${user}/mealPlans`), mealPlanConverter.toFirestore(mealPlan));
    console.log(`MealPlan ID: ${newMealPlanRef.id} written to User: ${user}`);
};
const updateMealPlan = () => { };
