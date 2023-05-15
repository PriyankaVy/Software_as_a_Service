import Mongoose = require("mongoose");

interface IVlogPost extends Mongoose.Document {
    author_id: number;
    title: string;
    content: string;
    post_id: number;
    category: string;
    publication_date: Date;
    url: string;
    views: number;
    likes: number;
    dislikes: number;
};

export { IVlogPost };
