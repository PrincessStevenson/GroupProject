import React from 'react'


const IndividualRecipe = ({individualRecipe}) => {

    const ingredients = individualRecipe.extendedIngredients.map((ingredient) => {
        return <li> {ingredient.original} </li>
    });

    return (

        <section>
            <img src ={individualRecipe.image} alt= "Image of Recipe" height = "100" width ="125" ></img>
           <h1>{individualRecipe.title}</h1>
           <p> Time to Make: {individualRecipe.readyInMinutes} minutes </p>
           <p> Servings: {individualRecipe.servings} people </p>
           <ul>
               {ingredients}
           </ul>
           {/* <p>{individualRecipe.diets}</p> */}
           <p>{individualRecipe.instructions}</p>
           {/* <p>{individualRecipe.analyzedInstructions}</p> */}

        </section>
    )
};
export default IndividualRecipe