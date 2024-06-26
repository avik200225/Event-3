const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Event-Management");
    console.log("SuccesfullyConnected to MongoDB");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
  }
};

module.exports = connectDB;
