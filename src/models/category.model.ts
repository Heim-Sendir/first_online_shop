
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
    active: {type: Boolean, required: true}
}, {versionKey: false, timestamps: {createdAt: 'create_time'}});

export const Category = mongoose.model<ICategory>('category', categorySchema);

