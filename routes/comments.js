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
const CommentModel_1 = require("../models/CommentModel");
const express = require('express');
const router = express.Router();
const commentModel = new CommentModel_1.CommentModel();
const MyComment = commentModel.model;
router.get('/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myComments = yield MyComment.find();
        res.json(myComments);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.get('/comments/:comment_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.params.comment_id;
        const comment = yield MyComment.find({ post_id: title });
        if (comment == null) {
            return res.status(404).json({ message: 'Cannot find post document with id' });
        }
        res.json(comment);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.post('/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myComment = new MyComment({
        post_id: req.body.post_id,
        comment: req.body.comment,
        createdAt: req.body.createdAt,
    });
    try {
        const newComment = yield myComment.save();
        res.status(201).json(newComment);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.put('/comments/:title', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.params.title;
    const myComment = yield MyComment.findOne({ post_id: title });
    if (myComment == null) {
        return res.status(404).json({ message: 'Cannot find post document with title' });
    }
    myComment.post_id = req.body.post_id;
    myComment.comment = req.body.comment;
    myComment.createdAt = req.body.createdAt;
    try {
        yield myComment.save();
        res.status(200).json(myComment);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
module.exports = router;
