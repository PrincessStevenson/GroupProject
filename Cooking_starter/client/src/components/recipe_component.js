import { useState, useEffect } from 'react';
import React from 'react'

const Recipe = ({recipe, onRecipeClick}) => {

    const handleClick = () =>{
        console.log(recipe)
        onRecipeClick(recipe.id)
    }
    return (
        <div onClick = {handleClick}>
        <img src ={recipe.imageType} alt= "Image of Recipe" height = "100" width ="125" ></img>
        <h3  id ={recipe.id}> {recipe.title} </h3>
        <p> Time to Make: {recipe.readyInMinutes} minutes </p>
        <p> Servings: {recipe.servings} people</p>
        </div>
    )
}

export default Recipe;