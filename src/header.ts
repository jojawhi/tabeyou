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

	return loginButton;
};

const createHeaderButtonsContainer = () => {
	const headerButtonsContainer = document.createElement('div');
	headerButtonsContainer.classList.add('header-buttons-container');

	headerButtonsContainer.appendChild(createSettingsButton());
	headerButtonsContainer.appendChild(createLoginButton());

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

const createHeaderContentContainer = () => {
	const headerContentContainer = document.createElement('div');
	headerContentContainer.classList.add('header-content-container');

	headerContentContainer.appendChild(createLogo());
	headerContentContainer.appendChild(createHeaderButtonsContainer());

	return headerContentContainer;
};

const createHeader = () => {
	const header = document.createElement('div');
	header.classList.add('header');

	header.appendChild(createHeaderContentContainer());

	return header;
};

export default createHeader;
