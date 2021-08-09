import React from 'react';
import { useState, useEffect } from 'react';
import RecipeService from '../services/receipesServices';
import Recipe from '../components/recipe_component';

const MainComponent = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        RecipeService.getRecipes()
        .then(res => {setRecipes(res)})
    }, []);

    
    return (
        <>
        <h1> This is Main Component</h1>
        <Recipe recipes = {recipes} />
        </>
    )
}

export default MainComponent