import { initializeApp } from '../node_modules/firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from '../node_modules/firebase/auth';
import { getFirestore } from '../node_modules/firebase/firestore';
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
const signIn = (email, password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};
const createNewUser = (email, password) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};
export default signIn;
