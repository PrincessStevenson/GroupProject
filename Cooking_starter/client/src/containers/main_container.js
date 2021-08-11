import React from 'react';
import { useState, useEffect } from 'react';
import RecipeService from '../services/receipesServices';
import RecipeList from '../components/recipeList';
import IndividualRecipe from '../components/individual_recipe_comp';
import './main_container.css';

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

    const resetIndividualRecipe = () => {
        setIndividualRecipe(null)
    }
    
    const recipeShown = () => {
        if(individualRecipe) {
             return <IndividualRecipe class= "individual_recipe" individualRecipe = {individualRecipe} 
             resetIndividualRecipe = {resetIndividualRecipe}/>
            }
        else {
             return <RecipeList class= "recipe_list" recipes = {recipes} handleRecipeClick = {handleRecipeClick}/>
        }
    }

    

    return (
        <div class = "main_comp">
            {recipeShown()}
        </div>
    )
}

export default MainComponent