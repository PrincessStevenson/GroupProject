import React from 'react'
import Recipe from './recipe_component'


const RecipeList = ({recipes}) => {

    const ListOfRecipes = recipes.map( (recipe) => {
        return   <li>
                  {console.log(recipe)}
                  <Recipe recipe = {recipe} key = {recipe._id} />
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