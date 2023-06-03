import Mongoose = require("mongoose");

interface IComment extends Mongoose.Document {
    post_id: string;
    comment: string;
    createdAt: Date;
}
export {IComment};
