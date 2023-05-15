"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostModel = void 0;
var Mongoose = require("mongoose");
var Access_1 = require("../Access");
var mongooseConnection = Access_1.Access.mongooseConnection;
var mongooseObj = Access_1.Access.mongooseInstance;
var BlogPostModel = /** @class */ (function () {
    function BlogPostModel() {
        this.createSchema();
        this.createModel();
    }
    BlogPostModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            author_id: Number,
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
    };
    BlogPostModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("BlogPosts", this.schema);
    };
    return BlogPostModel;
}());
exports.BlogPostModel = BlogPostModel;
