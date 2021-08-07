const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient; 


app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('recipes');
    const recipesCollection = db.collection('recipes');
    const recipesRouter = createRouter(recipesCollection);
    app.use('/api/recipes', recipesRouter);
})
.catch(console.error);

app.listen(5000, function () {
    console.log(`Listening on port ${this.address().port}`);
});