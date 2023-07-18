//Импортируем библиотеку Mongoose чтобы использовать её для модели
import mongoose, {Schema, Document, ObjectId} from 'mongoose';

//Импортируем интерфейс товаров и адреса
import {Product} from './products.model';
//import {Shipping} from './shipping.model';
import {User} from "./user.model";

//Определяем интерфейс заказа в онлайн магазине
interface IOrder extends Document {
    user_id: ObjectId;
    products: Array<Object>;
    shippingAddress: String;
    total: number;
    paymentMethod: string;
    create_time: Date;
    perform_time: Date;
    cancel_time: Date;
    state: number;
}

const productSchema: Schema = new Schema({
    product_id: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    count: {type: Number, required: true}
}, {_id: false});

const orderSchema: Schema = new Schema({
    user_id: [{type: Schema.Types.ObjectId, ref: 'User'}],
    products: [productSchema],
    shippingAddress: String,
    total: {type: Number},
    paymentMethod: {type: String, required: true},
    create_time: {type: Number, default: () => Date.now()},
    perform_time: {type: Number, default: 0, get: getTimeStamp},
    cancel_time: {type: Number, default: 0, get: getTimeStamp}
}, {versionKey: false, timestamps: {createdAt: false, updatedAt: false}});

function getTimeStamp(timestamp: number) {
    return new Date(timestamp).getTime();
}


export const Order = mongoose.model<IOrder>('Order', orderSchema);





