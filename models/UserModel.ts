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
                user_id: {type: String, required: true, unique: true},
                displayName: {type: String, required: true},
                email: {type: String, required: true}
            }, {collection: 'Users'}
        );
    }

    public createModel(): void {
        if(!mongooseConnection.models.Users){
            this.model = mongooseConnection.model<IUser>("Users", this.schema);
        }
        else{
            this.model = mongooseConnection.models.Users;
        }

    }

} 

export {UserModel};  