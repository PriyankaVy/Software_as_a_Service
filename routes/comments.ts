import { CommentModel } from '../models/CommentModel';

const express = require('express');
const router = express.Router();
const commentModel = new CommentModel();
const MyComment = commentModel.model;

router.get('/comments', async (req, res) => {
    try {
        const myComments = await MyComment.find();
        res.json(myComments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/comments/:comment_id', async (req, res) => {
    try {
        const title = req.params.comment_id
        const comment = await MyComment.find({ post_id:title });
        if (comment == null) {
            return res.status(404).json({ message: 'Cannot find post document with id' });
        }
        res.json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/comments', async (req, res) => {
    const myComment = new MyComment({
        post_id: req.body.post_id,
        comment: req.body.comment,
        createdAt: req.body.createdAt,
    });

    try {
        const newComment = await myComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/comments/:title', async (req, res) => {
    const title = req.params.title
    const myComment = await MyComment.findOne({ post_id:title });
    if (myComment == null) {
        return res.status(404).json({ message: 'Cannot find post document with title' });
    }
  
    myComment.post_id = req.body.post_id;
    myComment.comment =  req.body.comment;
    myComment.createdAt= req.body.createdAt;
  
    try {
        await myComment.save();
        res.status(200).json(myComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  });

module.exports = router;