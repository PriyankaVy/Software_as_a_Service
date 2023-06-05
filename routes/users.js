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
var UserModel_1 = require("../models/UserModel");
//import {BlogPostModel} from '../models/BlogPostModel';
var express = require('express');
var router = express.Router();
var userModel = new UserModel_1.UserModel();
//const blogPostModel = new BlogPostModel();
var MyUser = userModel.model;
//const MyBlogPost = blogPostModel.model;
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/bloggers-room');
};
// GET all MyUser documents
router.get('/user', isAuthenticated, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        try {
            user = {
                username: req.user.displayName,
                email: req.user.email
            };
            res.json(user);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
        return [2 /*return*/];
    });
}); });
// GET a single MyUser document by ID
router.get('/users/:user_id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, myUser, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user_id = req.params.user_id;
                return [4 /*yield*/, MyUser.findOne({ user_id: user_id })];
            case 1:
                myUser = _a.sent();
                if (myUser == null) {
                    return [2 /*return*/, res.status(404).json({ message: 'Cannot find MyUser document' })];
                }
                res.json(myUser);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ message: err_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// CREATE a new MyUser document
router.post('/users', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var myUser, newMyUser, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                myUser = new MyUser({
                    user_id: req.body.user_id,
                    username: req.body.username,
                    fullname: req.body.fullname,
                    description: req.body.description,
                    email: req.body.email,
                    password: req.body.password
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, myUser.save()];
            case 2:
                newMyUser = _a.sent();
                res.status(201).json(newMyUser);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.status(400).json({ message: err_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
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
