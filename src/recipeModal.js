"use strict";
const generateRecipeCloseButton = () => {
    const recipeCloseButton = document.createElement('button');
    recipeCloseButton.classList.add('recipe-modal-close-button');
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-solid', 'fa-xmark');
    recipeCloseButton.appendChild(closeIcon);
    return recipeCloseButton;
};
const generateRecipeImage = () => { };
const generateRecipeHeading = () => { };
const generateRecipeHeader = () => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('recipe-header-container');
    return headerContainer;
};
const generateIngredientListContainer = () => {
    const ingredientListContainer = document.createElement('div');
    ingredientListContainer.classList.add('ingredient-list-container');
    return ingredientListContainer;
};
const generateRecipeModalSection = () => {
    const recipeModalSection = document.createElement('section');
    recipeModalSection.classList.add('recipe-modal');
    return recipeModalSection;
};
