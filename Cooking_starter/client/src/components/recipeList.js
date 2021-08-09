import React from 'react'
import Recipe from './recipe_component'


const RecipeList = ({recipes, handleRecipeClick}) => {


    
    const ListOfRecipes = recipes.map( (recipe) => {
        return   <li >
                   <Recipe onRecipeClick = {handleRecipeClick}  recipe = {recipe} key = {recipe._id} />
                  </li>
        });

    return (
    <div>
        <h2> Recipe List </h2>
        
        <ul>
        {ListOfRecipes}
        </ul>
    </div>
    )
};

export default RecipeList