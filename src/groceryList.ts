const groceryListSample: { name: string; amount: number; unit: string }[] = [
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
	/*checkboxInput.setAttribute('checked', 'false');*/

	const checkmark = document.createElement('span');
	checkmark.classList.add('checkmark');

	checkbox.appendChild(checkboxInput);
	checkbox.appendChild(checkmark);

	return checkbox;
};

const generateDeleteButton = () => {
	const deleteButton = document.createElement('button');
	deleteButton.classList.add('grocery-list-delete-button');

	const deleteIcon = document.createElement('i');
	deleteIcon.classList.add('fa-solid', 'fa-circle-minus', 'fa-xs');

	deleteButton.appendChild(deleteIcon);

	return deleteButton;
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

const generateListItems = (item: { name: string; amount: number; unit: string }) => {
	const groceryListItem = document.createElement('div');
	groceryListItem.classList.add('grocery-list-item');

	const listItemInfo = generateListItemText(item.name, item.amount, item.unit);

	groceryListItem.appendChild(generateCheckbox());
	groceryListItem.appendChild(listItemInfo);
	groceryListItem.appendChild(generateDeleteButton());

	return groceryListItem;
};

const generateGroceryListContainer = (array: { name: string; amount: number; unit: string }[]) => {
	const groceryListContainer = document.createElement('div');
	groceryListContainer.classList.add('grocery-list-container');

	/*
	for (let i = 0; i < array.length; i++) {
		groceryListContainer.appendChild(generateListItems(array[i]));
	}
*/
	array.map((item) => groceryListContainer.appendChild(generateListItems(item)));

	return groceryListContainer;
};

/*const populateGroceryList = (item: {}) => {};*/

const displayGroceryList = (section: HTMLElement) => {
	section.appendChild(generatePageSubheading(`This week's grocery list`));
	/*Pass the user-generated recipe ingredients array here after importing*/
	section.appendChild(generateGroceryListContainer(groceryListSample));
};

export default displayGroceryList;

/*
To-do:

- add delete functionality to deleteButton
- create "add new item" button
- create 'completed item' style (crossed through and faded)
- add JS to apply 'completed item' style when checkbox is checked
- add JS to clear section div when clicking on a nav link to prevent double loading content

*/
