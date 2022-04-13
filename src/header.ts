import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { generateSettingsModal, displaySettingsModal } from './settingsModal';
import generateLoginModal from './loginModal';

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

const generateSettingsButton = () => {
	const settingsIcon = document.createElement('i');
	settingsIcon.classList.add('fa-solid', 'fa-gear');

	const settingsButton = document.createElement('button');
	settingsButton.classList.add('header-button', 'green-hover');
	settingsButton.setAttribute('id', 'settings-button');

	settingsButton.addEventListener('click', () => {
		displaySettingsModal();
	});

	const settingsButtonContainer = document.createElement('div');
	settingsButtonContainer.classList.add('settings-button-container');

	settingsButtonContainer.appendChild(settingsButton);
	settingsButton.insertBefore(settingsIcon, settingsButton.lastChild);

	return settingsButtonContainer;
};

const generateLoginButton = () => {
	const loginButton = document.createElement('button');
	loginButton.classList.add('button', 'header-button');
	loginButton.setAttribute('id', 'login-button');
	loginButton.textContent = 'Log in';

	loginButton.addEventListener('click', () => {
		generateLoginModal();
	});

	return loginButton;
};

const generateLogoutButton = () => {
	const logoutButton = document.createElement('button');
	logoutButton.classList.add('button', 'header-button');
	logoutButton.setAttribute('id', 'logout-button');
	logoutButton.textContent = 'Log out';

	logoutButton.addEventListener('click', () => {
		signOut(auth);
	});

	return logoutButton;
};

const generateHeaderButtonsContainer = (state: boolean) => {
	const headerButtonsContainer = document.createElement('div');
	headerButtonsContainer.classList.add('header-buttons-container');

	headerButtonsContainer.appendChild(generateSettingsButton());
	if (state === true) {
		headerButtonsContainer.appendChild(generateLogoutButton());
	} else {
		headerButtonsContainer.appendChild(generateLoginButton());
	}

	return headerButtonsContainer;
};

const generateLogo = () => {
	const logo = document.createElement('img');
	logo.classList.add('logo');
	logo.setAttribute('src', 'tabeyou-logo1.png');

	const logoContainer = document.createElement('div');
	logoContainer.classList.add('logo-container');

	logoContainer.appendChild(logo);

	return logoContainer;
};

const generateHeaderContentContainer = (state: boolean) => {
	const headerContentContainer = document.createElement('div');
	headerContentContainer.classList.add('header-content-container');

	headerContentContainer.appendChild(generateLogo());
	headerContentContainer.appendChild(generateHeaderButtonsContainer(state));

	return headerContentContainer;
};

const generateHeader = (state: boolean) => {
	const header = document.createElement('div');
	header.classList.add('header');

	header.appendChild(generateHeaderContentContainer(state));

	return header;
};

export default generateHeader;

/*
To-do:

- Put log out and settings buttons into a hamburger modal
*/
