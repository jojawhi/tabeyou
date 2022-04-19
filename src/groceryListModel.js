import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore, collection, getDocs, doc, addDoc, query, where, updateDoc, deleteDoc, } from '../node_modules/firebase/firestore';
import { userID } from './userModel';
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
        if (snapshot) {
            const groceryList = snapshot.data();
            if (groceryList) {
                return new GroceryList(groceryList.author, groceryList.dateStart, groceryList.dateEnd, groceryList.expired, groceryList.listItems);
            }
        }
    },
};
const generateGroceryListObject = async (uid, array) => {
    const groceryList = new GroceryList(uid, null, null, false, null);
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
export const deleteCurrentGroceryList = async (uid) => {
    const groceryListID = await getCurrentGroceryListID(uid);
    await deleteDoc(doc(db, `users/${uid}/groceryLists/${groceryListID}`));
};
export const addGroceryListToDBWithoutCheck = async (uid, array) => {
    const groceryList = await generateGroceryListObject(uid, array);
    const newGroceryListRef = await addDoc(collection(db, `users/${uid}/groceryLists`), groceryListConverter.toFirestore(groceryList)).then(() => {
        const section = document.getElementById('content-section');
        if (section) {
            sectionFactory().clearSection(section);
            displayGroceryList(section);
        }
    });
};
export const addGroceryListToDBWithCheck = async (uid, array) => {
    const expiryCheck = await checkGroceryListExpiry();
    if (expiryCheck === true) {
        const groceryList = await generateGroceryListObject(uid, array);
        const newGroceryListRef = await addDoc(collection(db, `users/${uid}/groceryLists`), groceryListConverter.toFirestore(groceryList)).then(() => {
            const section = document.getElementById('content-section');
            if (section) {
                sectionFactory().clearSection(section);
                displayGroceryList(section);
            }
        });
        console.log('Grocery List added to DB');
    }
    else {
        document.body.appendChild(generateOverwriteModal());
    }
};
export const getCurrentGroceryListDateEnd = async (uid) => {
    const groceryListRef = collection(db, `users/${uid}/groceryLists`);
    const groceryListQuery = query(groceryListRef, where('expired', '==', false));
    const snapshot = await getDocs(groceryListQuery);
    const groceryListArray = [];
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
    const groceryListRef = doc(db, `users/${uid}/groceryLists/${groceryListID}`);
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
    let groceryListObject;
    if (snapshot.docs[0]) {
        groceryListObject = groceryListConverter.fromFirestore(snapshot.docs[0]);
    }
    else {
        groceryListObject = new GroceryList(userID(), null, null, false, [
            {
                name: 'Make a meal plan first',
                amount: 1,
                unit: 'pc',
            },
        ]);
        addGroceryListToDBWithoutCheck(userID(), groceryListObject.listItems);
    }
    return groceryListObject;
};
export const updateGroceryListOnInput = async (uid) => {
    const groceryListID = await getCurrentGroceryListID(uid);
    const groceryListRef = doc(db, `users/${uid}/groceryLists/${groceryListID}`);
    const textContainers = document.getElementsByClassName('grocery-list-text-container');
    const ingredientArray = [];
    for (let i = 0; i < textContainers.length; i++) {
        const name = textContainers[i].children[0];
        const amount = textContainers[i].children[1];
        const unit = textContainers[i].children[2];
        const ingredient = {
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
};
