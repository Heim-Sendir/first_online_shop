//Импортируем библиотеку Mongoose чтобы использовать её для модели
import mongoose, {Schema, Document} from 'mongoose';

//Импортируем интерфейс товаров и адреса
import {Product} from './products.model';
import {ShippingAddress} from './shipping_address.model';
import {User} from "./user.model";

//Определяем интерфейс заказа в онлайн магазине
interface IOrder extends Document {
    user: User['_id'];
    products: Array<{product: Product['_id']; quantity: number}>;
    shippingAddress: ShippingAddress['_id'];
    total: number;
    paymentMethod: string;
    isPaid: boolean;
    paidAt: Date;
}

const orderSchema: Schema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    shippingAddress: [{type: Schema.Types.ObjectId, ref: 'ShippingAddress'}],
    total: {type: Number},
    paymentMethod: {type: String, required: true},
    isPaid: {type: Boolean, required: true},
    paidAt: {type: Date, required: true}
});


export const Order = mongoose.model<IOrder>('Order', orderSchema);





