import Mongoose = require("mongoose");

interface IComment extends Mongoose.Document {
    post_id: number;
    comments: [ {
        body: string;
        comment_id: number;
        created_at: Date;
    }];
}
export {IComment};
