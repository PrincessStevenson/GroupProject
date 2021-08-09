import React from 'react';
import { useState, useEffect } from 'react';
import RecipeService from '../services/receipesServices';
import RecipeList from '../components/recipeList';

const MainComponent = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        RecipeService.getRecipes()
        .then(res => {setRecipes(res)})
    }, []);

    console.log(recipes)
    
    return (
        <>
        <h1> This is Main Component</h1>
        <RecipeList recipes = {recipes} />
        </>
    )
}

export default MainComponent