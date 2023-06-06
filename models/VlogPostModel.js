"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VlogPostModel = void 0;
const Mongoose = require("mongoose");
const Access_1 = require("../Access");
let mongooseConnection = Access_1.Access.mongooseConnection;
let mongooseObj = Access_1.Access.mongooseInstance;
class VlogPostModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            author_id: String,
            image_url: String,
            title: String,
            content: String,
            post_id: Number,
            category: String,
            publication_date: Date,
            post_url: String,
            views: Number,
            likes: Number,
            dislikes: Number
        }, { collection: 'VlogPosts' });
    }
    createModel() {
        this.model = mongooseConnection.model("VlogPosts", this.schema);
    }
}
exports.VlogPostModel = VlogPostModel;
