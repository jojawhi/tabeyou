import { initializeApp } from '../node_modules/firebase/app';
import { getAuth, onAuthStateChanged } from '../node_modules/firebase/auth';
import { setShoppingDay, checkMealPlanExpiry, } from './mealPlanModel';
import './style.css';
import createNav from './navView';
import sectionFactory from './section';
import createHeader from './header';
import createFooter from './footer';
import generateLandingPage from './landing';
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
onAuthStateChanged(auth, (user) => {
    if (user != null) {
        loggedIn = true;
        activeUser = user.uid;
        console.log(`${activeUser} logged in!`);
        setShoppingDay();
        checkMealPlanExpiry();
        displayMainUserPage(loggedIn);
    }
    else {
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
const displayLandingPage = (state) => {
    document.body.innerHTML = '';
    document.body.appendChild(createHeader(state));
    generateLandingPage();
    document.body.appendChild(createFooter());
};
const displayMainUserPage = (state) => {
    document.body.innerHTML = '';
    document.body.appendChild(createHeader(state));
    const pageContainer = document.body.appendChild(createPageContainer());
    document.body.appendChild(createFooter());
    pageContainer.appendChild(createNav());
    const section = sectionFactory().createSection();
    pageContainer.appendChild(section);
};
