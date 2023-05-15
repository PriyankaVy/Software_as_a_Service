import Mongoose = require("mongoose");
import {Access} from '../Access';
import {IUser} from '../interfaces/IUser';

let mongooseConnection = Access.mongooseConnection;
let mongooseObj = Access.mongooseInstance;

class UserModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                user_id: Number,
                username: String,
                fullname: String,
                description: String,
                email: String,
                password: String
            }, {collection: 'Users'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUser>("Users", this.schema);
    }

} 

export {UserModel};  