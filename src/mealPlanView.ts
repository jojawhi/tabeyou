import { getUserWebID, checkForCurrentUser, getUserShoppingDay } from './userModel';
import { MealPlanInterface, MealPlan, createNewMealPlan, setShoppingDay } from './mealPlanModel';
import { generatePageSubheading, generatePageButton } from './components';
import displayRecipeListModal from './recipeListModal';
import { generateModalSection } from './components';

/*
StackOverflow solution for setting shopping day:
https://stackoverflow.com/questions/28430348/how-to-loop-through-arrays-starting-at-different-index-while-still-looping-throu


	for (let i = 0; i < array.length; i++) {
		let pointer = (i + offset) % array.length;
	}

*/

const daysArray: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const setShoppingDayOffset = (day: string) => {
	let offset = daysArray.indexOf(day);
	return offset;
};

const generateMealPlanHeader = (day: string) => {
	const header = document.createElement('div');
	header.classList.add('meal-plan-header');
	/*
	if (daysArray.indexOf(day) === 0) {
		header.classList.add('top-left-corner');
	} else if (daysArray.indexOf(day) === 6) {
		header.classList.add('bottom-left-corner');
	}
*/
	const headerText = document.createElement('h2');
	headerText.classList.add('meal-plan-header-text');
	headerText.textContent = day;

	header.appendChild(headerText);

	return header;
};

const generateMealPlanCell = (day: string) => {
	const cell = document.createElement('div');
	cell.classList.add('meal-plan-cell');
	/*
	if (daysArray.indexOf(day) === 0) {
		cell.classList.add('top-right-corner');
	} else if (daysArray.indexOf(day) === 6) {
		cell.classList.add('bottom-right-corner');
	}
*/
	const cellButton = document.createElement('button');
	cellButton.classList.add('cell-button');

	const cellIcon = document.createElement('i');
	cellIcon.classList.add('fa-solid', 'fa-circle-plus');

	cellButton.addEventListener('click', (e) => {
		const modal = document.body.appendChild(generateModalSection('recipe-list', 'Recipes'));
		displayRecipeListModal(modal);
		createNewMealPlan();
	});

	cellButton.appendChild(cellIcon);
	cell.appendChild(cellButton);

	return cell;
};

const generateHeaderCellContainer = (day: string) => {
	const headerCellContainer = document.createElement('div');
	headerCellContainer.classList.add('header-cell-container');

	headerCellContainer.appendChild(generateMealPlanHeader(day));
	headerCellContainer.appendChild(generateMealPlanCell(day));

	return headerCellContainer;
};

const generateMealPlanContainer = (array: string[], offset: number) => {
	const mealPlanContainer = document.createElement('div');
	mealPlanContainer.classList.add('meal-plan-container');

	for (const day of array) {
		mealPlanContainer.appendChild(generateHeaderCellContainer(day));
	}

	return mealPlanContainer;
};

const generateMakeGroceryListButton = () => {
	const pageButton = document.createElement('button');
	pageButton.classList.add('button');
	pageButton.setAttribute('id', 'make-grocery-list-button');
	pageButton.textContent = 'Make Grocery List';

	pageButton.addEventListener('click', () => {
		console.log('clicked');
	});

	return pageButton;
};

const displayMealPlan = (section: HTMLElement) => {
	section.appendChild(generatePageSubheading(`This week's meal plan`));
	section.appendChild(generateMealPlanContainer(daysArray, 0));
	section.appendChild(generateMakeGroceryListButton());
};

export default displayMealPlan;

/*
- add dates to mealPlan headers using Date.prototype.toLocaleDateString()
*/
