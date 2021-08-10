import React from 'react'


const IndividualRecipe = ({individualRecipe}) => {

    return (

        <section>
            <img src ={individualRecipe.image} alt= "Image of Recipe" height = "100" width ="125" ></img>
           <h1>{individualRecipe.title}</h1>
           <p> Time to Make: {individualRecipe.readyInMinutes} minutes </p>
           <p> Servings: {individualRecipe.servings} people </p>
           {/* <p>{individualRecipe.diets}</p> */}
           <p>{individualRecipe.extendedIngredients.originalString}</p>
           <p>{individualRecipe.instructions}</p>
           {/* <p>{individualRecipe.analyzedInstructions}</p> */}

        </section>
    )
};
export default IndividualRecipe