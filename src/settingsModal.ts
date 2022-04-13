import { initializeApp } from 'firebase/app';
import { getDoc } from 'firebase/firestore';
import { userID } from './userModel';

const generateShoppingDaySelect = () => {
	const select = document.createElement('select');
	select.setAttribute('name', 'shopping-days');

	const dayValuesArray = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	const daysArray = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	for (let i = 0; i < daysArray.length; i++) {
		const option = document.createElement('option');
		option.setAttribute('value', dayValuesArray[i]);
		option.textContent = daysArray[i];
		select.appendChild(option);
	}

	select.addEventListener('change', () => {
		//update user shopping day
	});

	return select;
};

const generateShoppingDayContainer = () => {
	const shoppingDayContainer = document.createElement('div');
	shoppingDayContainer.classList.add('setting-item-container');

	const shoppingDayLabel = document.createElement('label');
	shoppingDayLabel.setAttribute('for', 'shopping-days');
	shoppingDayLabel.textContent = 'Shopping Day:';

	shoppingDayContainer.appendChild(shoppingDayLabel);
	shoppingDayContainer.appendChild(generateShoppingDaySelect());

	return shoppingDayContainer;
};

const generateDarkModeToggle = () => {
	const darkModeSwitch = document.createElement('label');
	darkModeSwitch.classList.add('switch');

	const darkModeInput = document.createElement('input');
	darkModeInput.setAttribute('type', 'checkbox');

	const darkModeSlider = document.createElement('span');
	darkModeSlider.classList.add('slider', 'slider-on');

	darkModeInput.addEventListener('change', () => {
		darkModeSlider.classList.toggle('slider-on');
		//on input, update user doc darkMode boolean value
	});

	darkModeSwitch.appendChild(darkModeInput);
	darkModeSwitch.appendChild(darkModeSlider);

	return darkModeSwitch;
};

const generateDarkModeContainer = () => {
	const darkModeContainer = document.createElement('div');
	darkModeContainer.classList.add('setting-item-container');

	const darkModeLabel = document.createElement('label');
	darkModeLabel.textContent = 'Dark Mode:';

	darkModeContainer.appendChild(darkModeLabel);
	darkModeContainer.appendChild(generateDarkModeToggle());

	return darkModeContainer;
};

export const generateSettingsModal = () => {
	const pageContainer = document.getElementById('page-container');

	const settingsModal = document.createElement('div');
	settingsModal.setAttribute('id', 'settings-modal');
	settingsModal.classList.add('slide-out-view');

	settingsModal.appendChild(generateDarkModeContainer());
	settingsModal.appendChild(generateShoppingDayContainer());

	if (pageContainer) {
		pageContainer.appendChild(settingsModal);
	}
};

export const displaySettingsModal = () => {
	const settingsModal = document.getElementById('settings-modal');

	if (settingsModal) {
		settingsModal.classList.toggle('slide-out-view');
	}
};
