import mongoose, {Schema, Document} from "mongoose";
import {User} from './user.model';
import {Product} from './products.model';

interface IReview extends Document {
    user: User['_id'];
    product: Product['_id'];
    rating: number;
    comment: string;
}

const reviewSchema: Schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true}
});

export const Review = mongoose.model<IReview>('Review', reviewSchema);
