import Mongoose = require("mongoose");
import { Access } from '../Access';
import { IVlogPost } from '../interfaces/IVlogPost';
import { STATUS_CODES } from "http";

let mongooseConnection = Access.mongooseConnection;
let mongooseObj = Access.mongooseInstance;

class VlogPostModel {
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
                author_id: String,
                image_url: String,
                title: String,
                content: String,
                post_id: Number,
                category: String,
                publication_date: Date,
                post_url: String,
                views: Number,
                likes: Number,
                dislikes: Number
            }
            , { collection: 'VlogPosts' }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IVlogPost>("VlogPosts", this.schema);
    }

}
export { VlogPostModel };