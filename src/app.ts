import { initializeApp } from '../node_modules/firebase/app';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	EmailAuthProvider,
	GoogleAuthProvider,
} from '../node_modules/firebase/auth';
import {
	getFirestore,
	collection,
	getDoc,
	getDocs,
	doc,
	setDoc,
	query,
} from '../node_modules/firebase/firestore';
import './style.css';
import createNav from './navView';
import sectionFactory from './section';
import createHeader from './header';
import createFooter from './footer';
import generateLandingPage from './landing';

// tsc --watch filename to watch for file changes

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
const auth = getAuth(app);

/*Global state attribute passed to page generating functions to determine which page elements to render*/
let loggedIn: boolean = false;

/*Firebase observer function that detects when auth state changes, configured to update loggedIn state and re-render the page*/
onAuthStateChanged(auth, (user) => {
	if (user != null) {
		console.log('logged in!');
		console.log(user);
		loggedIn = true;
		displayMainUserPage(loggedIn);
	} else {
		console.log('No user');
		loggedIn = false;
		displayLandingPage(loggedIn);
	}
});

/*
const db = getFirestore(app);

const docRef = doc(db, 'users', 'jojawhi');
const docSnap = await getDoc(docRef);

//These two document and collection retrievals work

if (docSnap.exists()) {
	console.log('Document data:', docSnap.data());
} else {
	console.log('No such document!');
}

const querySnapshot = await getDocs(collection(db, 'users/jojawhi/recipes'));
querySnapshot.forEach((doc) => {
	console.log(doc.id, ' => ', doc.data());
});
*/

const createPageContainer = () => {
	const pageContainer = document.createElement('div');
	pageContainer.classList.add('page-container');
	pageContainer.setAttribute('id', 'page-container');

	return pageContainer;
};

const displayLandingPage = (state: boolean) => {
	document.body.innerHTML = '';
	document.body.appendChild(createHeader(state));
	generateLandingPage();
	document.body.appendChild(createFooter());
};

const displayMainUserPage = (state: boolean) => {
	document.body.innerHTML = '';
	document.body.appendChild(createHeader(state));
	const pageContainer: HTMLElement = document.body.appendChild(createPageContainer());
	document.body.appendChild(createFooter());
	pageContainer.appendChild(createNav());
	const section: HTMLElement = sectionFactory().createSection();
	pageContainer.appendChild(section);
};

/*

To-do:
- figure out how to change 'Log in' button to 'Log out' button

*/
