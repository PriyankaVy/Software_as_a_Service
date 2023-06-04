"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
var Mongoose = require("mongoose");
var Access_1 = require("../Access");
var mongooseConnection = Access_1.Access.mongooseConnection;
var mongooseObj = Access_1.Access.mongooseInstance;
var CommentModel = /** @class */ (function () {
    function CommentModel() {
        this.createSchema();
        this.createModel();
    }
    CommentModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            post_id: String,
            comment: String,
            createdAt: Date
        }, { collection: 'Comments' });
    };
    CommentModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Comments", this.schema);
    };
    return CommentModel;
}());
exports.CommentModel = CommentModel;
