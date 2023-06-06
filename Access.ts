import Mongoose = require("mongoose");

class Access {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    static DB_CONNECTION_STRING:string = 'mongodb+srv://prvysyaraju53:Atqcycgq0SfSRYTu@cluster0.icwqmqm.mongodb.net/BloggersRoom';
    
    constructor () {
        Access.connect();
    }
    
    static connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;
        
        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
    
}
Access.connect();
export {Access};