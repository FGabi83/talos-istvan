const express = require('express');
const path = require('path');
const app = express();



// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));


// Routes for specific HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist',  'privacy.html'));
});

// Catch-all route to serve index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

/*
app.get('/impresszium.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'impresszium.html'));
});*/


// Export app for start.js
module.exports = app;
// Path: start.js