// Create web server
const express = require('express');
const app = express();

// Create body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create comments array
const comments = [
    {username: 'alice', comment: 'I love apples'},
    {username: 'bob', comment: 'I love oranges'},
    {username: 'eve', comment: 'I love pineapples'}
];

// Create GET request
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create POST request
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Create DELETE request
app.delete('/comments/:index', (req, res) => {
    const index = req.params.index;
    comments.splice(index, 1);
    res.json({message: 'success'});
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});