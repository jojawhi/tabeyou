import { initializeApp } from '../node_modules/firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from '../node_modules/firebase/auth';
import { getFirestore, collection, getDoc, doc, setDoc, updateDoc, } from '../node_modules/firebase/firestore';
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
const checkForCurrentUser = () => {
    const auth = getAuth(app);
    if (auth.currentUser) {
        return true;
    }
    else {
        console.log('No current user');
        return false;
    }
};
const getUserWebID = (state) => {
    const auth = getAuth(app);
    if (state === true) {
        const user = auth.currentUser;
        if (user) {
            const uid = user.uid;
            return uid;
        }
        else {
            console.log('Could not get User ID');
            return 'No user';
        }
    }
    else {
        return 'Error: Cannot get user ID';
    }
};
export const userID = () => {
    return getUserWebID(checkForCurrentUser());
};
export const getUserShoppingDay = async (uid) => {
    if (uid) {
        const userRef = doc(db, 'users', uid);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
            const shoppingDay = userSnapshot.data().settings.shoppingDay;
            console.log(`User: ${uid}'s shopping day is `, shoppingDay);
            return shoppingDay;
        }
        else {
            console.log('Could not find user.');
        }
    }
    else {
        console.log('Could not get user shopping day: no uid');
    }
};
export const getUserDocByID = async (uid) => {
    const userRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
        console.log('User found in Firestore');
        return true;
    }
    else {
        console.log('User not found in Firestore');
        return false;
    }
};
export const getUserDarkModeSetting = async (uid) => {
    if (uid) {
        const userRef = doc(db, 'users', uid);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
            const darkMode = userSnapshot.data().settings.darkMode;
            console.log(`User: ${uid}'s Dark Mode setting is ${darkMode}`);
            return darkMode;
        }
        else {
            console.log('Could not find user.');
            return false;
        }
    }
    else {
        console.log('Could not get dark mode setting: no uid');
        return false;
    }
};
export const updateDarkModeSetting = async (uid, state) => {
    const userRef = doc(db, `users/${uid}`);
    if (state == true) {
        await updateDoc(userRef, {
            'settings.darkMode': true,
        });
    }
    else if (state === false) {
        await updateDoc(userRef, {
            'settings.darkMode': false,
        });
    }
};
export const addUserToDB = async (uid, email, password) => {
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
export const createNewUser = (email, password) => {
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
export const signIn = (email, password) => {
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
