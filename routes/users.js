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
const UserModel_1 = require("../models/UserModel");
//import {BlogPostModel} from '../models/BlogPostModel';
const express = require('express');
const router = express.Router();
const userModel = new UserModel_1.UserModel();
//const blogPostModel = new BlogPostModel();
const MyUser = userModel.model;
//const MyBlogPost = blogPostModel.model;
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/bloggers-room');
};
// GET a single MyUser document by ID
router.get('/users/:user_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.params.user_id;
        const myUser = yield MyUser.findOne({ user_id });
        if (myUser == null) {
            return res.status(404).json({ message: 'Cannot find MyUser document' });
        }
        res.json(myUser);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// CREATE a new MyUser document
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myUser = new MyUser({
        user_id: req.body.user_id,
        username: req.body.username,
        fullname: req.body.fullname,
        description: req.body.description,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const newMyUser = yield myUser.save();
        res.status(201).json(newMyUser);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
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
