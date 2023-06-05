import Mongoose = require("mongoose");

interface IUser extends Mongoose.Document {
    user_id: string;
    displayName: string;
    email: string;
}
export {IUser};