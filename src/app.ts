import { initializeApp } from '../node_modules/firebase/app';
import { getAuth, onAuthStateChanged } from '../node_modules/firebase/auth';
import { userID, getUserDarkModeSetting } from './userModel';
import { setShoppingDay, replaceMealPlan } from './mealPlanModel';
import createNav from './navView';
import sectionFactory from './section';
import generateHeader from './header';
import createFooter from './footer';
import generateLandingPage from './landing';
import { generateSettingsModal } from './settingsModal';
import '../styles/styles.css';

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
let loggedIn = false;

/* Global state variable declaring the active user, will be used for making data read/write calls */
let activeUser: string | null = null;

//CSS switching solution: https://lukelowrey.com/css-variable-theme-switcher/
export const setLightMode = () => {
	document.body.setAttribute('data-theme', 'light');
	console.log('From setLightMode: Set to light mode');
};

export const setDarkMode = () => {
	document.body.setAttribute('data-theme', 'dark');
	console.log('From setDarkMode: Set to dark mode');
};

export const setTheme = async () => {
	const userDarkModeSetting: boolean | void = await getUserDarkModeSetting(userID()).then(
		(darkModeSetting: boolean) => {
			if (darkModeSetting === true) {
				setDarkMode();
				console.log(`User setting from setTheme: ${darkModeSetting}`);
			} else if (darkModeSetting === false) {
				setLightMode();
				console.log('From setTheme: Set to light mode');
			} else {
				setDarkMode();
			}
		}
	);
};

/*Firebase observer function that detects when auth state changes, configured to update loggedIn and user state and re-render the page*/
onAuthStateChanged(auth, (user) => {
	if (user != null) {
		loggedIn = true;
		activeUser = user.uid;
		console.log(`${activeUser} logged in!`);
		userSetup(loggedIn);
		render(loggedIn);
		// const userExists = getUserDocByID(userID()).then((userExists) => {
		// 	if (userExists === true) {
		// 	} else {
		// 		console.log('From Auth: User does not exist yet.');
		// 	}
		// });
	} else if (user == null) {
		loggedIn = false;
		activeUser = null;
		console.log(`Logged in = ${loggedIn}; Active User = ${activeUser}`);
		render(loggedIn);
	}
});

export const userSetup = (auth: boolean) => {
	if (auth) {
		setShoppingDay();
		setTheme();
		replaceMealPlan();
	} else {
		console.log('userSetup: authFlag is false');
	}
};

const render = (auth: boolean) => {
	if (auth) {
		displayMainUserPage(auth);
	} else {
		setDarkMode();
		displayLandingPage(auth);
		console.log('render: No auth');
	}
};

const createPageContainer = () => {
	const pageContainer = document.createElement('div');
	pageContainer.classList.add('page-container');
	pageContainer.setAttribute('id', 'page-container');

	return pageContainer;
};

const displayLandingPage = (state: boolean) => {
	document.body.innerHTML = '';
	document.body.appendChild(generateHeader(state));
	generateLandingPage();
	document.body.appendChild(createFooter());
};

const displayMainUserPage = (state: boolean) => {
	document.body.innerHTML = '';
	document.body.appendChild(generateHeader(state));
	const pageContainer: HTMLElement = document.body.appendChild(createPageContainer());
	document.body.appendChild(createFooter());
	pageContainer.appendChild(createNav());
	const section: HTMLElement = sectionFactory().createSection();
	pageContainer.appendChild(section);
	generateSettingsModal();
};

/*

To-do:

*/
