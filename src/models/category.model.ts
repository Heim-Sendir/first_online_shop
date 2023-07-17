
//Импортируем библиотеку Mongoose чтобы использовать её для модели
import mongoose, {Schema, Document} from 'mongoose';

//Определяем интерфейс категорий товаров онлайн магазина
interface ICategory extends Document {
    name: string,
    description: string,
    active: boolean
}

const categorySchema: Schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    active: {type: Boolean, required: true}
});

export const Category = mongoose.model<ICategory>('Category', categorySchema);

