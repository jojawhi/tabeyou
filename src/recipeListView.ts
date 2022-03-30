import { RecipeInterface, getRecipesFromDB, makeDatabaseRecipeArray } from './recipeModel';
import { getUserWebID, checkForCurrentUser } from './userModel';
import displayRecipeModal from './recipeModalView';
import displayNewRecipeModal from './newRecipeModal';
import { collection, getDocs, doc, setDoc } from '../node_modules/firebase/firestore';

const generatePageSubheading = (string: string) => {
	const pageSubheading = document.createElement('h3');
	pageSubheading.classList.add('page-subheading');
	pageSubheading.textContent = string;

	return pageSubheading;
};

const generateFilterContainer = () => {
	const filterContainer = document.createElement('div');
	filterContainer.classList.add('recipe-filter-container');

	const searchContainer = document.createElement('div');
	searchContainer.classList.add('search-container');

	const searchIcon = document.createElement('i');
	searchIcon.classList.add('fa-solid', 'fa-magnifying-glass');

	const searchBar = document.createElement('input');
	searchBar.setAttribute('type', 'text');

	const sortButton = document.createElement('button');

	const sortIcon = document.createElement('i');
	sortIcon.classList.add('fa-solid', 'fa-arrow-down-a-z');

	searchContainer.appendChild(searchIcon);
	searchContainer.appendChild(searchBar);
	sortButton.appendChild(sortIcon);
	filterContainer.appendChild(searchContainer);
	filterContainer.appendChild(sortButton);

	return filterContainer;
};

const generateList = () => {
	const recipeList = document.createElement('ul');
	recipeList.classList.add('recipe-list');

	// Because getRecipesFromDB returns a promise, it has to be followed by .then or it won't run before the rest of the function
	const recipePromise = getRecipesFromDB(getUserWebID(checkForCurrentUser())).then(
		(recipeArray) => {
			for (let i = 0; i < recipeArray.length; i++) {
				const listItem = document.createElement('li');
				listItem.classList.add('recipe-list-item');
				const listButton = document.createElement('button');
				listButton.addEventListener('click', () => {
					displayRecipeModal(recipeArray[i]);
				});
				listItem.appendChild(listButton);
				listButton.textContent = recipeArray[i].name;
				recipeList.appendChild(listItem);
			}
		}
	);
	return recipeList;
};

const generateRecipeListContainer = () => {
	const recipeListContainer = document.createElement('div');
	recipeListContainer.classList.add('grocery-list-container', 'recipe-list-container');

	recipeListContainer.appendChild(generateFilterContainer());
	recipeListContainer.appendChild(generateList());

	return recipeListContainer;
};

const generateNewRecipeButton = () => {
	const newRecipeButton = document.createElement('button');
	newRecipeButton.classList.add('button');
	newRecipeButton.setAttribute('id', 'new-recipe-button');
	newRecipeButton.textContent = `New Recipe`;

	newRecipeButton.addEventListener('click', () => {
		displayNewRecipeModal();
	});

	return newRecipeButton;
};

const displayRecipeList = (section: HTMLElement) => {
	section.appendChild(generatePageSubheading(`My Recipes`));
	section.appendChild(generateRecipeListContainer());
	section.appendChild(generateNewRecipeButton());
};

export default displayRecipeList;

/*
To do:

- add search functionality
- add sort A-Z/Z-A functionality
*/
