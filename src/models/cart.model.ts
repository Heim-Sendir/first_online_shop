import mongoose, {Schema, Document, ObjectId} from "mongoose";
import {Product} from './products.model';
import {User} from './user.model';

interface Cart extends Document {
    user: ObjectId;
    products: Array<{product: Product[ObjectId]; quantity: number}>;
    total: number;
    create_time: Date;
}

const cartSchema: Schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    products: [
        {
            product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
            quantity: {type: Number, required: true}
        }
    ],
    total: {type: Number, default: 0},
}, {versionKey: false, timestamps: {createdAt: 'create_time'}});

export const Cart = mongoose.model<Cart>('Cart', cartSchema);