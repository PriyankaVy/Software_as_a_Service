"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Passport_1 = require("./Passport");
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');
// Import the routes
var userRouter = require('./routes/users');
var bpostRouter = require('./routes/blogPosts');
var vpostRouter = require('./routes/vlogPosts');
var cRouter = require('./routes/comments');
// Use the routes
app.use(express.json()); // Enable JSON parsing middleware
app.use(cors());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));
var Googlepassport = new Passport_1.default();
app.use(passport.initialize());
app.use(passport.session());
app.use('/', userRouter);
app.use('/', bpostRouter);
app.use('/', vpostRouter);
app.use('/', cRouter);
app.use('/', express.static(__dirname + '/bloggers-room'));
function validateAuth(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("user is authenticated");
        return next();
    }
    console.log("user is not authenticated");
    res.redirect('/');
}
app.get('/auth/google', passport.authenticate('google', { scope: ['Profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
    console.log("successfully authenticated user and returned to callback page.");
    console.log("redirecting to dashboard");
    var token = 'GENERATED_TOKEN';
    res.redirect('/dashboard/main');
});
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'bloggers-room/index.html'));
});
// Start server
var port = 8080;
app.listen(process.env.PORT || port, function () {
    console.log("Server listening at http://localhost:".concat(port));
});
