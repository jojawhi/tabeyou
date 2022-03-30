import { RecipeInterface, IngredientInterface } from './recipeModel';
import { generateCloseButton, closeModal } from './components';

/*Header*/

const generateRecipeImage = () => {
	const recipeImage = document.createElement('img');
	recipeImage.classList.add('recipe-img');
	recipeImage.setAttribute('src', '../src/images/kimchi-rice.jpg');

	return recipeImage;
};

const generateRecipeModalHeading = (recipe: RecipeInterface): HTMLElement => {
	const recipeModalHeading = document.createElement('h3');
	recipeModalHeading.classList.add('page-subheading');
	recipeModalHeading.textContent = recipe.name;

	return recipeModalHeading;
};

const generateRecipeHeader = (recipe: RecipeInterface) => {
	const headerContainer = document.createElement('div');
	headerContainer.classList.add('recipe-header-container');

	headerContainer.appendChild(generateRecipeImage());
	headerContainer.appendChild(generateRecipeModalHeading(recipe));

	return headerContainer;
};

/*Recipe Display*/

const generateModalIngredientContainers = (ingredient: IngredientInterface) => {
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

const generateModalIngredientListContainer = (recipe: RecipeInterface) => {
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

/*Section*/

const generateRecipeModalSection = (recipe: RecipeInterface) => {
	const recipeModalSection = document.createElement('section');
	recipeModalSection.classList.add('recipe-modal');
	recipeModalSection.setAttribute('id', 'recipe-modal');

	recipeModalSection.appendChild(generateCloseButton('recipe-modal'));
	recipeModalSection.appendChild(generateRecipeHeader(recipe));
	recipeModalSection.appendChild(generateModalIngredientListContainer(recipe));

	return recipeModalSection;
};

const displayRecipeModal = (recipe: RecipeInterface) => {
	document.body.appendChild(generateRecipeModalSection(recipe));
};

export default displayRecipeModal;

/*
To do:
- add instruction view styles
- figure out how to accept uploaded images
- figure out how to make the ingredients and the instructions display on a slider/carousel/separate pages
- add edit/save function to recipe modals
- add 'add to meal plan' button

*/
