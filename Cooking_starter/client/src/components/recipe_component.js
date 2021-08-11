import { useState, useEffect } from 'react';
import React from 'react'
import './recipe_component.css'



const Recipe = ({recipe, onRecipeClick}) => {

    const handleClick = () =>{
        console.log(recipe)
        onRecipeClick(recipe.id)
    }
    return (
        <div class= "content" onClick = {handleClick}>
        <h3  id ={recipe.id}> {recipe.title} </h3>
        <img src ={recipe.imageType} alt= "Image of Recipe" height = "125" width ="150" ></img>
        
        <p> Time to Make: {recipe.readyInMinutes} minutes </p>
        <p> Servings: {recipe.servings} people</p>
        </div>
    )
}

export default Recipe;