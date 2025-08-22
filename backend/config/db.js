import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://omboggorised91:27127114@cluster0.k43qaf3.mongodb.net/food-del").then(() => console.log("MongoDB connected"));
}