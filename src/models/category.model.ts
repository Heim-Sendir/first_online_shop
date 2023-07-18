
//Импортируем библиотеку Mongoose чтобы использовать её для модели
import mongoose, {Schema, Document} from 'mongoose';

//Определяем интерфейс категорий товаров онлайн магазина
interface ICategory extends Document {
    name: string,
    create_time: Date,
    description: string,
    active: boolean
}

const categorySchema: Schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    active: {type: Boolean, required: true},
    create_time: {type: Number, default: () => Date.now()}
}, {versionKey: false, timestamps: {createdAt: false, updatedAt: false}});

export const Category = mongoose.model<ICategory>('category', categorySchema);

