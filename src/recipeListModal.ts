import { userID } from './userModel';
import { getRecipesFromDB } from './recipeModel';
import { closeModal } from './components';
import { addRecipeToMealPlan } from './mealPlanModel';
import displayRecipeModal from './recipeModalView';
import displayMealPlan from './mealPlanView';
import sectionFactory from './section';

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

const generateList = (index: number) => {
	const recipeList = document.createElement('ul');
	recipeList.classList.add('recipe-list');

	// Because getRecipesFromDB returns a promise, it has to be followed by .then or it won't run before the rest of the function
	const recipePromise = getRecipesFromDB(userID()).then((recipeArray) => {
		for (let i = 0; i < recipeArray.length; i++) {
			const listItem = document.createElement('li');
			listItem.classList.add('recipe-list-item');
			const listButton = document.createElement('button');
			listButton.addEventListener('click', () => {
				// displayRecipeModal(recipeArray[i]);
				addRecipeToMealPlan(userID(), index, recipeArray[i]).then(() => {
					// Chaining this with a .then() method waits until the database is updated to re-render
					// Stack Overflow: https://stackoverflow.com/questions/66928193/updating-firestore-from-vue-then-reload-page-to-get-updated-data-not-working
					const section = document.getElementById('content-section');
					if (section) {
						sectionFactory().clearSection(section);
						displayMealPlan(section);
					}
				});
				closeModal('recipe-list');
			});
			listItem.appendChild(listButton);
			listButton.textContent = recipeArray[i].name;
			recipeList.appendChild(listItem);
		}
	});
	return recipeList;
};

const generateRecipeListContainer = (index: number) => {
	const recipeListContainer = document.createElement('div');
	recipeListContainer.classList.add('grocery-list-container', 'recipe-list-container');

	recipeListContainer.appendChild(generateFilterContainer());
	recipeListContainer.appendChild(generateList(index));

	return recipeListContainer;
};

const displayRecipeListModal = (section: HTMLElement, index: number) => {
	section.appendChild(generateRecipeListContainer(index));
};

export default displayRecipeListModal;
