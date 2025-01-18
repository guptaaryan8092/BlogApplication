import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@bloggingapplication.i4awo.mongodb.net/?retryWrites=true&w=majority&appName=bloggingApplication`;
    try {
        await mongoose.connect(URL); // No additional options needed
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database:', error.message);
    }
};

export default Connection;
