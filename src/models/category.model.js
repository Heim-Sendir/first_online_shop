"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
//Импортируем библиотеку Mongoose чтобы использовать её для модели
var mongoose_1 = require("mongoose");
var categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, required: true },
    create_time: { type: Number, default: function () { return Date.now(); } }
}, { versionKey: false, timestamps: { createdAt: false, updatedAt: false } });
exports.Category = mongoose_1.default.model('category', categorySchema);
