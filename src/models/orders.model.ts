//Импортируем библиотеку Mongoose чтобы использовать её для модели
import mongoose, {Schema, Document, ObjectId} from 'mongoose';

//Импортируем интерфейс товаров и адреса
import {Product} from './products.model';
import {Shipping} from './shipping.model';
import {User} from "./user.model";

//Определяем интерфейс заказа в онлайн магазине
interface IOrder extends Document {
    user: ObjectId;
    products: Array<{product: Product[ObjectId]; quantity: number}>;
    shippingAddress: ObjectId;
    total: number;
    paymentMethod: string;
    isPaid: boolean;
    create_time: Date;
}

const orderSchema: Schema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    shippingAddress: [{type: Schema.Types.ObjectId, ref: 'Shipping'}],
    total: {type: Number},
    paymentMethod: {type: String, required: true},
    isPaid: {type: Boolean, required: true},
}, {versionKey: false, timestamps: {createdAt: 'create_time'}});


export const Order = mongoose.model<IOrder>('Order', orderSchema);





