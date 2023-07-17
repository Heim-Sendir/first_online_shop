import mongoose from "mongoose";

export async function connectDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:127.0.0.1:27017/online-shop', {
            useNewUrlParser: true,
            useInifiedTopology: true
        });
        console.log('Connected to the database');
    } catch (error) {
        console.log('Database connection error: ', error);
    }
}