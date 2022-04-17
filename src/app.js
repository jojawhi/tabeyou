import { initializeApp } from '../node_modules/firebase/app';
import { getAuth, onAuthStateChanged } from '../node_modules/firebase/auth';
import { userID, getUserDarkModeSetting } from './userModel';
import { setShoppingDay, checkMealPlanExpiry, } from './mealPlanModel';
import createNav from './navView';
import sectionFactory from './section';
import generateHeader from './header';
import createFooter from './footer';
import generateLandingPage from './landing';
import displayMealPlan from './mealPlanView';
import { generateSettingsModal } from './settingsModal';
import '../styles/styles.css';
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
let loggedIn = false;
let activeUser = null;
let darkMode = false;
export const setLightMode = () => {
    document.body.setAttribute('data-theme', 'light');
    console.log(`From setLightMode: Set to light mode`);
};
export const setDarkMode = () => {
    document.body.setAttribute('data-theme', 'dark');
    console.log(`From setDarkMode: Set to dark mode`);
};
export const setTheme = async () => {
    const userDarkModeSetting = await getUserDarkModeSetting(userID()).then((darkModeSetting) => {
        if (darkModeSetting === true) {
            setDarkMode();
            darkMode = darkModeSetting;
            console.log(`User setting from setTheme: ${darkModeSetting}`);
        }
        else if (darkModeSetting === false) {
            setLightMode();
            darkMode = darkModeSetting;
            console.log(`From setTheme: Set to light mode`);
        }
        else {
            setDarkMode();
        }
    });
};
onAuthStateChanged(auth, (user) => {
    if (user != null) {
        loggedIn = true;
        activeUser = user.uid;
        console.log(`${activeUser} logged in!`);
        setShoppingDay();
        setTheme();
        checkMealPlanExpiry();
        displayMainUserPage(loggedIn);
    }
    else {
        loggedIn = false;
        activeUser = null;
        setDarkMode();
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
const displayLandingPage = (state) => {
    document.body.innerHTML = '';
    document.body.appendChild(generateHeader(state));
    generateLandingPage();
    document.body.appendChild(createFooter());
};
const displayMainUserPage = (state) => {
    document.body.innerHTML = '';
    document.body.appendChild(generateHeader(state));
    const pageContainer = document.body.appendChild(createPageContainer());
    document.body.appendChild(createFooter());
    pageContainer.appendChild(createNav());
    const section = sectionFactory().createSection();
    pageContainer.appendChild(section);
    displayMealPlan(section);
    generateSettingsModal();
};
