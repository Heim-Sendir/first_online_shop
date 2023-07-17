import mongoose, { MongooseOptions } from "mongoose";

export async function connectDatabase() {
    try {
        const options: MongooseOptions = {};

        await mongoose.connect('mongodb://127.0.0.1:27017/online-shop', options);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Database connection error: ', error);
    }
}
