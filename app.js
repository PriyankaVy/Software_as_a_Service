"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const UserModel_1 = require("./models/UserModel");
const BlogPostModel_1 = require("./models/BlogPostModel");
const VlogPostModel_1 = require("./models/VlogPostModel");
const crypto = require("crypto");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Users = new UserModel_1.UserModel();
        this.BlogPosts = new BlogPostModel_1.BlogPostModel();
        this.VlogPosts = new VlogPostModel_1.VlogPostModel();
    }
    // Configure Express middleware.
    middleware() {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        router.get('/user/:user_id', (req, res, next) => {
            var id = req.params.user_id;
            console.log('Blog posts count with id: ' + id);
            //this.BlogPosts.retrieveBlogPostsCount(res, {user_id: id});
            var query = this.BlogPosts.find({ user_id: id });
            query.exec((err, itemArray) => {
                res.json(itemArray);
            });
        });
        router.post('/blog_post', (req, res) => {
            const id = crypto.randomBytes(16).toString("hex");
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.post_id = id;
            this.BlogPosts.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('Blog post creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        router.get('/user/:user_id/:post_id', (req, res) => {
            var id = req.params.post_id;
            console.log('Blog Post details with id: ' + id);
            this.BlogPosts.retrieveBlogPostsDetails(res, { post_id: id });
        });
        router.get('/one', (req, res, next) => {
            res.send('request one');
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    }
}
exports.App = App;
/* const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const MyUser = require('./models/UserModel'); // Import the Mongoose model

async function getMyUser(req, res, next) {
  let myUser;
  try {
    myUser = await MyUser.findById(req.params.id);
    if (myUser == null) {
      return res.status(404).json({ message: 'Cannot find MyUser document' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.myUser = myUser;
  next();
}


// GET all MyModel documents
router.get('/users', async (req, res) => {
  try {
    const myUsers = await MyUser.find();
    res.json(myUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single MyUser document
router.get('/users/:id', getMyUser, (req, res) => {
  res.json(res.myUser);
});

// CREATE a new MyUser document
router.post('/', async (req, res) => {
  const myUser = new MyUser({
    user_id: req.body.user_id,
    username: req.body.username,
    fullname: req.body.fullname,
    description: req.body.description,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const newMyUser = await myUser.save();
    res.status(201).json(newMyUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
app.listen(8080, () => {
  console.log('Server started on 8080.')
}); */ 
