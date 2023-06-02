import Mongoose = require("mongoose");

interface IVlogPost extends Mongoose.Document {
    author_id: number;
    image_url: string;
    title: string;
    content: string;
    post_id: number;
    category: string;
    publication_date: Date;
    post_link: string;
    views: number;
    likes: number;
    dislikes: number;
};

export { IVlogPost };
