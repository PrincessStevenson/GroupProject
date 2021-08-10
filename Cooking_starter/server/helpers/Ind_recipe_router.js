const { Router } = require('express');
const express = require('express');
const fetch = require('node-fetch');
const indRecipeRouter = express.Router();

const apiKey = process.env.SPOONACULAR_KEY;
const baseApiUrl ="https://api.spoonacular.com/recipes/"

// fetch("http://localhost:3000/api/recipes/:id")

indRecipeRouter.get('/:id', (req,res) => {
    const id = req.params.id;

    return fetch(`${baseApiUrl}${id}/information?apiKey=${apiKey}`)
    .then(res => res.json())
    .then(recipeData => {
        console.log(apiKey)
        res.json(recipeData)})
    .catch((error) => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error:error });
    });

})

module.exports = indRecipeRouter;