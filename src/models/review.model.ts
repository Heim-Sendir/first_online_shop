import mongoose, {Schema, Document, ObjectId} from "mongoose";
import {User} from './user.model';
import {Product} from './products.model';

interface IReview extends Document {
    user: ObjectId;
    product: ObjectId;
    create_time: Date,
    rating: number;
    comment: string;
}

const reviewSchema: Schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true},
    create_time: {type: Number, default: () => Date.now()}
}, {versionKey: false, timestamps: {createdAt: false, updatedAt: false}});

export const Review = mongoose.model<IReview>('Review', reviewSchema);
