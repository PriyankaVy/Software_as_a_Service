"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Access = void 0;
var Mongoose = require("mongoose");
var Access = /** @class */ (function () {
    function Access() {
        Access.connect();
    }
    Access.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    Access.DB_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/BloggersRoom';
    return Access;
}());
exports.Access = Access;
Access.connect();
