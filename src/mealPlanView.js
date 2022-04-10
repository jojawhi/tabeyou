import { userID } from './userModel';
import { getMealPlanRecipes, shoppingDayOffset } from './mealPlanModel';
import { addGroceryListToDBWithCheck } from './groceryListModel';
import { generatePageSubheading, generateModalSection } from './components';
import displayRecipeListModal from './recipeListModal';
const daysArray = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const generateMealPlanHeader = (day) => {
    const header = document.createElement('div');
    header.classList.add('meal-plan-header');
    const headerText = document.createElement('h2');
    headerText.classList.add('meal-plan-header-text');
    headerText.textContent = daysArray[Number(day)].toUpperCase();
    header.appendChild(headerText);
    return header;
};
const generateMealPlanCell = (dayIndex, recipeName) => {
    const cell = document.createElement('div');
    cell.classList.add('meal-plan-cell');
    cell.setAttribute('id', `cell-${dayIndex}`);
    const cellButton = document.createElement('button');
    cellButton.classList.add('cell-button');
    if (recipeName != null) {
        cellButton.textContent = recipeName;
    }
    else if (recipeName === null) {
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
const generateHeaderCellContainer = (dayString, dayIndex, recipeName) => {
    const headerCellContainer = document.createElement('div');
    headerCellContainer.classList.add('header-cell-container');
    headerCellContainer.appendChild(generateMealPlanHeader(dayString));
    headerCellContainer.appendChild(generateMealPlanCell(dayIndex, recipeName));
    return headerCellContainer;
};
const generateMealPlanContainer = async (offset) => {
    const mealPlanContainer = document.createElement('div');
    mealPlanContainer.classList.add('meal-plan-container');
    mealPlanContainer.setAttribute('id', 'meal-plan-container');
    const mealPlanRecipes = await getMealPlanRecipes(userID()).then((mealPlanArray) => {
        for (let i = 0; i < mealPlanArray.length; i++) {
            if (mealPlanArray[i] === null) {
                let pointer = (i + offset) % mealPlanArray.length;
                const dayIndexString = pointer.toString();
                mealPlanContainer.appendChild(generateHeaderCellContainer(dayIndexString, pointer, null));
            }
            else if (mealPlanArray[i] != null) {
                let pointer = (i + offset) % mealPlanArray.length;
                const dayIndexString = pointer.toString();
                const recipeName = mealPlanArray[i]['name'];
                mealPlanContainer.appendChild(generateHeaderCellContainer(dayIndexString, pointer, recipeName));
            }
        }
    });
    return mealPlanContainer;
};
const generateMakeGroceryListButton = () => {
    const pageButton = document.createElement('button');
    pageButton.classList.add('button');
    pageButton.setAttribute('id', 'make-grocery-list-button');
    pageButton.textContent = 'Make Grocery List';
    pageButton.addEventListener('click', () => {
        addGroceryListToDBWithCheck(userID());
    });
    return pageButton;
};
const displayMealPlan = async (section) => {
    section.appendChild(generatePageSubheading(`This week's meal plan`));
    section.appendChild(await generateMealPlanContainer(shoppingDayOffset));
    section.appendChild(generateMakeGroceryListButton());
};
export default displayMealPlan;
