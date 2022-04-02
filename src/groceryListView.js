import { generateDeleteButton, generateUtilityButton } from './components';
import { filterIngredients } from './mealPlanModel';
const generatePageSubheading = (string) => {
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
const generateListItemText = (name, amount, unit) => {
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
const generateListItems = (item) => {
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
            container.insertBefore(generateListItems({ name: '', amount: 0, unit: '' }), addListItemButton);
        }
    });
    return addListItemButton;
};
const generateGroceryListContainer = (array) => {
    const groceryListContainer = document.createElement('div');
    groceryListContainer.classList.add('grocery-list-container');
    groceryListContainer.setAttribute('id', 'grocery-list-container');
    array.map((item) => groceryListContainer.appendChild(generateListItems(item)));
    groceryListContainer.appendChild(generateAddListItemButton());
    return groceryListContainer;
};
const displayGroceryList = async (section) => {
    section.appendChild(generatePageSubheading(`This week's grocery list`));
    section.appendChild(generateGroceryListContainer(await filterIngredients()));
};
export default displayGroceryList;
