import React from 'react'


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
            <img src ={individualRecipe.image} alt= "Image of Recipe" height = "100" width ="125" ></img>
           <h1>{individualRecipe.title}</h1>
           <p> Time to Make: {individualRecipe.readyInMinutes} minutes </p>
           <p> Servings: {individualRecipe.servings} people </p>
           {dietCategory()}
           
           <p>Ingredients: </p>
           <ul>
               {ingredients}
           </ul>
           <p>{individualRecipe.instructions}</p>
           
           <button type="button" onClick={handleButtonClick}>Recipe List</button>
           

        </section>
    )
};
export default IndividualRecipe