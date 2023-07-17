"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
//Импортируем библиотеку Mongoose чтобы использовать её для модели
var mongoose_1 = require("mongoose");
//Создаем схему продуктов, чтобы определять структуру и типы данных для каждого поля продукта
var productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'category', required: true }
}, { versionKey: false });
exports.Product = mongoose_1.default.model('Product', productSchema);
