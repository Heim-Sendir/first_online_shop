import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    create_time: Date;
    password: string;
    active: boolean;
}

const userSchema: Schema = new Schema<any>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    create_time: { type: Number, default: () => Date.now() }
}, { versionKey: false, timestamps: { createdAt: false, updatedAt: false } });

export const User = mongoose.model<IUser>('user', userSchema);
