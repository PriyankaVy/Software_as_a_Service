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
router.get('/vlogPosts/posts/:post_id', async (req, res) => {
    try {
        const post_id = req.params.post_id
        const post = await MyVlogPost.findOne({ post_id });
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post document with ' + { post_id } });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single VlogPost document by ID
router.get('/vlogPosts/:title', async (req, res) => {
    try {
        const title = req.params.title
        const post = await MyVlogPost.findOne({ title: title });
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post document with this title' });
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
        image_url: req.body.image_url,
        title: req.body.title,
        content: req.body.content,
        post_id: req.body.post_id,
        category: req.body.category,
        publication_date: req.body.publication_date,
        post_url: req.body.post_url,
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
router.put('/vlogPosts/:title', async (req, res) => {
    const title = req.params.title
    const myVlogPost = await MyVlogPost.findOne({ title:title });
    if (myVlogPost == null) {
        return res.status(404).json({ message: 'Cannot find post document with this title'});
    }

    myVlogPost.author_id = req.body.author_id;
    myVlogPost.image_url = req.body.image_url;
    myVlogPost.title = req.body.title;
    myVlogPost.content = req.body.content;
    myVlogPost.post_id = req.body.post_id;
    myVlogPost.category = req.body.category;
    myVlogPost.publication_date = req.body.publication_date;
    myVlogPost.post_url = req.body.post_url;
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
router.delete('/vlogPosts/:title', async (req, res) => {
    const title = req.params.title
    const myVlogPost = await MyVlogPost.findOne({ title:title });
    if (myVlogPost == null) {
        return res.status(404).json({ message: 'Cannot find post document with this title'});
    }

    await myVlogPost.deleteOne({ title:title });
    res.status(200).json({ message: 'Post deleted successfully' });
});

module.exports = router;