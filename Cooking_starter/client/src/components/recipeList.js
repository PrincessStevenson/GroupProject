import React from 'react'
import Recipe from './recipe_component'
import './recipeList.css';

const RecipeList = ({recipes, handleRecipeClick}) => {


    
    const ListOfRecipes = recipes.map( (recipe) => {
        return   <li class ="list_item_recipe">
                   <Recipe onRecipeClick = {handleRecipeClick}  recipe = {recipe} key = {recipe._id} />
                  </li>
        });

    return (
    <>
    <h1 class="recipe_header"> Recipe List </h1>
     
        <ul class ="list_of_recipes">
        {ListOfRecipes}
        </ul>
    </>
    )
};

export default RecipeList