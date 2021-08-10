// const apiKey = process.env.getIndividualRecipe.SPOONACULAR_KEY;
import apiKey from '../apikey'
const baseUrl = "http://localhost:5000/api/recipes/"
const baseApiUrl ="http://localhost:5000/recipes/"


const RecipeService = {

    getRecipes() {
        return fetch(baseUrl)
        .then(res => res.json())
    },
    

    getIndividualRecipe(recipeId) {
        return fetch(`${baseApiUrl}${recipeId}`)
        .then(res => res.json())

    }
};

export default RecipeService
