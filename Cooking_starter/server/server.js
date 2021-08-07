const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient; 
const createRouter = require('./helpers/create_router');


app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('recipes');
    const recipesCollection = db.collection('recipes');
    const recipesRouter = createRouter(recipesCollection);
    app.use('/api/recipes', recipesRouter);
    const tipsCollection = db.collection('tips');
    const tipsRouter = createRouter(tipsCollection);
    app.use('/api/tips', tipsRouter);
})
.catch(console.error);

app.listen(5000, function () {
    console.log(`Listening on port ${this.address().port}`);
});

