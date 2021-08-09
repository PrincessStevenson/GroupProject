import React from 'react';
import { useState, useEffect } from 'react';
import RecipeService from '../services/receipesServices';
import RecipeList from '../components/recipeList';

const MainComponent = () => {

    const [recipes, setRecipes] = useState([]);
    const [individualRecipe , setIndividualRecipe] = useState([]);

    useEffect(() => {
        RecipeService.getRecipes()
        .then(res => {setRecipes(res)})
    }, []);

    const handleRecipeClick = (recipe) => {
        RecipeService.getIndividualRecipe(recipe)
        .then(result => setIndividualRecipe(recipe))
    }
    
    // const loadCondition = () => {
    //     if(individualRecipe) {
            
    //         }
    //     else {
            
    //     }
    // }

    return (
        <>
        <RecipeList recipes = {recipes} handleRecipeClick = {handleRecipeClick}/>
        </>
    )
}

export default MainComponent