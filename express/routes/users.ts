import {UserModel} from '../models/UserModel';
//import {BlogPostModel} from '../models/BlogPostModel';

const express = require('express');
const router = express.Router();
const userModel = new UserModel();
//const blogPostModel = new BlogPostModel();
const MyUser = userModel.model;
//const MyBlogPost = blogPostModel.model;

// GET all MyUser documents
router.get('/users', async (req, res) => {
  try {
    const myUsers = await MyUser.find();
    res.json(myUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single MyUser document by ID
router.get('/users/:user_id', async (req, res) => {
  try {
    const user_id = req.params.user_id
    const myUser = await MyUser.findOne({ user_id });
    if (myUser == null) {
      return res.status(404).json({ message: 'Cannot find MyUser document' });
    }
    res.json(myUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a new MyUser document
router.post('/users', async (req, res) => {
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
/*
// GET all post documents
router.get('/blogPosts', async (req, res) => {
  try {
    const myPosts = await MyBlogPost.find();
    res.json(myPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a new BlogPost document
router.post('/blogPosts', async (req, res) => {
  const myBlogPost = new MyBlogPost({
    user_id: req.body.user_id,
    username: req.body.username,
    fullname: req.body.fullname,
    description: req.body.description,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const newMyPost = await myBlogPost.save();
    res.status(201).json(newMyPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

*/
module.exports = router;
