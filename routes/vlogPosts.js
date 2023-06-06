"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const VlogPostModel_1 = require("../models/VlogPostModel");
const express = require('express');
const router = express.Router();
const vlogPostModel = new VlogPostModel_1.VlogPostModel();
const MyVlogPost = vlogPostModel.model;
// GET all post documents
router.get('/vlogPosts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myPosts = yield MyVlogPost.find();
        res.json(myPosts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// GET a single VlogPost document by ID
router.get('/vlogPosts/posts/:user_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.params.user_id;
        const post = yield MyVlogPost.find({ authoe_id: user_id });
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post document with this user' });
        }
        res.json(post);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// GET a single VlogPost document by ID
router.get('/vlogPosts/:title', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.params.title;
        const post = yield MyVlogPost.findOne({ title: title });
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post document with this title' });
        }
        res.json(post);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// CREATE a new BlogPost document
router.post('/vlogPosts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const newMyPost = yield myVlogPost.save();
        res.status(201).json(newMyPost);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// UPDATE a BlogPost document
router.put('/vlogPosts/:title', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.params.title;
    const myVlogPost = yield MyVlogPost.findOne({ title: title });
    if (myVlogPost == null) {
        return res.status(404).json({ message: 'Cannot find post document with this title' });
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
        yield myVlogPost.save();
        res.status(200).json(myVlogPost);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// DELETE a BlogPost document
router.delete('/vlogPosts/:title', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.params.title;
    const myVlogPost = yield MyVlogPost.findOne({ title: title });
    if (myVlogPost == null) {
        return res.status(404).json({ message: 'Cannot find post document with this title' });
    }
    yield myVlogPost.deleteOne({ title: title });
    res.status(200).json({ message: 'Post deleted successfully' });
}));
module.exports = router;
