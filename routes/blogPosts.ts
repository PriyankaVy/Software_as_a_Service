import { BlogPostModel } from '../models/BlogPostModel';

const express = require('express');
const router = express.Router();
const blogPostModel = new BlogPostModel();
const MyBlogPost = blogPostModel.model;

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
        author_id: req.body.author_id,
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


module.exports = router;