import mongoose, {Schema, Document} from "mongoose";
import {Product} from './products.model';
import {User} from './user.model';

interface Cart extends Document {
    user: User['_id'];
    products: Array<{product: Product['_id']; quantity: number}>;
    total: number;
}

const cartSchema: Schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    products: [
        {
            product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
            quantity: {type: Number, required: true}
        }
    ],
    total: {type: Number, default: 0}
}, {versionKey: false});

export const Cart = mongoose.model<Cart>('Cart', cartSchema);