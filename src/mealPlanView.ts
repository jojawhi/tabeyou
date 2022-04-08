import { userID } from './userModel';
import { filterIngredients, getMealPlanRecipes, shoppingDayOffset } from './mealPlanModel';
import { addGroceryListToDB } from './groceryListModel';
import { generatePageSubheading, generateModalSection } from './components';
import displayRecipeListModal from './recipeListModal';

const daysArray: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

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
	headerText.textContent = daysArray[Number(day)].toUpperCase();

	header.appendChild(headerText);

	return header;
};

const generateMealPlanCell = (dayIndex: number, recipeName: string | null) => {
	const cell = document.createElement('div');
	cell.classList.add('meal-plan-cell');
	cell.setAttribute('id', `cell-${dayIndex}`);

	const cellButton = document.createElement('button');
	cellButton.classList.add('cell-button');

	if (recipeName != null) {
		cellButton.textContent = recipeName;
	} else if (recipeName === null) {
		const cellIcon = document.createElement('i');
		cellIcon.classList.add('fa-solid', 'fa-circle-plus');
		cellButton.appendChild(cellIcon);
	}

	cellButton.addEventListener('click', (e) => {
		const modal = document.body.appendChild(generateModalSection('recipe-list', 'Recipes'));
		const index = dayIndex;
		displayRecipeListModal(modal, index);
	});

	cell.appendChild(cellButton);

	return cell;
};

const generateHeaderCellContainer = (
	dayString: string,
	dayIndex: number,
	recipeName: string | null
) => {
	const headerCellContainer = document.createElement('div');
	headerCellContainer.classList.add('header-cell-container');

	headerCellContainer.appendChild(generateMealPlanHeader(dayString));
	headerCellContainer.appendChild(generateMealPlanCell(dayIndex, recipeName));

	return headerCellContainer;
};

// Need to determine shopping day offset for the parameter
const generateMealPlanContainer = async (offset: number) => {
	const mealPlanContainer = document.createElement('div');
	mealPlanContainer.classList.add('meal-plan-container');
	mealPlanContainer.setAttribute('id', 'meal-plan-container');

	const mealPlanRecipes = await getMealPlanRecipes(userID()).then((mealPlanArray) => {
		// Loop algorithm from Stack Overflow: https://stackoverflow.com/questions/28430348/how-to-loop-through-arrays-starting-at-different-index-while-still-looping-throu
		// This works because i gives an index reference: https://stackoverflow.com/questions/30574147/how-to-find-the-index-of-a-missing-value-in-an-array
		for (let i = 0; i < mealPlanArray.length; i++) {
			if (mealPlanArray[i] === null) {
				let pointer = (i + offset) % mealPlanArray.length;
				const dayIndexString = pointer.toString();
				mealPlanContainer.appendChild(
					generateHeaderCellContainer(dayIndexString, pointer, null)
				);
			} else if (mealPlanArray[i] != null) {
				let pointer = (i + offset) % mealPlanArray.length;
				const dayIndexString = pointer.toString();
				// object['stringProperty'] with '' was what i was missing to access the property values
				const recipeName: string = mealPlanArray[i]['name'];
				mealPlanContainer.appendChild(
					generateHeaderCellContainer(dayIndexString, pointer, recipeName)
				);
			}
		}
		/*
		//This did not work because indexOf doesn't work on null array items
		for (const day of mealPlanArray) {
			console.log(`Day: ${day}`);
			const dayIndex = (mealPlanArray.indexOf(day) + offset) % mealPlanArray.length;
			const dayIndexString = dayIndex.toString();
			testString += `${dayIndex}, `;
			console.log(`Test String: ${testString}`);
			mealPlanContainer.appendChild(generateHeaderCellContainer(dayIndexString, day));
		}
		*/
	});

	return mealPlanContainer;
};

const generateMakeGroceryListButton = () => {
	const pageButton = document.createElement('button');
	pageButton.classList.add('button');
	pageButton.setAttribute('id', 'make-grocery-list-button');
	pageButton.textContent = 'Make Grocery List';

	pageButton.addEventListener('click', () => {
		addGroceryListToDB(userID());
	});

	return pageButton;
};

const displayMealPlan = async (section: HTMLElement) => {
	section.appendChild(generatePageSubheading(`This week's meal plan`));
	section.appendChild(await generateMealPlanContainer(shoppingDayOffset));
	section.appendChild(generateMakeGroceryListButton());
};

export default displayMealPlan;

/*
To-do:

-
*/
