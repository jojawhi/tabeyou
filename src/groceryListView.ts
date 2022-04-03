import { generateDeleteButton, generateUtilityButton } from './components';
import { filterIngredients } from './mealPlanModel';
import { IngredientInterface } from './recipeModel';

const groceryListPlaceHolder: IngredientInterface[] = [
	{
		name: 'apples',
		amount: 5,
		unit: 'pc',
	},
	{
		name: 'bananas',
		amount: 3,
		unit: 'pc',
	},
	{
		name: 'onions',
		amount: 3,
		unit: 'pc',
	},
	{
		name: 'milk',
		amount: 2,
		unit: 'L',
	},
];

const generatePageSubheading = (string: string) => {
	const pageSubheading = document.createElement('h3');
	pageSubheading.classList.add('page-subheading');
	pageSubheading.textContent = string;

	return pageSubheading;
};

const generateCheckbox = () => {
	const checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');

	const checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');

	const checkmark = document.createElement('span');
	checkmark.classList.add('checkmark');

	checkbox.appendChild(checkboxInput);
	checkbox.appendChild(checkmark);

	return checkbox;
};

const generateListItemText = (name: string, amount: number, unit: string) => {
	const groceryListTextContainer = document.createElement('div');
	groceryListTextContainer.classList.add('grocery-list-text-container');

	const listItemText = document.createElement('input');
	listItemText.setAttribute('type', 'text');
	listItemText.setAttribute('readonly', 'readonly');
	listItemText.classList.add('grocery-list-text');
	listItemText.value = name;
	listItemText.addEventListener('click', () => {
		listItemText.removeAttribute('readonly');
	});
	listItemText.addEventListener('change', () => {
		listItemText.setAttribute('readonly', 'readonly');
	});

	const listItemAmount = document.createElement('input');
	listItemAmount.setAttribute('type', 'number');
	listItemAmount.setAttribute('readonly', 'readonly');
	listItemAmount.classList.add('grocery-list-amount');
	listItemAmount.valueAsNumber = amount;
	listItemAmount.addEventListener('click', () => {
		listItemAmount.removeAttribute('readonly');
	});
	listItemAmount.addEventListener('change', () => {
		listItemAmount.setAttribute('readonly', 'readonly');
	});

	const listItemUnit = document.createElement('input');
	listItemUnit.setAttribute('type', 'text');
	listItemUnit.setAttribute('readonly', 'readonly');
	listItemUnit.classList.add('grocery-list-amount');
	listItemUnit.value = unit;
	listItemUnit.addEventListener('click', () => {
		listItemUnit.removeAttribute('readonly');
	});
	listItemUnit.addEventListener('change', () => {
		listItemUnit.setAttribute('readonly', 'readonly');
	});

	groceryListTextContainer.appendChild(listItemText);
	groceryListTextContainer.appendChild(listItemAmount);
	groceryListTextContainer.appendChild(listItemUnit);

	return groceryListTextContainer;
};

const generateListItems = (item: IngredientInterface) => {
	const groceryListItem = document.createElement('div');
	groceryListItem.classList.add('grocery-list-item');

	const listItemInfo = generateListItemText(item.name, item.amount, item.unit);

	groceryListItem.appendChild(generateCheckbox());
	groceryListItem.appendChild(listItemInfo);
	groceryListItem.appendChild(generateDeleteButton());

	return groceryListItem;
};

const generateAddListItemButton = () => {
	const addListItemButton = generateUtilityButton('  Add List Item', 'add-list-item-button');
	addListItemButton.classList.add('green-hover');

	const addIcon = document.createElement('i');
	addIcon.classList.add('fa-solid', 'fa-circle-plus', 'utility-icon');

	addListItemButton.insertBefore(addIcon, addListItemButton.firstChild);

	addListItemButton.addEventListener('click', (e) => {
		e.preventDefault();
		const container = document.getElementById('grocery-list-container');
		if (container) {
			container.insertBefore(
				generateListItems({ name: '', amount: 0, unit: '' }),
				addListItemButton
			);
		}
	});

	return addListItemButton;
};

const generateGroceryListContainer = (array: IngredientInterface[]) => {
	const groceryListContainer = document.createElement('div');
	groceryListContainer.classList.add('grocery-list-container');
	groceryListContainer.setAttribute('id', 'grocery-list-container');

	/*
	for (let i = 0; i < array.length; i++) {
		groceryListContainer.appendChild(generateListItems(array[i]));
	}
*/
	array.map((item) => groceryListContainer.appendChild(generateListItems(item)));

	groceryListContainer.appendChild(generateAddListItemButton());

	return groceryListContainer;
};

/*const populateGroceryList = (item: {}) => {};*/

const displayGroceryList = async (section: HTMLElement) => {
	section.appendChild(generatePageSubheading(`This week's grocery list`));
	/*Pass the user-generated recipe ingredients array here after importing*/
	section.appendChild(generateGroceryListContainer(await filterIngredients()));
};

export default displayGroceryList;

/*
To-do:

- create "add new item" button
- create 'completed item' style (crossed through and faded)
- add JS to apply 'completed item' style when checkbox is checked
- add JS to clear section div when clicking on a nav link to prevent double loading content

*/
