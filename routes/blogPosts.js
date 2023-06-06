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
const BlogPostModel_1 = require("../models/BlogPostModel");
const UserModel_1 = require("../models/UserModel");
const express = require('express');
const router = express.Router();
const blogPostModel = new BlogPostModel_1.BlogPostModel();
const MyBlogPost = blogPostModel.model;
const userModel = new UserModel_1.UserModel();
const MyUser = userModel.model;
// GET all post documents
router.get('/blogPosts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myPosts = yield MyBlogPost.find();
        res.json(myPosts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.get('/blogsByUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.isAuthenticated()) {
        const userId = req.user.user_id;
        const myPosts = yield MyBlogPost.find({ author_id: userId });
        const userProfile = {
            id: req.user.user_id,
            username: req.user.displayName,
            email: req.user.email
        };
        res.json(myPosts);
    }
    else {
        res.redirect('/bloggers-room');
    }
}));
// GET a single VlogPost document by ID
router.get('/blogPosts/posts/:post_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.params.post_id;
        const post = yield MyBlogPost.find({ author_id: user_id });
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post document with this user' });
        }
        res.json(post);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// GET a single BlogPost document by ID
router.get('/blogPosts/:title', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.params.title;
        const post = yield MyBlogPost.findOne({ title: title });
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
router.post('/blogPosts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const newMyPost = yield myBlogPost.save();
        res.status(201).json(newMyPost);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// UPDATE a BlogPost document
router.put('/blogPosts/:title', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.params.title;
    const myBlogPost = yield MyBlogPost.findOne({ title: title });
    if (myBlogPost == null) {
        return res.status(404).json({ message: 'Cannot find post document with title' });
    }
    myBlogPost.author_id = req.body.author_id;
    myBlogPost.url = req.body.url;
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
        yield myBlogPost.save();
        res.status(200).json(myBlogPost);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// DELETE a BlogPost document
router.delete('/blogPosts/:title', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.params.title;
    const myBlogPost = yield MyBlogPost.findOne({ title: title });
    if (myBlogPost == null) {
        return res.status(404).json({ message: 'Cannot find post document with this title' });
    }
    yield myBlogPost.deleteOne({ title: title });
    res.status(200).json({ message: 'Post deleted successfully' });
}));
//------------------------Test APIs----------------
router.get('/test/blogPosts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myPosts = yield MyBlogPost.find();
        res.json(myPosts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.get('test/blogPosts/posts/:post_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post_id = req.params.post_id;
        const post = yield MyBlogPost.findOne({ post_id });
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post document with this user' });
        }
        res.json(post);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
module.exports = router;
