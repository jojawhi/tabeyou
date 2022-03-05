const createMealPlansButton = () => {
    const mealPlansButton = document.createElement('button');
    mealPlansButton.classList.add('nav-button');
    mealPlansButton.setAttribute('id', 'meal-plans-button');
    mealPlansButton.textContent = 'Meal Plans';
    const mealPlansArrow = document.createElement('i');
    mealPlansArrow.classList.add('fa-solid', 'fa-angle-down', 'arrow');
    mealPlansButton.appendChild(mealPlansArrow);
    return mealPlansButton;
};
const createMealPlansSubnav = () => {
    const mealPlansSubnav = document.createElement('div');
    mealPlansSubnav.classList.add('subnav');
    const weekSubnavLink = document.createElement('a');
    weekSubnavLink.classList.add('subnav-link');
    weekSubnavLink.setAttribute('href', '');
    weekSubnavLink.textContent = 'This week';
    const historySubnavLink = document.createElement('a');
    historySubnavLink.classList.add('subnav-link');
    historySubnavLink.setAttribute('href', '');
    historySubnavLink.textContent = 'History';
    mealPlansSubnav.appendChild(weekSubnavLink);
    mealPlansSubnav.appendChild(historySubnavLink);
    return mealPlansSubnav;
};
const createMealPlansNav = () => {
    const mealPlansNav = document.createElement('div');
    mealPlansNav.classList.add('nav', 'meal-plans-nav');
    mealPlansNav.appendChild(createMealPlansButton());
    mealPlansNav.appendChild(createMealPlansSubnav());
    return mealPlansNav;
};
const createGroceryListButton = () => {
    const groceryListButton = document.createElement('button');
    groceryListButton.classList.add('nav-button');
    groceryListButton.setAttribute('id', 'grocery-list-button');
    groceryListButton.textContent = 'Grocery List';
    const groceryListArrow = document.createElement('i');
    groceryListArrow.classList.add('fa-solid', 'fa-angle-down', 'arrow');
    groceryListButton.appendChild(groceryListArrow);
    return groceryListButton;
};
const createGroceryListSubnav = () => {
    const groceryListSubnav = document.createElement('div');
    groceryListSubnav.classList.add('subnav');
    const weekSubnavLink = document.createElement('a');
    weekSubnavLink.classList.add('subnav-link');
    weekSubnavLink.setAttribute('href', '');
    weekSubnavLink.textContent = 'This week';
    const historySubnavLink = document.createElement('a');
    historySubnavLink.classList.add('subnav-link');
    historySubnavLink.setAttribute('href', '');
    historySubnavLink.textContent = 'History';
    groceryListSubnav.appendChild(weekSubnavLink);
    groceryListSubnav.appendChild(historySubnavLink);
    return groceryListSubnav;
};
const createGroceryListNav = () => {
    const groceryListNav = document.createElement('div');
    groceryListNav.classList.add('nav', 'grocery-list-nav');
    groceryListNav.appendChild(createGroceryListButton());
    groceryListNav.appendChild(createGroceryListSubnav());
    return groceryListNav;
};
const createRecipesButton = () => {
    const recipesButton = document.createElement('button');
    recipesButton.classList.add('nav-button');
    recipesButton.setAttribute('id', 'recipes-button');
    recipesButton.textContent = 'Recipes';
    return recipesButton;
};
const createRecipesNav = () => {
    const recipesNav = document.createElement('div');
    recipesNav.classList.add('nav', 'recipes-nav');
    recipesNav.appendChild(createRecipesButton());
    return recipesNav;
};
const createNav = () => {
    const navContainer = document.createElement('nav');
    navContainer.classList.add('nav-container');
    navContainer.appendChild(createMealPlansNav());
    navContainer.appendChild(createGroceryListNav());
    navContainer.appendChild(createRecipesNav());
    return navContainer;
};
export default createNav;
//# sourceMappingURL=nav.js.map