const daysArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const generatePageSubheading = (string) => {
    const pageSubheading = document.createElement('h3');
    pageSubheading.classList.add('page-subheading');
    pageSubheading.textContent = string;
    return pageSubheading;
};
const generateMealPlanHeader = (day) => {
    const header = document.createElement('div');
    header.classList.add('meal-plan-header');
    if (daysArray.indexOf(day) === 0) {
        header.classList.add('top-left-corner');
    }
    else if (daysArray.indexOf(day) === 6) {
        header.classList.add('top-right-corner');
    }
    const headerText = document.createElement('h2');
    headerText.classList.add('meal-plan-header-text');
    headerText.textContent = day;
    header.appendChild(headerText);
    return header;
};
const generateMealPlanCells = (day) => {
    const cell = document.createElement('div');
    cell.classList.add('meal-plan-cell');
    if (daysArray.indexOf(day) === 0) {
        cell.classList.add('bottom-left-corner');
    }
    else if (daysArray.indexOf(day) === 6) {
        cell.classList.add('bottom-right-corner');
    }
    const cellButton = document.createElement('button');
    cellButton.classList.add('cell-button');
    const cellIcon = document.createElement('i');
    cellIcon.classList.add('fa-solid', 'fa-circle-plus');
    cellButton.appendChild(cellIcon);
    cell.appendChild(cellButton);
    return cell;
};
const generateMealPlanContainer = () => {
    const mealPlanContainer = document.createElement('div');
    mealPlanContainer.classList.add('meal-plan-container');
    for (const day of daysArray) {
        mealPlanContainer.appendChild(generateMealPlanHeader(day));
    }
    for (const day of daysArray) {
        mealPlanContainer.appendChild(generateMealPlanCells(day));
    }
    return mealPlanContainer;
};
const displayMealPlan = (section) => {
    section.appendChild(generatePageSubheading(`This week's meal plan`));
    section.appendChild(generateMealPlanContainer());
};
export default displayMealPlan;
