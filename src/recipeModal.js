const generateRecipeCloseButton = () => {
    const recipeCloseButton = document.createElement('button');
    recipeCloseButton.classList.add('recipe-modal-close-button');
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-solid', 'fa-xmark');
    recipeCloseButton.appendChild(closeIcon);
    recipeCloseButton.addEventListener('click', () => {
        const recipeModal = document.getElementById('recipe-modal');
        if (recipeModal) {
            recipeModal.remove();
        }
    });
    return recipeCloseButton;
};
const generateRecipeImage = () => { };
const generateRecipeModalHeading = (recipe) => {
    const recipeModalHeading = document.createElement('h3');
    recipeModalHeading.classList.add('page-subheading');
    recipeModalHeading.textContent = recipe.name;
    return recipeModalHeading;
};
const generateRecipeHeader = (recipe) => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('recipe-header-container');
    headerContainer.appendChild(generateRecipeCloseButton());
    headerContainer.appendChild(generateRecipeModalHeading(recipe));
    return headerContainer;
};
const generateModalIngredientContainers = (ingredient) => {
    const modalIngredientContainer = document.createElement('div');
    modalIngredientContainer.classList.add('recipe-ingredient-container');
    const ingredientAmount = document.createElement('input');
    ingredientAmount.classList.add('ingredient-amount');
    ingredientAmount.setAttribute('type', 'number');
    ingredientAmount.valueAsNumber = ingredient.amount;
    ingredientAmount.setAttribute('readonly', 'readonly');
    const ingredientUnit = document.createElement('input');
    ingredientUnit.classList.add('ingredient-unit');
    ingredientUnit.value = ingredient.unit;
    ingredientUnit.setAttribute('readonly', 'readonly');
    const ingredientName = document.createElement('input');
    ingredientName.classList.add('ingredient-name');
    ingredientName.value = ingredient.name;
    ingredientName.setAttribute('readonly', 'readonly');
    modalIngredientContainer.appendChild(ingredientAmount);
    modalIngredientContainer.appendChild(ingredientUnit);
    modalIngredientContainer.appendChild(ingredientName);
    return modalIngredientContainer;
};
const generateModalIngredientListContainer = (recipe) => {
    const modalIngredientListContainer = document.createElement('div');
    modalIngredientListContainer.classList.add('ingredient-list-container');
    const subheading = document.createElement('h3');
    subheading.classList.add('recipe-subheading');
    subheading.textContent = `Ingredients`;
    modalIngredientListContainer.appendChild(subheading);
    for (const ingredient of recipe.ingredientList) {
        modalIngredientListContainer.appendChild(generateModalIngredientContainers(ingredient));
    }
    return modalIngredientListContainer;
};
const generateRecipeModalSection = (recipe) => {
    const recipeModalSection = document.createElement('section');
    recipeModalSection.classList.add('recipe-modal');
    recipeModalSection.setAttribute('id', 'recipe-modal');
    recipeModalSection.appendChild(generateRecipeHeader(recipe));
    recipeModalSection.appendChild(generateModalIngredientListContainer(recipe));
    return recipeModalSection;
};
const displayRecipeModal = (recipe) => {
    document.body.appendChild(generateRecipeModalSection(recipe));
};
export default displayRecipeModal;
