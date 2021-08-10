import React from 'react'
import Recipe from './recipe_component'
import './recipeList.css';

const RecipeList = ({recipes, handleRecipeClick}) => {


    
    const ListOfRecipes = recipes.map( (recipe) => {
        return   <li class ="list_recipe">
                   <Recipe onRecipeClick = {handleRecipeClick}  recipe = {recipe} key = {recipe._id} />
                  </li>
        });

    return (
    <div>
        <h2 class="recipe_header"> Recipe List </h2>
        
        <ul class ="list_of_recipes">
        {ListOfRecipes}
        </ul>
    </div>
    )
};

export default RecipeList