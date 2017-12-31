const express = require('express');
const path = require('path');
const Twitter = require('twitter');
const mainRoutes = require('./routes');

// Init express app
const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Using mainRoutes in our Express app
app.use(mainRoutes);

// Setting up view engine: Pug
//app.set('view engine', 'pug');

// Router Listening on port 3000
app.listen(3000, () => {
    console.log('App running on localhost:3000');
});


