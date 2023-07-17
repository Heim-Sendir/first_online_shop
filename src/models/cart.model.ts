import mongoose, {Schema, Document} from "mongoose";
import {IProduct} from './products.model';
import {IUser} from './user.model';

interface ICart extends Document {
    user: IUser['_id'];
    products: Array<{product: IProduct['_id']; quantity: number}>;
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
});

export const Cart = mongoose.model<ICart>('Cart', cartSchema);