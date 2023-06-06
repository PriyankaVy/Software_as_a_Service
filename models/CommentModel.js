"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const Mongoose = require("mongoose");
const Access_1 = require("../Access");
let mongooseConnection = Access_1.Access.mongooseConnection;
let mongooseObj = Access_1.Access.mongooseInstance;
class CommentModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            post_id: String,
            comment: String,
            createdAt: Date
        }, { collection: 'Comments' });
    }
    createModel() {
        this.model = mongooseConnection.model("Comments", this.schema);
    }
}
exports.CommentModel = CommentModel;
