import mongoose, {Schema, Document} from "mongoose";
import * as bcrypt from 'bcrypt';

interface IUser extends Document {
    name: string,
    email: string,
    create_time: Date,
    password: string,
    active: boolean
}

const userSchema: Schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    active: {type: Boolean, default: true},
    create_time: {type: Number, default: () => Date.now()}
}, {versionKey: false, timestamps: {createdAt: false, updatedAt: false}});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
}

userSchema.pre<IUser>('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

export const User = mongoose.model<IUser>('user', userSchema);