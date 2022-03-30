import { initializeApp } from '../node_modules/firebase/app';
import { getAuth, onAuthStateChanged, User } from '../node_modules/firebase/auth';
import { getRecipesFromDB } from './recipeModel';
import { setShoppingDay } from './mealPlanModel';
import './style.css';
import createNav from './navView';
import sectionFactory from './section';
import createHeader from './header';
import createFooter from './footer';
import generateLandingPage from './landing';

// import { getUserDocByID } from './userModel';

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

/* Global state variable declaring the active user, will be used for making data read/write calls */
let activeUser: string | null = null;

/*Firebase observer function that detects when auth state changes, configured to update loggedIn and user state and re-render the page*/
onAuthStateChanged(auth, (user) => {
	if (user != null) {
		loggedIn = true;
		activeUser = user.uid;
		console.log(`${activeUser} logged in!`);
		setShoppingDay();
		//set dark or light mode
		displayMainUserPage(loggedIn);
	} else {
		loggedIn = false;
		activeUser = null;
		console.log(`Logged in = ${loggedIn}; Active User = ${activeUser}`);
		displayLandingPage(loggedIn);
	}
});

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

*/

// getUserByID('whijo');
// checkForUserByEmail('asuka.endo@gmail.com');

/*
makeUser('whijo', 'whijo.whnan@gmail.com', 'testpass');
*/
