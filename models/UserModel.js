"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const Mongoose = require("mongoose");
const Access_1 = require("../Access");
let mongooseConnection = Access_1.Access.mongooseConnection;
let mongooseObj = Access_1.Access.mongooseInstance;
class UserModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            user_id: { type: String, required: true, unique: true },
            displayName: { type: String, required: true },
            email: { type: String, required: true }
        }, { collection: 'Users' });
    }
    createModel() {
        if (!mongooseConnection.models.Users) {
            this.model = mongooseConnection.model("Users", this.schema);
        }
        else {
            this.model = mongooseConnection.models.Users;
        }
    }
}
exports.UserModel = UserModel;
