import Mongoose = require("mongoose");
import { Access } from '../Access';
import { IComment } from '../interfaces/IComment';
import { STATUS_CODES } from "http";

let mongooseConnection = Access.mongooseConnection;
let mongooseObj = Access.mongooseInstance;

class CommentModel {
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
                post_id: String,
                comment: String,
                createdAt: Date
            }

            , { collection: 'Comments' }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IComment>("Comments", this.schema);
    }
}

export { CommentModel };
