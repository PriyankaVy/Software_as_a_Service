"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var Mongoose = require("mongoose");
var Access_1 = require("../Access");
var mongooseConnection = Access_1.Access.mongooseConnection;
var mongooseObj = Access_1.Access.mongooseInstance;
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.createSchema();
        this.createModel();
    }
    UserModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            user_id: Number,
            username: String,
            fullname: String,
            description: String,
            email: String,
            password: String
        }, { collection: 'Users' });
    };
    UserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Users", this.schema);
    };
    return UserModel;
}());
exports.UserModel = UserModel;
