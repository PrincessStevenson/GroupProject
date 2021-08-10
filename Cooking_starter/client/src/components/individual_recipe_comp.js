import React from 'react'


const IndividualRecipe = ({individualRecipe}) => {

    const ingredients = individualRecipe.extendedIngredients.map((ingredient) => {
        return <li> {ingredient.original} </li>
    });
    
    const diets = individualRecipe.diets.join((diet) => {
        return <p> `{diet},` </p>
    })
        

    return (

        <section>
            <img src ={individualRecipe.image} alt= "Image of Recipe" height = "100" width ="125" ></img>
           <h1>{individualRecipe.title}</h1>
           <p> Time to Make: {individualRecipe.readyInMinutes} minutes </p>
           <p> Servings: {individualRecipe.servings} people </p>
           <p> Diet Category: {diets} </p>
           <ul>
               {ingredients}
           </ul>
           <p>{individualRecipe.instructions}</p>
           
           <button>Recipe List</button>
           

        </section>
    )
};
export default IndividualRecipe