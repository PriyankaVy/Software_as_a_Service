"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostModel = void 0;
const Mongoose = require("mongoose");
const Access_1 = require("../Access");
let mongooseConnection = Access_1.Access.mongooseConnection;
let mongooseObj = Access_1.Access.mongooseInstance;
class BlogPostModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            author_id: String,
            url: String,
            title: String,
            content: String,
            post_id: Number,
            category: String,
            publication_date: Date,
            featured: Boolean,
            views: Number,
            likes: Number,
            dislikes: Number
        }, { collection: 'BlogPosts' });
    }
    createModel() {
        this.model = mongooseConnection.model("BlogPosts", this.schema);
    }
}
exports.BlogPostModel = BlogPostModel;
