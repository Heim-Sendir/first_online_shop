import mongoose, { Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';

interface IUser extends Document {
    name: string;
    email: string;
    create_time: Date;
    password: string;
    active: boolean;
    comparePassword: (password: string) => Promise<boolean>;
}

interface IUserModel extends mongoose.Model<IUser> {
    comparePassword(password: string): Promise<boolean>;
}

const userSchema: Schema = new Schema<any>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    create_time: { type: Number, default: () => Date.now() }
}, { versionKey: false, timestamps: { createdAt: false, updatedAt: false } });

userSchema.pre<IUser>('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        console.log('salt: ', salt);
        console.log('This: ', this.password);
    }
    next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    //const isPasswordCorrect = await bcrypt.compare(password, this.password);
    //console.log('This: ', this.password);
    //console.log('Pass: ', password);
    //const isPasswordCorrect = await bcrypt.compare(password, this.password);
    return bcrypt.compare(password, this.password);
};

export const User = mongoose.model<IUser, IUserModel>('user', userSchema);
