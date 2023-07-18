//Импортируем библиотеку Mongoose чтобы использовать её для модели
import mongoose, {Schema, Document, ObjectId} from 'mongoose';


//Создаем определения интерфейса для товаров внутри онлайн-маназина
interface IProduct extends Document {
    name: string,
    description: string,
    create_time: Date,
    price: number,
    count: number,
    category: ObjectId
}

//Создаем схему продуктов, чтобы определять структуру и типы данных для каждого поля продукта
const productSchema: Schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    count: {type: Number, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'category', required: true}
}, {versionKey: false, timestamps: {createdAt: 'create_time'}});

export const Product = mongoose.model<IProduct>('Product', productSchema);
