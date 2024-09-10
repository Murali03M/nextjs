
import mongoose from 'mongoose';

const connectTODB = async () => {
  try {
    // Replace sensitive data with environment variables for security
    const connectionURL = process.env.MONGO_URI || "mongodb+srv://murali732000:V8OGc9prn2LIqo1H@cluster0.h3hzq.mongodb.net/BlogNext"; 

    // Prevent duplicate connections in case the function is called multiple times
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to the database");
      return;
    }

    // Attempt to connect to the MongoDB database
    await mongoose.connect(connectionURL)

    console.log("Database connected successfully!");
  } catch (error) {
    // Catch any errors and log them
    console.error("Error connecting to database:", error);
    throw new Error("Database connection failed");
  }
};

export default connectTODB;
