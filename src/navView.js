import sectionFactory from './section';
import displayGroceryList from './groceryListView';
import displayRecipeList from './recipeListView';
import displayMealPlan from './mealPlanView';
const generateMealPlansButton = () => {
    const mealPlansButton = document.createElement('button');
    mealPlansButton.classList.add('nav-button');
    mealPlansButton.setAttribute('id', 'meal-plans-button');
    const mealPlansButtonText = document.createElement('p');
    mealPlansButtonText.textContent = 'Meal Plans';
    const mealPlansIcon = document.createElement('i');
    mealPlansIcon.classList.add('fa-solid', 'fa-calendar-days', 'button-icon');
    mealPlansButton.insertBefore(mealPlansIcon, mealPlansButton.firstChild);
    mealPlansButton.addEventListener('click', () => {
        const section = document.getElementById('content-section');
        if (section) {
            sectionFactory().clearSection(section);
            displayMealPlan(section);
        }
    });
    mealPlansButton.appendChild(mealPlansButtonText);
    return mealPlansButton;
};
const generateMealPlansSubnav = () => {
    const mealPlansSubnav = document.createElement('div');
    mealPlansSubnav.classList.add('subnav', 'hidden');
    const weekSubnavButton = document.createElement('button');
    weekSubnavButton.classList.add('subnav-button');
    weekSubnavButton.textContent = 'This week';
    weekSubnavButton.addEventListener('click', () => {
        const section = document.getElementById('content-section');
        if (section) {
            sectionFactory().clearSection(section);
            displayMealPlan(section);
        }
    });
    const historySubnavButton = document.createElement('button');
    historySubnavButton.classList.add('subnav-button');
    historySubnavButton.textContent = 'History';
    mealPlansSubnav.appendChild(weekSubnavButton);
    mealPlansSubnav.appendChild(historySubnavButton);
    return mealPlansSubnav;
};
const generateMealPlansNav = () => {
    const mealPlansNav = document.createElement('div');
    mealPlansNav.classList.add('nav', 'meal-plans-nav');
    const mealPlansButton = generateMealPlansButton();
    const mealPlansSubnav = generateMealPlansSubnav();
    mealPlansNav.appendChild(mealPlansButton);
    mealPlansNav.appendChild(mealPlansSubnav);
    return mealPlansNav;
};
const generateGroceryListButton = () => {
    const groceryListButton = document.createElement('button');
    groceryListButton.classList.add('nav-button');
    groceryListButton.setAttribute('id', 'grocery-list-button');
    const groceryListButtonText = document.createElement('p');
    groceryListButtonText.textContent = 'Grocery List';
    const groceryListIcon = document.createElement('i');
    groceryListIcon.classList.add('fa-solid', 'fa-list-check', 'button-icon');
    groceryListButton.insertBefore(groceryListIcon, groceryListButton.firstChild);
    groceryListButton.addEventListener('click', () => {
        const section = document.getElementById('content-section');
        if (section) {
            sectionFactory().clearSection(section);
            displayGroceryList(section);
        }
    });
    groceryListButton.appendChild(groceryListButtonText);
    return groceryListButton;
};
const generateGroceryListNav = () => {
    const groceryListNav = document.createElement('div');
    groceryListNav.classList.add('nav', 'grocery-list-nav');
    const groceryListButton = generateGroceryListButton();
    groceryListNav.appendChild(groceryListButton);
    return groceryListNav;
};
const generateRecipesButton = () => {
    const recipesButton = document.createElement('button');
    recipesButton.classList.add('nav-button');
    recipesButton.setAttribute('id', 'recipes-button');
    recipesButton.textContent = 'Recipes';
    const recipesIcon = document.createElement('i');
    recipesIcon.classList.add('fa-solid', 'fa-book', 'button-icon');
    recipesButton.insertBefore(recipesIcon, recipesButton.lastChild);
    recipesButton.addEventListener('click', () => {
        const section = document.getElementById('content-section');
        if (section) {
            sectionFactory().clearSection(section);
            displayRecipeList(section);
        }
    });
    return recipesButton;
};
const generateRecipesNav = () => {
    const recipesNav = document.createElement('div');
    recipesNav.classList.add('nav', 'recipes-nav');
    recipesNav.appendChild(generateRecipesButton());
    return recipesNav;
};
const generateNav = () => {
    const navContainer = document.createElement('nav');
    navContainer.classList.add('nav-container');
    navContainer.appendChild(generateMealPlansNav());
    navContainer.appendChild(generateGroceryListNav());
    navContainer.appendChild(generateRecipesNav());
    return navContainer;
};
export default generateNav;
