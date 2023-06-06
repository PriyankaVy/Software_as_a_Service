"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Access = void 0;
const Mongoose = require("mongoose");
class Access {
    constructor() {
        Access.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
exports.Access = Access;
Access.DB_CONNECTION_STRING = 'mongodb+srv://prvysyaraju53:Atqcycgq0SfSRYTu@cluster0.icwqmqm.mongodb.net/BloggersRoom';
Access.connect();
