const baseUrl = "http://localhost:5000/api/recipes"

const RecipeService = {

    getRecipes() {
        return fetch(baseUrl)
        .then(res => res.json())
    }
};

export default RecipeService
