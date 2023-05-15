import Mongoose = require("mongoose");

interface IUser extends Mongoose.Document {
    user_id: number;
    username: string;
    fullname: string;
    description: string;
    email: string;
    password: string;
}
export {IUser};