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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BlogPostModel_1 = require("../models/BlogPostModel");
var express = require('express');
var router = express.Router();
var blogPostModel = new BlogPostModel_1.BlogPostModel();
var MyBlogPost = blogPostModel.model;
// GET all post documents
router.get('/blogPosts', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var myPosts, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, MyBlogPost.find()];
            case 1:
                myPosts = _a.sent();
                res.json(myPosts);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ message: err_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/blogsByUser', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, myPosts, userProfile;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.isAuthenticated()) return [3 /*break*/, 2];
                userId = req.user.user_id;
                return [4 /*yield*/, MyBlogPost.find({ author_id: userId })];
            case 1:
                myPosts = _a.sent();
                userProfile = {
                    id: req.user.user_id,
                    username: req.user.displayName,
                    email: req.user.email
                };
                res.json(myPosts);
                return [3 /*break*/, 3];
            case 2:
                res.redirect('/bloggers-room');
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, userProfile;
    return __generator(this, function (_a) {
        if (req.isAuthenticated()) {
            userId = req.user.user_id;
            userProfile = {
                user_id: req.user.id,
                displayName: req.user.displayName,
                email: req.user.emails[0].value
            };
            res.json(userProfile);
        }
        else {
            res.redirect('/bloggers-room');
        }
        return [2 /*return*/];
    });
}); });
// GET a single VlogPost document by ID
router.get('/blogPosts/posts/:user_id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, post, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user_id = req.params.post_id;
                return [4 /*yield*/, MyBlogPost.find({ author_id: user_id })];
            case 1:
                post = _a.sent();
                if (post == null) {
                    return [2 /*return*/, res.status(404).json({ message: 'Cannot find post document with this user' })];
                }
                res.json(post);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(500).json({ message: err_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// GET a single BlogPost document by ID
router.get('/blogPosts/:title', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var title, post, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                title = req.params.title;
                return [4 /*yield*/, MyBlogPost.findOne({ title: title })];
            case 1:
                post = _a.sent();
                if (post == null) {
                    return [2 /*return*/, res.status(404).json({ message: 'Cannot find post document with this title' })];
                }
                res.json(post);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(500).json({ message: err_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// CREATE a new BlogPost document
router.post('/blogPosts', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var myBlogPost, newMyPost, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                myBlogPost = new MyBlogPost({
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
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, myBlogPost.save()];
            case 2:
                newMyPost = _a.sent();
                res.status(201).json(newMyPost);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                res.status(400).json({ message: err_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// UPDATE a BlogPost document
router.put('/blogPosts/:title', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var title, myBlogPost, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = req.params.title;
                return [4 /*yield*/, MyBlogPost.findOne({ title: title })];
            case 1:
                myBlogPost = _a.sent();
                if (myBlogPost == null) {
                    return [2 /*return*/, res.status(404).json({ message: 'Cannot find post document with title' })];
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
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, myBlogPost.save()];
            case 3:
                _a.sent();
                res.status(200).json(myBlogPost);
                return [3 /*break*/, 5];
            case 4:
                err_5 = _a.sent();
                res.status(400).json({ message: err_5.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// DELETE a BlogPost document
router.delete('/blogPosts/:title', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var title, myBlogPost;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = req.params.title;
                return [4 /*yield*/, MyBlogPost.findOne({ title: title })];
            case 1:
                myBlogPost = _a.sent();
                if (myBlogPost == null) {
                    return [2 /*return*/, res.status(404).json({ message: 'Cannot find post document with this title' })];
                }
                return [4 /*yield*/, myBlogPost.deleteOne({ title: title })];
            case 2:
                _a.sent();
                res.status(200).json({ message: 'Post deleted successfully' });
                return [2 /*return*/];
        }
    });
}); });
module.exports = router;
