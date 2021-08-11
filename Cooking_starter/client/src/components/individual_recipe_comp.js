import React from 'react'
import './individual_recipe_component.css'
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";


const IndividualRecipe = ({individualRecipe, resetIndividualRecipe}) => {

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
        resetIndividualRecipe()
    };
        

    return (

        <section>
            <h1>{individualRecipe.title}</h1>

            <FacebookShareButton 
                url={"http://www.facebook.com"}
                quote={"Cook at your own PACE"}
                hashtag="#recipes"
                className="Demo__facebook_share-button">
                 <FacebookIcon size={36} round/>Share on Facebook
              </FacebookShareButton>
           
           
           <button type="button" onClick={handleButtonClick}>Back To Recipe List</button>
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

            <img class = "recipe_image" src ={individualRecipe.image} alt= "Image of Recipe" height = "400" width ="500" />
           </div>


           <p class= "instructions">{individualRecipe.instructions}</p>
        
           

        </section>
    )
};
export default IndividualRecipe