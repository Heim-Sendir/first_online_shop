"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
//Импортируем библиотеку Mongoose чтобы использовать её для модели
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    product_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product', required: true },
    count: { type: Number, required: true }
}, { _id: false });
var orderSchema = new mongoose_1.Schema({
    user_id: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }],
    products: [productSchema],
    shippingAddress: String,
    total: { type: Number },
    paymentMethod: { type: String, required: true },
    create_time: { type: Number, default: function () { return Date.now(); } },
    perform_time: { type: Number, default: 0, get: getTimeStamp },
    cancel_time: { type: Number, default: 0, get: getTimeStamp }
}, { versionKey: false, timestamps: { createdAt: false, updatedAt: false } });
function getTimeStamp(timestamp) {
    return new Date(timestamp).getTime();
}
exports.Order = mongoose_1.default.model('Order', orderSchema);
