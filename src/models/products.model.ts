
//Импортируем библиотеку Mongoose чтобы использовать её для модели
import mongoose, {Schema, Document} from 'mongoose';


//Создаем определения интерфейса для товаров внутри онлайн-маназина
interface IProduct extends Document {
    name: string,
    description: string,
    price: number,
    count: number,
    category: string
}

//Создаем схему продуктов, чтобы определять структуру и типы данных ждя каждого поля продукта
const productSchema: Schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    count: {type: Number, required: true},
    category: {type: String, required: true}
});

export const Product = mongoose.model<IProduct>('Product', productSchema);