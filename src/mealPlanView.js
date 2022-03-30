import { createNewMealPlan } from './mealPlanModel';
import { generatePageSubheading } from './components';
import displayRecipeListModal from './recipeListModal';
import { generateModalSection } from './components';
const daysArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const setShoppingDayOffset = (day) => {
    let offset = daysArray.indexOf(day);
    return offset;
};
const generateMealPlanHeader = (day) => {
    const header = document.createElement('div');
    header.classList.add('meal-plan-header');
    const headerText = document.createElement('h2');
    headerText.classList.add('meal-plan-header-text');
    headerText.textContent = day;
    header.appendChild(headerText);
    return header;
};
const generateMealPlanCell = (day) => {
    const cell = document.createElement('div');
    cell.classList.add('meal-plan-cell');
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
const generateHeaderCellContainer = (day) => {
    const headerCellContainer = document.createElement('div');
    headerCellContainer.classList.add('header-cell-container');
    headerCellContainer.appendChild(generateMealPlanHeader(day));
    headerCellContainer.appendChild(generateMealPlanCell(day));
    return headerCellContainer;
};
const generateMealPlanContainer = (array, offset) => {
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
const displayMealPlan = (section) => {
    section.appendChild(generatePageSubheading(`This week's meal plan`));
    section.appendChild(generateMealPlanContainer(daysArray, 0));
    section.appendChild(generateMakeGroceryListButton());
};
export default displayMealPlan;
