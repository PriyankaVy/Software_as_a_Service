import { BlogPostModel } from '../models/BlogPostModel';
import { UserModel } from '../models/UserModel';

const express = require('express');
const router = express.Router();
const blogPostModel = new BlogPostModel();
const MyBlogPost = blogPostModel.model;
const userModel = new UserModel();
const MyUser = userModel.model;

router.get('/user', async (req,res) => {
  if(req.isAuthenticated()){
    const userId = req.user.user_id;
    const myUser = await MyUser.find({ user_id:userId });
    res.json(myUser);
    }
    else{
      res.redirect('/bloggers-room');
    }
  }
);

// GET all post documents
router.get('/blogPosts', async (req, res) => {
    try {
        const myPosts = await MyBlogPost.find();
        res.json(myPosts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/blogsByUser', async (req,res) => {
  if(req.isAuthenticated()){
    const userId = req.user.user_id;
    const myPosts = await MyBlogPost.find({ author_id:userId });
    res.json(myPosts);
    }
    else{
      res.redirect('/bloggers-room');
    }
  }
);

// GET a single VlogPost document by ID
router.get('/blogPosts/posts/:post_id', async (req, res) => {
  try {
    const post_id = req.params.post_id
    const post = await MyBlogPost.findOne({ post_id:post_id });
    if (post == null) {
      return res.status(404).json({ message: 'Cannot find post document with this user' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single BlogPost document by ID
router.get('/blogPosts/:title', async (req, res) => {
  try {
    const title = req.params.title
    const post = await MyBlogPost.findOne({ title:title });
    if (post == null) {
      return res.status(404).json({ message: 'Cannot find post document with this title' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// CREATE a new BlogPost document
router.post('/blogPosts', async (req, res) => {
    const myBlogPost = new MyBlogPost({
        author_id: req.body.author_id,
        url: req.body.url,
        title: req.body.title,
        content: req.body.content,
        post_id: req.body.post_id,
        category: req.body.category,
        publication_date: req.body.publication_date,
        featured: req.body.featured,
        views: req.body.views,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    });

    try {
        const newMyPost = await myBlogPost.save();
        res.status(201).json(newMyPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// UPDATE a BlogPost document
router.put('/blogPosts/:title', async (req, res) => {
  const title = req.params.title
  const myBlogPost = await MyBlogPost.findOne({ title:title });
  if (myBlogPost == null) {
      return res.status(404).json({ message: 'Cannot find post document with title' });
  }

  myBlogPost.author_id = req.body.author_id;
  myBlogPost.url= req.body.url;
  myBlogPost.title = req.body.title;
  myBlogPost.content = req.body.content;
  myBlogPost.post_id = req.body.post_id;
  myBlogPost.category = req.body.category;
  myBlogPost.publication_date = req.body.publication_date;
  myBlogPost.featured = req.body.featured;
  myBlogPost.views = req.body.views;
  myBlogPost.likes = req.body.likes;
  myBlogPost.dislikes = req.body.dislikes;

  try {
      await myBlogPost.save();
      res.status(200).json(myBlogPost);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// DELETE a BlogPost document
router.delete('/blogPosts/:title', async (req, res) => {
  const title = req.params.title
  const myBlogPost = await MyBlogPost.findOne({title:title});
  if (myBlogPost == null) {
      return res.status(404).json({ message: 'Cannot find post document with this title' });
  }
  await myBlogPost.deleteOne({title:title});
  res.status(200).json({ message: 'Post deleted successfully' });
});

module.exports = router;