// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// create the server
var server = app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});

// set up the public directory
app.use(express.static('public'));

// set up body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// set up the comments data
var comments = {
    "comments": [
        {"author": "John", "text": "This is a comment"},
        {"author": "Mike", "text": "This is a second comment"}
    ]
};