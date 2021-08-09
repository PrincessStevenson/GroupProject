import React from 'react';
import { useState, useEffect } from 'react';
import RecipeService from '../services/receipesServices';
import RecipeList from '../components/recipeList';
import IndividualRecipe from '../components/individual_recipe_comp';

const MainComponent = () => {

    const [recipes, setRecipes] = useState([]);
    const [individualRecipe , setIndividualRecipe] = useState(null);

    useEffect(() => {
        RecipeService.getRecipes()
        .then(res => {setRecipes(res)})
    }, []);

    
    const handleRecipeClick = (recipeId) => {
        RecipeService.getIndividualRecipe(recipeId)
        .then(result => setIndividualRecipe(result))
    }
    
    const recipeShown = () => {
        if(individualRecipe) {
             return <IndividualRecipe individualRecipe = {individualRecipe} />
            }
        else {
             return <RecipeList recipes = {recipes} handleRecipeClick = {handleRecipeClick}/>
        }
    }

    return (
        <>
        {recipeShown()}
        </>
    )
}

export default MainComponent