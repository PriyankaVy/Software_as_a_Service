"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VlogPostModel = void 0;
var Mongoose = require("mongoose");
var Access_1 = require("../Access");
var mongooseConnection = Access_1.Access.mongooseConnection;
var mongooseObj = Access_1.Access.mongooseInstance;
var VlogPostModel = /** @class */ (function () {
    function VlogPostModel() {
        this.createSchema();
        this.createModel();
    }
    VlogPostModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            author_id: Number,
            title: String,
            content: String,
            post_id: Number,
            category: String,
            publication_date: Date,
            url: String,
            views: Number,
            likes: Number,
            dislikes: Number
        }, { collection: 'VlogPosts' });
    };
    VlogPostModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("VlogPosts", this.schema);
    };
    return VlogPostModel;
}());
exports.VlogPostModel = VlogPostModel;
