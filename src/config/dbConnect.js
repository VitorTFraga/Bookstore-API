import mongoose from "mongoose";

async function dbConnection() {
    
    mongoose.connect(process.env.DB_URL)
    return mongoose.connection;
}

export default dbConnection;