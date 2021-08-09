import { useState, useEffect } from 'react';
import React from 'react'

const Recipe = ({recipe}) => {


    return (
        <div>
        <h3 id ={recipe.id}> {recipe.title} </h3>
        <p> Time to Make: {recipe.readyInMinutes} minutes </p>
        <p> Servings: {recipe.servings} people</p>
        <img src ={recipe.imageType} alt= "Image of Recipe"></img>
        </div>
    )
}

export default Recipe;