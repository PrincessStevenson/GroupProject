import React from 'react'
import './individual_recipe_component.css'


const IndividualRecipe = ({individualRecipe, resetIndvidualRecipe}) => {

    const ingredients = individualRecipe.extendedIngredients.map((ingredient) => {
        return <li> {ingredient.original} </li>
    });
    
    const diets = individualRecipe.diets.map((diet) => {
        return <li> {diet} </li>
    });

    const dietCategory = () => {
        if (diets.length > 0) {
            return (
            <div>  
            <p>Diet Category: </p>
            <ul> {diets} </ul>
            </div>
            )
        }
        return null
    }

    const handleButtonClick = () => {
        resetIndvidualRecipe()
    };
        

    return (

        <section>
            <h1>{individualRecipe.title}</h1>
            <div class="main-meat">

            <div class= "side-info">
            <p> Time to Make: {individualRecipe.readyInMinutes} minutes </p>
            <p> Servings: {individualRecipe.servings} people </p>
            {dietCategory()}
            <p>Ingredients: </p>
            <ul>
               {ingredients}
            </ul>
            </div>

            <img class = "recipe_image" src ={individualRecipe.image} alt= "Image of Recipe" height = "250" width ="350" />
           </div>


           <p class= "instructions">{individualRecipe.instructions}</p>
           
           
           <button type="button" onClick={handleButtonClick}>Recipe List</button>
           

        </section>
    )
};
export default IndividualRecipe