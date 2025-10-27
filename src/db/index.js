import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => { 
    try {
        const connectionInstance =
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);  // learn about what this connectInstance have
        console.log(`MongoDB connected, DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED: ", error);
        process.exit(1); // learn about process object of nodejs
    }
}

export default connectDB;
// export default is used to define the main thing a file exports.
// You don’t need curly braces {} when importing a default export.
// You can rename it during import.
// Only one default export is allowed per file.