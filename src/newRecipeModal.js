import { generateDeleteButton, generateCloseButton } from './components';
const generateNewRecipeModalHeading = () => {
    const newRecipeModalHeading = document.createElement('h3');
    newRecipeModalHeading.classList.add('page-subheading');
    newRecipeModalHeading.textContent = 'New Recipe';
    return newRecipeModalHeading;
};
const generateNewRecipeHeader = () => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('recipe-header-container');
    headerContainer.appendChild(generateCloseButton('recipe-modal'));
    headerContainer.appendChild(generateNewRecipeModalHeading());
    return headerContainer;
};
const generateFormHeadings = () => {
    const headingsContainer = document.createElement('div');
    headingsContainer.classList.add('new-recipe-modal-grid', 'form-heading');
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = 'Ingredient';
    const amountHeading = document.createElement('h3');
    amountHeading.textContent = 'Amount';
    const unitHeading = document.createElement('h3');
    unitHeading.textContent = 'Unit';
    headingsContainer.appendChild(nameHeading);
    headingsContainer.appendChild(amountHeading);
    headingsContainer.appendChild(unitHeading);
    return headingsContainer;
};
const generateIngredientInputs = () => {
    const ingredientContainer = document.createElement('div');
    ingredientContainer.classList.add('new-recipe-modal-grid');
    const ingredientNameInput = document.createElement('input');
    ingredientNameInput.classList.add('new-recipe-input');
    const ingredientAmountInput = document.createElement('input');
    ingredientAmountInput.setAttribute('type', 'number');
    ingredientAmountInput.classList.add('new-recipe-input');
    const ingredientUnitInput = document.createElement('input');
    ingredientUnitInput.classList.add('new-recipe-input');
    ingredientContainer.appendChild(ingredientNameInput);
    ingredientContainer.appendChild(ingredientAmountInput);
    ingredientContainer.appendChild(ingredientUnitInput);
    ingredientContainer.appendChild(generateDeleteButton());
    return ingredientContainer;
};
const generateAddIngredientButton = (formID) => {
    const addIngredientButton = document.createElement('button');
    addIngredientButton.classList.add('button');
    addIngredientButton.setAttribute('id', 'add-ingredient-button');
    addIngredientButton.textContent = 'Add Ingredient';
    addIngredientButton.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById(formID);
        if (form) {
            form.insertBefore(generateIngredientInputs(), addIngredientButton);
        }
    });
    return addIngredientButton;
};
const generateNewRecipeForm = () => {
    const newRecipeForm = document.createElement('form');
    newRecipeForm.setAttribute('id', 'new-recipe-form');
    newRecipeForm.appendChild(generateFormHeadings());
    newRecipeForm.appendChild(generateIngredientInputs());
    newRecipeForm.appendChild(generateAddIngredientButton('new-recipe-form'));
    return newRecipeForm;
};
const generateModalIngredientListContainer = () => {
    const modalIngredientListContainer = document.createElement('div');
    const subheading = document.createElement('h3');
    subheading.classList.add('recipe-subheading');
    subheading.textContent = `Ingredients`;
    modalIngredientListContainer.appendChild(subheading);
    modalIngredientListContainer.appendChild(generateNewRecipeForm());
    return modalIngredientListContainer;
};
const generateRecipeModalSection = () => {
    const recipeModalSection = document.createElement('section');
    recipeModalSection.classList.add('recipe-modal');
    recipeModalSection.setAttribute('id', 'recipe-modal');
    recipeModalSection.appendChild(generateNewRecipeHeader());
    recipeModalSection.appendChild(generateModalIngredientListContainer());
    return recipeModalSection;
};
const displayNewRecipeModal = () => {
    document.body.appendChild(generateRecipeModalSection());
};
export default displayNewRecipeModal;
