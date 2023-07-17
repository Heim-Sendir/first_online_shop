import mongoose, {Schema, Document} from "mongoose";
import {IUser} from './user.model';
import {IProduct} from './products.model';

interface IReview extends Document {
    user: IUser['_id'];
    product: IProduct['_id'];
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
