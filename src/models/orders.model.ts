//Импортируем библиотеку Mongoose чтобы использовать её для модели
import mongoose, {Schema, Document} from 'mongoose';

//Импортируем интерфейс товаров и адреса
import {IProduct} from './products.model';
import {IShippingAddress} from './shipping_address.model';

//Определяем интерфейс заказа в онлайн магазине
interface IOrder extends Document {
    user: IUser['_id'];
    products: Array<{product: IProduct['_id']; quantity: number}>;
    shippingAddress: IShippingAddress['_id'];
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





