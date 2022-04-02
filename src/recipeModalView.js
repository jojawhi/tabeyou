import { generateCloseButton, generateUtilityButton } from './components';
const generateRecipeImage = () => {
    const recipeImage = document.createElement('img');
    recipeImage.classList.add('recipe-img');
    recipeImage.setAttribute('src', '../src/images/kimchi-rice.jpg');
    return recipeImage;
};
const generateRecipeModalHeading = (recipe) => {
    const recipeModalHeading = document.createElement('h3');
    recipeModalHeading.classList.add('page-subheading');
    recipeModalHeading.textContent = recipe.name;
    return recipeModalHeading;
};
const generateRecipeHeader = (recipe) => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('recipe-header-container');
    headerContainer.appendChild(generateRecipeImage());
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
const generateModalInstructionContainers = (instruction, index) => {
    const modalInstructionContainer = document.createElement('div');
    modalInstructionContainer.classList.add('recipe-instruction-container');
    const instructionNumeral = document.createElement('p');
    instructionNumeral.classList.add('instruction-numeral');
    instructionNumeral.textContent = (index + 1).toString();
    const instructionText = document.createElement('p');
    instructionText.classList.add('instruction-text');
    instructionText.textContent = instruction;
    modalInstructionContainer.appendChild(instructionNumeral);
    modalInstructionContainer.appendChild(instructionText);
    return modalInstructionContainer;
};
const generateModalInstructionListContainer = (recipe) => {
    const modalInstructionListContainer = document.createElement('div');
    modalInstructionListContainer.classList.add('instruction-list-container');
    const subheading = document.createElement('h3');
    subheading.classList.add('recipe-subheading');
    subheading.textContent = `Instructions`;
    modalInstructionListContainer.appendChild(subheading);
    if (recipe.instructions) {
        for (const instruction of recipe.instructions) {
            const index = recipe.instructions.indexOf(instruction);
            modalInstructionListContainer.appendChild(generateModalInstructionContainers(instruction, index));
        }
    }
    return modalInstructionListContainer;
};
const generateButtonsContainer = () => {
    const recipeModalButtonsContainer = document.createElement('div');
    recipeModalButtonsContainer.classList.add('recipe-buttons-container');
    const addToMealPlanButton = generateUtilityButton('Meal Plan', 'add-to-mp-button');
    addToMealPlanButton.classList.add('green-hover');
    const addToMealPlanIcon = document.createElement('i');
    addToMealPlanIcon.classList.add('fa-solid', 'fa-circle-plus', 'button-icon');
    addToMealPlanButton.insertBefore(addToMealPlanIcon, addToMealPlanButton.firstChild);
    const editRecipeButton = generateUtilityButton('Edit', 'edit-recipe-button');
    editRecipeButton.classList.add('green-hover');
    const editRecipeIcon = document.createElement('i');
    editRecipeIcon.classList.add('fa-solid', 'fa-pen-to-square', 'button-icon');
    editRecipeButton.insertBefore(editRecipeIcon, editRecipeButton.firstChild);
    const deleteRecipeButton = generateUtilityButton('Delete', 'delete-recipe-button');
    deleteRecipeButton.classList.add('grocery-list-delete-button');
    const deleteRecipeIcon = document.createElement('i');
    deleteRecipeIcon.classList.add('fa-solid', 'fa-circle-minus', 'button-icon');
    deleteRecipeButton.insertBefore(deleteRecipeIcon, deleteRecipeButton.firstChild);
    recipeModalButtonsContainer.appendChild(addToMealPlanButton);
    recipeModalButtonsContainer.appendChild(editRecipeButton);
    recipeModalButtonsContainer.appendChild(deleteRecipeButton);
    return recipeModalButtonsContainer;
};
const generateRecipeModalSection = (recipe) => {
    const recipeModalSection = document.createElement('section');
    recipeModalSection.classList.add('recipe-modal');
    recipeModalSection.setAttribute('id', 'recipe-modal');
    recipeModalSection.appendChild(generateCloseButton('recipe-modal'));
    recipeModalSection.appendChild(generateRecipeHeader(recipe));
    recipeModalSection.appendChild(generateButtonsContainer());
    recipeModalSection.appendChild(generateModalIngredientListContainer(recipe));
    recipeModalSection.appendChild(generateModalInstructionListContainer(recipe));
    return recipeModalSection;
};
const displayRecipeModal = (recipe) => {
    document.body.appendChild(generateRecipeModalSection(recipe));
};
export default displayRecipeModal;
