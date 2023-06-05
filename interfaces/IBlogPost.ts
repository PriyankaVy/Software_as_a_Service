import Mongoose = require("mongoose");

interface IBlogPost extends Mongoose.Document {
    author_id: string;
    url: string;
    title: string;
    content: string;
    post_id: number;
    category: string;
    publication_date: Date;
    featured: boolean;
    views: number;
    likes: number;
    dislikes: number;
};

export { IBlogPost };
