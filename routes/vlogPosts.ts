import { VlogPostModel } from '../models/VlogPostModel';

const express = require('express');
const router = express.Router();
const vlogPostModel = new VlogPostModel();
const MyVlogPost = vlogPostModel.model;

// GET all post documents
router.get('/vlogPosts', async (req, res) => {
    try {
        const myPosts = await MyVlogPost.find();
        res.json(myPosts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single VlogPost document by ID
router.get('/vlogPosts/:post_id', async (req, res) => {
    try {
      const post_id = req.params.post_id
      const post = await MyVlogPost.findOne({ post_id });
      if (post == null) {
        return res.status(404).json({ message: 'Cannot find post document with ' + {post_id} });
      }
      res.json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// CREATE a new BlogPost document
router.post('/vlogPosts', async (req, res) => {
    const myVlogPost = new MyVlogPost({
        author_id: req.body.author_id,
        title: req.body.title,
        content: req.body.content,
        post_id: req.body.post_id,
        category: req.body.category,
        publication_date: req.body.publication_date,
        url: req.body.url,
        views: req.body.views,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    });

    try {
        const newMyPost = await myVlogPost.save();
        res.status(201).json(newMyPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// UPDATE a BlogPost document
router.put('/vlogPosts/:post_id', async (req, res) => {
    const post_id = req.params.post_id
    const myVlogPost = await MyVlogPost.findOne({ post_id });
    if (myVlogPost == null) {
        return res.status(404).json({ message: 'Cannot find post document with ' + {post_id} });
    }

    myVlogPost.author_id = req.body.author_id;
    myVlogPost.title = req.body.title;
    myVlogPost.content = req.body.content;
    myVlogPost.post_id = req.body.post_id;
    myVlogPost.category = req.body.category;
    myVlogPost.publication_date = req.body.publication_date;
    myVlogPost.url = req.body.url;
    myVlogPost.views = req.body.views;
    myVlogPost.likes = req.body.likes;
    myVlogPost.dislikes = req.body.dislikes;

    try {
        await myVlogPost.save();
        res.status(200).json(myVlogPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a BlogPost document
router.delete('/vlogPosts/:post_id', async (req, res) => {
    const post_id = req.params.post_id
    const myVlogPost = await MyVlogPost.findOne({ post_id });
    if (myVlogPost == null) {
        return res.status(404).json({ message: 'Cannot find post document with ' + {post_id} });
    }

    await myVlogPost.deleteOne({post_id});
    res.status(200).json({ message: 'Post deleted successfully' });
});

module.exports = router;