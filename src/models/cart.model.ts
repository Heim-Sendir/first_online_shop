import mongoose, {Schema, Document, ObjectId} from "mongoose";
import {Product} from './products.model';
import {User} from './user.model';

interface Cart extends Document {
    user_id: ObjectId;
    products: Array<Object>;
    total: number;
    create_time: Date;
}

const productSchema: Schema = new Schema({
    product_id: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    count: {type: Number, required: true}
}, {_id: false});

const cartSchema: Schema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    products: [productSchema],
    total: {type: Number, default: 0},
    create_time: {type: Number, default: () => Date.now()}
}, {versionKey: false, timestamps: {createdAt: false, updatedAt: false}});

export const Cart = mongoose.model<Cart>('Cart', cartSchema);