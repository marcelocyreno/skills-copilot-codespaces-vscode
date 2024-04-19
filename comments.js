// create a server
const express = require('express');
const app = express();
// create a port
const PORT = 3000;
// create a server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// create a router
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});
// create a router
app.get('/about', (req, res) => {
    res.send('Welcome to the about page');
});
// create a router
app.get('/contact', (req, res) => {
    res.send('Welcome to the contact page');
});
// create a router
app.get('/services', (req, res) => {
    res.send('Welcome to the services page');
});
// create a router
app.get('/comments', (req, res) => {
    res.send('Welcome to the comments page');
});

// Path: comments.js
// create a server
const express = require('express');
const app = express();
// create a port
const PORT = 3000;
// create a server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// create a router
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});
// create a router
app.get('/about', (req, res) => {
    res.send('Welcome to the about page');
});
// create a router
app.get('/contact', (req, res) => {
    res.send('Welcome to the contact page');
});
// create a router
app.get('/services', (req, res) => {
    res.send('Welcome to the services page');
});
// create a router
app.get('/comments', (req, res) => {
    res.send('Welcome to the comments page');
});
// create a router
app.get('/comments/:id', (req, res) => {
    res.send(`Welcome to the comments page ${req.params.id}`);
});

// Path: comments.js
// create a server
const express = require('express');
const app = express();
// create a port
const PORT = 3000;
// create a server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// create a router
app.get('/', (req, res) => {