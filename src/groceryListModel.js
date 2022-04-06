import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore, } from '../node_modules/firebase/firestore';
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
    startDate;
    endDate;
    expired;
    listItems;
    constructor(author, startDate, endDate, expired, listItems) {
        (this.author = author),
            (this.startDate = startDate),
            (this.endDate = endDate),
            (this.expired = expired),
            (this.listItems = listItems);
    }
}
const groceryListPlanConverter = {
    toFirestore: (groceryList) => {
        return {
            author: groceryList.author,
            startDate: groceryList.startDate,
            endDate: groceryList.endDate,
            expired: groceryList.expired,
            listItems: groceryList.listItems,
        };
    },
    fromFirestore: (snapshot) => {
        const groceryList = snapshot.data();
        if (groceryList) {
            return new GroceryList(groceryList.author, groceryList.startDate, groceryList.endDate, groceryList.expired, groceryList.listItems);
        }
    },
};
export const addGroceryListToDB = (uid) => { };
export const getGroceryListFromDB = (uid) => { };
export const updateGroceryListOnAdd = (uid) => { };
