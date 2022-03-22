import { initializeApp } from '../node_modules/firebase/app';

import {
	getFirestore,
	collection,
	getDocs,
	doc,
	setDoc,
	getDoc,
} from '../node_modules/firebase/firestore';

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
/*
const db = getFirestore(app);

const docRef = doc(db, 'recipes', "Roy Choi's Aglio e Olio");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
	console.log('Document data:', docSnap.data());
} else {
	console.log('No document');
}
*/

/*
 const updateRecipe = (e) => {
     const db = getFirestore(app);
     const myRecipe = db.collection('recipes').doc('docID');
     myRecipe.update({title: e.target.value});
 }


*/

/*

- create new user
- authenticate existing user



- create new recipe
- edit existing recipe
- delete existing recipe

- get list of recipe names

- create new meal plan
- edit existing meal plan

- create new grocery list
- edit => add items to and remove items from existing grocery list
-


*/
