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


module.exports = router;