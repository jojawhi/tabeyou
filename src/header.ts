import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
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

const createSettingsButton = () => {
	const settingsImg = document.createElement('img');
	settingsImg.setAttribute('src', '../src/images/settings.png');

	const settingsButton = document.createElement('button');
	settingsButton.classList.add('settings-button', 'header-button');
	settingsButton.setAttribute('id', 'settings-button');

	const settingsButtonContainer = document.createElement('div');
	settingsButtonContainer.classList.add('settings-button-container');

	settingsButtonContainer.appendChild(settingsButton);
	settingsButton.appendChild(settingsImg);

	return settingsButtonContainer;
};

const createLoginButton = () => {
	const loginButton = document.createElement('button');
	loginButton.classList.add('button', 'header-button');
	loginButton.setAttribute('id', 'login-button');
	loginButton.textContent = 'Log in';

	loginButton.addEventListener('click', () => {
		generateLoginModal();
	});

	return loginButton;
};

const createLogoutButton = () => {
	const logoutButton = document.createElement('button');
	logoutButton.classList.add('button', 'header-button');
	logoutButton.setAttribute('id', 'logout-button');
	logoutButton.textContent = 'Log out';

	logoutButton.addEventListener('click', () => {
		signOut(auth);
	});

	return logoutButton;
};

const createHeaderButtonsContainer = (state: boolean) => {
	const headerButtonsContainer = document.createElement('div');
	headerButtonsContainer.classList.add('header-buttons-container');

	headerButtonsContainer.appendChild(createSettingsButton());
	if (state === true) {
		headerButtonsContainer.appendChild(createLogoutButton());
	} else {
		headerButtonsContainer.appendChild(createLoginButton());
	}

	return headerButtonsContainer;
};

const createLogo = () => {
	const logo = document.createElement('img');
	logo.classList.add('logo');
	logo.setAttribute('src', '../src/images/tabeyou-logo1.png');

	const logoContainer = document.createElement('div');
	logoContainer.classList.add('logo-container');

	logoContainer.appendChild(logo);

	return logoContainer;
};

const createHeaderContentContainer = (state: boolean) => {
	const headerContentContainer = document.createElement('div');
	headerContentContainer.classList.add('header-content-container');

	headerContentContainer.appendChild(createLogo());
	headerContentContainer.appendChild(createHeaderButtonsContainer(state));

	return headerContentContainer;
};

const createHeader = (state: boolean) => {
	const header = document.createElement('div');
	header.classList.add('header');

	header.appendChild(createHeaderContentContainer(state));

	return header;
};

export default createHeader;
