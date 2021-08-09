// const apiKey = process.getIndividualRecipe.SPOONACULAR_KEY;
import apiKey from '../apikey'
const baseUrl = "http://localhost:5000/api/recipes/"
const baseApiUrl ="https://api.spoonacular.com/recipes/"


const RecipeService = {

    getRecipes() {
        return fetch(baseUrl)
        .then(res => res.json())
    }
    ,

    getIndividualRecipe(recipeId) {
        return fetch(`${baseApiUrl}${recipeId}/information?apiKey=${apiKey}`)
        .then(res => res.json())

    }
};

export default RecipeService
