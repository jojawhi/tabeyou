import { initializeApp } from 'firebase/app';
import { getDoc } from 'firebase/firestore';
import { setDarkMode, setLightMode } from './app';
import { updateDarkModeSetting, getUserDarkModeSetting, userID } from './userModel';

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

const generateDarkModeToggle = async () => {
	const darkModeSwitch = document.createElement('label');
	darkModeSwitch.classList.add('switch');

	const darkModeInput = document.createElement('input');
	darkModeInput.setAttribute('type', 'checkbox');

	const darkModeSetting = await getUserDarkModeSetting(userID());
	if (darkModeSetting === true) {
		darkModeInput.setAttribute('checked', 'checked');
	} else {
		darkModeInput.removeAttribute('checked');
	}

	const darkModeSlider = document.createElement('span');
	darkModeSlider.classList.add('slider', 'slider-on');

	//Stack Overflow for the require syntax: https://stackoverflow.com/questions/65145609/webpack-how-to-import-css-dynamically
	darkModeInput.addEventListener('change', () => {
		if (darkModeInput.checked === false) {
			updateDarkModeSetting(userID(), false).then(() => {
				setLightMode();
				// delete require.cache[require.resolve('../styles/dark.css')];
				// require('../styles/light.css');
				console.log(`Set to light mode`);
				//window.location = window.location;
			});
		} else {
			updateDarkModeSetting(userID(), true).then(() => {
				// delete require.cache[require.resolve('../styles/light.css')];
				// require('../styles/dark.css');
				setDarkMode();
				console.log(`Set to dark mode`);
				//switching to light mode works, but not back to dark mode with reloading
				//window.location = window.location;
			});
		}
	});

	darkModeSwitch.appendChild(darkModeInput);
	darkModeSwitch.appendChild(darkModeSlider);

	return darkModeSwitch;
};

const generateDarkModeContainer = async () => {
	const darkModeContainer = document.createElement('div');
	darkModeContainer.classList.add('setting-item-container');

	const darkModeLabel = document.createElement('label');
	darkModeLabel.textContent = 'Dark Mode:';

	darkModeContainer.appendChild(darkModeLabel);
	darkModeContainer.appendChild(await generateDarkModeToggle());

	return darkModeContainer;
};

export const generateSettingsModal = async () => {
	const pageContainer = document.getElementById('page-container');

	const settingsModal = document.createElement('div');
	settingsModal.setAttribute('id', 'settings-modal');
	settingsModal.classList.add('slide-out-view');

	settingsModal.appendChild(await generateDarkModeContainer());
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
