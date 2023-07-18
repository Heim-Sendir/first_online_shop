"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    product_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product', required: true },
    count: { type: Number, required: true }
}, { _id: false });
var cartSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [productSchema],
    total: { type: Number, default: 0 },
    create_time: { type: Number, default: function () { return Date.now(); } }
}, { versionKey: false, timestamps: { createdAt: false, updatedAt: false } });
exports.Cart = mongoose_1.default.model('Cart', cartSchema);
