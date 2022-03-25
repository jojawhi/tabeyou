import { generateDeleteButton, generateCloseButton, closeModal } from './components';
import { getFormData } from './recipeModel';

const generateSubheading = (string: string) => {
	const subheadingContainer = document.createElement('div');
	subheadingContainer.classList.add('recipe-subheading');

	const subheading = document.createElement('h3');
	subheading.textContent = string;

	subheadingContainer.appendChild(subheading);

	return subheadingContainer;
};

const generateNewRecipeModalHeading = (): HTMLElement => {
	const newRecipeModalHeading = document.createElement('h3');
	newRecipeModalHeading.classList.add('page-subheading');
	newRecipeModalHeading.textContent = 'New Recipe';

	return newRecipeModalHeading;
};

const generateNewRecipeHeader = () => {
	const headerContainer = document.createElement('div');
	headerContainer.classList.add('recipe-header-container');

	//headerContainer.appendChild(generateNewRecipeImage());  // will add this functionality later
	headerContainer.appendChild(generateNewRecipeModalHeading());

	return headerContainer;
};

const generateNameInput = () => {
	const nameContainer = document.createElement('div');
	nameContainer.classList.add('new-recipe-instruction-grid');

	const nameInput = document.createElement('input');
	nameInput.classList.add('new-recipe-input');
	nameInput.setAttribute('name', 'name-input');

	nameContainer.appendChild(nameInput);

	return nameContainer;
};

const generateIngredientHeadings = () => {
	const headingsContainer = document.createElement('div');
	headingsContainer.classList.add('new-recipe-ingredient-grid', 'form-heading');

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
	ingredientContainer.classList.add('new-recipe-ingredient-grid');

	const ingredientNameInput = document.createElement('input');
	ingredientNameInput.classList.add('new-recipe-input');
	ingredientNameInput.setAttribute('name', 'ingredient-name-input');

	const ingredientAmountInput = document.createElement('input');
	ingredientAmountInput.setAttribute('type', 'number');
	ingredientAmountInput.setAttribute('step', '0.10');
	ingredientAmountInput.classList.add('new-recipe-input');
	ingredientAmountInput.setAttribute('name', 'ingredient-amount-input');

	const ingredientUnitInput = document.createElement('input');
	ingredientUnitInput.classList.add('new-recipe-input');
	ingredientUnitInput.setAttribute('name', 'ingredient-unit-input');

	ingredientContainer.appendChild(ingredientNameInput);
	ingredientContainer.appendChild(ingredientAmountInput);
	ingredientContainer.appendChild(ingredientUnitInput);
	ingredientContainer.appendChild(generateDeleteButton());

	return ingredientContainer;
};

const generateAddIngredientButton = (formID: string) => {
	const addIngredientButton = document.createElement('button');
	addIngredientButton.classList.add('add-ingredient-button');
	addIngredientButton.setAttribute('id', 'add-ingredient-button');
	addIngredientButton.textContent = ' Add Ingredient';

	const addIcon = document.createElement('i');
	addIcon.classList.add('fa-solid', 'fa-circle-plus');

	addIngredientButton.insertBefore(addIcon, addIngredientButton.firstChild);

	addIngredientButton.addEventListener('click', (e) => {
		e.preventDefault();
		const form = document.getElementById(formID);
		if (form) {
			form.insertBefore(generateIngredientInputs(), addIngredientButton);
		}
	});

	return addIngredientButton;
};

const generateInstructionsInputs = () => {
	const instructionContainer = document.createElement('div');
	instructionContainer.classList.add('new-recipe-instruction-grid');

	const instructionInput = document.createElement('input');
	instructionInput.classList.add('new-recipe-input');
	instructionInput.setAttribute('name', 'instruction-input');

	instructionContainer.appendChild(instructionInput);
	instructionContainer.appendChild(generateDeleteButton());

	return instructionContainer;
};

const generateAddInstructionButton = (formID: string) => {
	const addInstructionButton = document.createElement('button');
	addInstructionButton.classList.add('add-ingredient-button');
	addInstructionButton.setAttribute('id', 'add-instruction-button');
	addInstructionButton.textContent = ' Add Step';

	const addIcon = document.createElement('i');
	addIcon.classList.add('fa-solid', 'fa-circle-plus');

	addInstructionButton.insertBefore(addIcon, addInstructionButton.firstChild);

	addInstructionButton.addEventListener('click', (e) => {
		e.preventDefault();
		const form = document.getElementById(formID);
		if (form) {
			form.insertBefore(generateInstructionsInputs(), addInstructionButton);
		}
	});

	return addInstructionButton;
};

const generateSubmitRecipeButton = () => {
	const submitRecipeButton = document.createElement('button');
	submitRecipeButton.classList.add('button', 'submit-recipe-button');
	submitRecipeButton.setAttribute('type', 'submit');
	submitRecipeButton.textContent = 'Save Recipe';

	/*
	submitRecipeButton.addEventListener('click', () => {
		//function to add recipe to db
	});
    */

	return submitRecipeButton;
};

const generateNewRecipeForm = () => {
	const newRecipeForm = document.createElement('form');
	newRecipeForm.setAttribute('id', 'new-recipe-form');

	newRecipeForm.appendChild(generateSubheading('Name'));
	newRecipeForm.appendChild(generateNameInput());
	newRecipeForm.appendChild(generateSubheading('Ingredients'));
	newRecipeForm.appendChild(generateIngredientHeadings());
	newRecipeForm.appendChild(generateIngredientInputs());
	newRecipeForm.appendChild(generateAddIngredientButton('new-recipe-form'));
	newRecipeForm.appendChild(generateSubheading('Instructions'));
	newRecipeForm.appendChild(generateInstructionsInputs());
	newRecipeForm.appendChild(generateAddInstructionButton('new-recipe-form'));
	newRecipeForm.appendChild(generateSubmitRecipeButton());

	newRecipeForm.addEventListener('submit', (e) => {
		e.preventDefault();
		getFormData('new-recipe-form');
	});

	return newRecipeForm;
};

const generateModalIngredientListContainer = () => {
	const modalIngredientListContainer = document.createElement('div');

	modalIngredientListContainer.appendChild(generateNewRecipeForm());

	return modalIngredientListContainer;
};

const generateRecipeModalSection = () => {
	const recipeModalSection = document.createElement('section');
	recipeModalSection.classList.add('recipe-modal');
	recipeModalSection.setAttribute('id', 'recipe-modal');

	recipeModalSection.appendChild(generateCloseButton('recipe-modal'));
	recipeModalSection.appendChild(generateNewRecipeHeader());
	recipeModalSection.appendChild(generateModalIngredientListContainer());

	return recipeModalSection;
};

const displayNewRecipeModal = () => {
	document.body.appendChild(generateRecipeModalSection());
};

export default displayNewRecipeModal;
