import Passport from './Passport';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

// Import the routes
const userRouter = require('./routes/users');
const bpostRouter = require('./routes/blogPosts');
const vpostRouter = require('./routes/vlogPosts');
const cRouter = require('./routes/comments')

// Use the routes
app.use(express.json()); // Enable JSON parsing middleware
app.use(cors());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));

const Googlepassport = new Passport();
app.use(passport.initialize());
app.use(passport.session());
app.use('/', userRouter );
app.use('/', bpostRouter); 
app.use('/', vpostRouter);  
app.use('/', cRouter);
app.use('/',express.static(__dirname+'/bloggers-room'));

function validateAuth(req, res, next):void {
  if(req.isAuthenticated()) {
    console.log("user is authenticated");
    return next();
  }
  console.log("user is not authenticated");
  res.redirect('/');
}

app.get('/auth/google',
passport.authenticate('google', {scope: ['Profile', 'email']}));

app.get('/auth/google/callback',
passport.authenticate('google',
{ failureRedirect: '/'}),
(req, res) => {
  console.log("successfully authenticated user and returned to callback page.");
  console.log("redirecting to dashboard");
  const token = 'GENERATED_TOKEN';
    res.redirect('/dashboard/main');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'bloggers-room/index.html'));
})

// Start server
const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
