var express = require('express');
var app = express();
var mongoose = require('mongoose');
// Import the routes
var userRouter = require('./routes/users');
var bpostRouter = require('./routes/blogPosts');
var vpostRouter = require('./routes/vlogPosts');
// Use the routes
app.use(express.json()); // Enable JSON parsing middleware
app.use('/', userRouter);
app.use('/', bpostRouter);
app.use('/', vpostRouter);
// Start server
var port = 8080;
app.listen(port, function () {
    console.log("Server listening at http://localhost:".concat(port));
});
