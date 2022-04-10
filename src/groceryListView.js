import { generateDeleteButton, generateUtilityButton } from './components';
import { getCurrentGroceryListFromDB, updateGroceryListOnInput } from './groceryListModel';
import { userID } from './userModel';
const groceryListPlaceHolder = [
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
    checkboxInput.addEventListener('change', () => {
        const parent = checkboxInput.parentNode;
        const sibling = parent?.nextSibling;
        if (sibling) {
            sibling.classList.toggle('completed');
        }
        console.log(sibling);
    });
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
    if (listItemText && name) {
        listItemText.value = name;
    }
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
    if (listItemAmount && amount) {
        listItemAmount.valueAsNumber = amount;
    }
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
    if (listItemUnit && unit) {
        listItemUnit.value = unit;
    }
    listItemUnit.addEventListener('click', () => {
        listItemUnit.removeAttribute('readonly');
    });
    listItemUnit.addEventListener('change', () => {
        updateGroceryListOnInput(userID());
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
    const deleteButton = generateDeleteButton();
    deleteButton.addEventListener('click', () => {
        updateGroceryListOnInput(userID());
    });
    groceryListItem.appendChild(deleteButton);
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
    if (array) {
        array.map((item) => groceryListContainer.appendChild(generateListItems(item)));
    }
    groceryListContainer.appendChild(generateAddListItemButton());
    return groceryListContainer;
};
const displayGroceryList = async (section) => {
    const groceryList = await getCurrentGroceryListFromDB(userID());
    section.appendChild(generatePageSubheading(`This week's grocery list`));
    if (groceryList) {
        section.appendChild(generateGroceryListContainer(groceryList.listItems));
        console.log(`Grocery List items from DB: ${groceryList.listItems}`);
    }
};
export default displayGroceryList;
