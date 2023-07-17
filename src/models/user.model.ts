import mongoose, {Schema, Document} from "mongoose";

interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    active: boolean
}

const userSchema: Schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    active: {type: Boolean, required: true}
}, {versionKey: false});

export const User = mongoose.model<IUser>('user', userSchema);