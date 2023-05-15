import Mongoose = require("mongoose");
import { Access } from '../Access';
import { IBlogPost } from '../interfaces/IBlogPost';
import { STATUS_CODES } from "http";

let mongooseConnection = Access.mongooseConnection;
let mongooseObj = Access.mongooseInstance;

class BlogPostModel {
    public schema: any;
    public innerSchema: any;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                author_id: Number,
                title: String,
                content: String,
                post_id: Number,
                category: String,
                publication_date: Date,
                featured: Boolean,
                views: Number,
                likes: Number,
                dislikes: Number
            }

            , { collection: 'BlogPosts' }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IBlogPost>("BlogPosts", this.schema);
    }
}

export { BlogPostModel };
