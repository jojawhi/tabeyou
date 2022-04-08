import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore, collection, getDocs, doc, addDoc, query, where, updateDoc, } from '../node_modules/firebase/firestore';
import { userID } from './userModel';
import { filterIngredients, getCurrentMealPlanFromDB } from './mealPlanModel';
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
export class GroceryList {
    author;
    dateStart;
    dateEnd;
    expired;
    listItems;
    constructor(author, dateStart, dateEnd, expired, listItems) {
        (this.author = author),
            (this.dateStart = dateStart),
            (this.dateEnd = dateEnd),
            (this.expired = expired),
            (this.listItems = listItems);
    }
}
const groceryListConverter = {
    toFirestore: (groceryList) => {
        return {
            author: groceryList.author,
            dateStart: groceryList.dateStart,
            dateEnd: groceryList.dateEnd,
            expired: groceryList.expired,
            listItems: groceryList.listItems,
        };
    },
    fromFirestore: (snapshot) => {
        const groceryList = snapshot.data();
        if (groceryList) {
            return new GroceryList(groceryList.author, groceryList.dateStart, groceryList.dateEnd, groceryList.expired, groceryList.listItems);
        }
    },
};
const generateGroceryListObject = async (uid) => {
    let groceryList = new GroceryList(uid, null, null, false, null);
    const mealPlan = await getCurrentMealPlanFromDB(uid)
        .then((mealPlan) => {
        groceryList.dateStart = mealPlan.dateStart;
        groceryList.dateEnd = mealPlan.dateEnd;
        return groceryList;
    })
        .then(async (groceryList) => {
        groceryList.listItems = await filterIngredients();
    });
    return groceryList;
};
export const addGroceryListToDB = async (uid) => {
    const expiryCheck = await checkGroceryListExpiry();
    if (expiryCheck === true) {
        const groceryList = await generateGroceryListObject(uid);
        const newGroceryListRef = await addDoc(collection(db, `users/${uid}/groceryLists`), groceryListConverter.toFirestore(groceryList));
        console.log(`Grocery List added to DB`);
    }
    else {
        console.log('Are you sure you want to overwrite current grocery list?');
    }
};
export const getCurrentGroceryListDateEnd = async (uid) => {
    const groceryListRef = collection(db, `users/${uid}/groceryLists`);
    const groceryListQuery = query(groceryListRef, where('expired', '==', false));
    const snapshot = await getDocs(groceryListQuery);
    let groceryListArray = [];
    snapshot.forEach((groceryList) => {
        const groceryListDateEnd = groceryList.data().dateEnd.toDate();
        groceryListArray.push(groceryListDateEnd);
    });
    return groceryListArray[0];
};
export const getCurrentGroceryListID = async (uid) => {
    const groceryListRef = collection(db, `users/${uid}/groceryLists`);
    const groceryListQuery = query(groceryListRef, where('expired', '==', false));
    const snapshot = await getDocs(groceryListQuery);
    let groceryListID = '';
    snapshot.forEach((groceryList) => {
        groceryListID += groceryList.id;
        console.log(`Current Grocery List: ${groceryListID}`);
    });
    return groceryListID;
};
const updateCurrentGroceryListExpiry = async (uid) => {
    const groceryListID = await getCurrentGroceryListID(uid);
    const groceryListRef = doc(db, `users/${uid}/mealPlans/${groceryListID}`);
    await updateDoc(groceryListRef, {
        expired: true,
    });
};
export const checkGroceryListExpiry = async () => {
    const dateEnd = await getCurrentGroceryListDateEnd(userID());
    const today = Date.today();
    if (today >= dateEnd) {
        console.log('Grocery list expired');
        updateCurrentGroceryListExpiry(userID());
        return true;
    }
    else if (today < dateEnd) {
        filterIngredients();
        console.log('Grocery List not expired yet');
        return false;
    }
    else {
        console.log('Could not read grocery list expiry');
        return false;
    }
};
export const getCurrentGroceryListFromDB = async (uid) => {
    const groceryListsRef = collection(db, `users/${uid}/groceryLists`);
    const groceryListsQuery = query(groceryListsRef, where('expired', '==', false));
    const snapshot = await getDocs(groceryListsQuery);
    const groceryListObject = groceryListConverter.fromFirestore(snapshot.docs[0]);
    return groceryListObject;
};
export const updateGroceryListOnAdd = (uid) => { };
