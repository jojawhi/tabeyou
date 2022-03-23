/*
communicate with database regarding user authentication
relay authentication success or failure to controller

*/

import { initializeApp } from '../node_modules/firebase/app';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	getIdToken,
} from '../node_modules/firebase/auth';

import {
	getFirestore,
	collection,
	getDoc,
	getDocs,
	doc,
	setDoc,
	query,
	QuerySnapshot,
	where,
	CollectionReference,
	DocumentSnapshot,
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
const db = getFirestore(app);

/*
class User {
	constructor(public userName: string, public email: string, public password: string) {}
}

const userConverter = {
	toFirestore: (user: User) => {
		return {
			id: user.userName,
			userName: user.userName,
			email: user.email,
			password: user.password,
		};
	},
	fromFirestore: (snapshot: DocumentSnapshot) => {
		const user = snapshot.data();
		if (user) {
			return new User(user.userName, user.email, user.password);
		}
	},
};
*/

export const getUserWebID = (state: boolean) => {
	const auth = getAuth(app);
	if (state === true) {
		const user = auth.currentUser;
		if (user) {
			const uid = user.uid;
			return uid;
		}
	}
};

// Works for getting user from firestore if ID is known
export const getUserDocByID = async (uid: string) => {
	const userRef = doc(db, 'users', uid);
	const userSnapshot = await getDoc(userRef);

	if (userSnapshot.exists()) {
		console.log('UID already in use.');
	} else {
		console.log('UID is available');
	}
};

// This works for adding users to firestore
export const addUserToDB = async (uid: string, email: string, password: string) => {
	const usersRef = collection(db, 'users');

	const newUser = await setDoc(doc(usersRef, uid), {
		email: email,
		password: password,
		settings: {
			darkMode: true,
			shoppingDay: 'sun',
		},
	}).then((newUser) => {
		console.log(`User ${uid} added to database.`);
	});
};

// Currently works
export const createNewUser = (email: string, password: string) => {
	const auth = getAuth(app);

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			addUserToDB(user.uid, email, password);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`${errorCode}: ${errorMessage}`);
		});
};

// currently works
export const signIn = (email: string, password: string) => {
	const auth = getAuth(app);

	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`${errorCode}: ${errorMessage}`);
		});
};

/*
const getUserByEmail = async (collection: CollectionReference, email: string) => {
	const db = getFirestore(app);

	const userRef = doc(db, 'users', email);
	const userSnapshot = await getDoc(userRef);

	if (userSnapshot.exists()) {
		console.log('User data: ', userSnapshot.data());
		return true;
	} else {
		return false;
	}
};

const getAllUsers = (): CollectionReference => {
	const db = getFirestore(app);
	const usersRef: CollectionReference = collection(db, 'users');

	return usersRef;
};

const getUserByID = async (collection: CollectionReference, userName: string) => {
	const db = getFirestore(app);

	const userRef = doc(db, 'users', userName);
	const userSnapshot = await getDoc(userRef);

	if (userSnapshot.exists()) {
		console.log('User data: ', userSnapshot.data());
		return true;
	} else {
		return false;
	}
};




*/

/*
	create new user
	add user to database users collection
	get user info from database
	use database credentials to confirm if user exists
	sign in existing user

*/
