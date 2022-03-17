const sampleRecipe: RecipeInterface = {
	name: `Roy Choi's Aglio e Olio`,
	ingredientList: [
		{ name: 'parmesan cheese', amount: 0.5, unit: 'C' },
		{ name: 'lemon', amount: 1, unit: 'pc' },
		{ name: 'parsley', amount: 1, unit: 'bunch' },
		{ name: 'garlic', amount: 10, unit: 'cloves' },
		{ name: 'olive oil', amount: 1, unit: 'C' },
		{ name: 'spaghetti', amount: 450, unit: 'g' },
		{ name: 'chili flakes', amount: 1, unit: 'tbsp' },
		{ name: 'salt', amount: 1, unit: 'tbsp' },
	],
	instructions: [
		`Bring a pot of water to a boil, and add 1-2 tsp of salt and 1 tbsp of olive oil.`,
		`Wash and de-stem the parsley. Chop the parsley with a rough chiffonade.`,
		`Peel garlic and slice into thin discs.`,
		`Add the spaghetti to the boiling water and cook until al dente or to desired doneness (~10 minutes).`,
		`Drain the pasta and set aside, saving about 1 cup of the pasta water and also setting this aside.`,
		`In a heavy-bottomed skillet over medium heat, add about ½ cup of olive oil (or enough to coat the bottom of the pan and cover all the garlic).`,
		`Add garlic to the pan and cook until fragrant and just browning, about 3 minutes.`,
		`Add chili flakes and all but 2-3 tbsps of the chopped parsley to the pan and cook for another 30 seconds or so.`,
		`Add the cooked pasta and stir it into the oil and garlic. Then, add the saved cup of pasta water.`,
		`Allow everything to heat and incorporate, then remove from the heat.`,
		`Add 1-2 tbsp of butter to the pasta and the juice of a lemon and stir.`,
		`Use a large fork to twist the spaghetti onto your plates.`,
		`Top with some of the garlicky oil from the pan, grated parmesan cheese, and some of the leftover chopped parsley.`,
		`Serve immediately.`,
	],
};

const recipeFactory = (name: string): {} => {
	let recipeName: string = name;
	let ingredients: IngredientInterface[] = [];
	let instructions: [] = [];

	const generateIngredientList = (ingredient: {}): {}[] => {
		let ingredientsList: {}[] = [];
		ingredientsList.push(ingredient);
		return ingredientsList;
	};

	const getInstructionsFromInput = (instruction: string): string[] => {
		let instructionsArray = [];

		instructionsArray.push(instruction);

		return instructionsArray;
	};

	/*
    const generateRecipe = (name: string, ingredientsList: {}[], instructions: string[]): {} {



    }
    */
	return { getInstructionsFromInput };
};

interface IngredientInterface {
	name: string;
	amount: number;
	unit: string;
}

interface RecipeInterface {
	name: string;
	ingredientList: IngredientInterface[];
	instructions?: string[];
}

const addToRecipeArray = (recipe: RecipeInterface) => {
	/*Push all recipes to array and return the array*/
	let recipeArray: RecipeInterface[] = [];

	recipeArray.push(recipe);

	console.log(recipeArray);

	return recipeArray;
};

const getRecipeArray = () => {
	return addToRecipeArray(sampleRecipe);
};

export default getRecipeArray;
export { RecipeInterface };

/*
const ingredientFactory = () => {
	const getIngredientFromInput = () => {
		const amount: number = document.getElementById('amount-input').value;
		const unitSelect = document.getElementById('unit-select');
		const unit = unitSelect.options[unitSelect.selectedIndex].value;
		const name: string = document.getElementById('name-input').value;

		return { name, amount, unit };
	};
};
*/

/*
const instructionFactory = () => {

}
*/

/*
To do:

- figure out how to get recipeArray from stored user info
- figure out how to accept uploaded images

*/
