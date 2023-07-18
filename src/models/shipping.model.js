"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipping = void 0;
var mongoose_1 = require("mongoose");
var shippingSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    create_time: { type: Number, default: function () { return Date.now(); } }
}, { versionKey: false, timestamps: { updatedAt: false, createdAt: false } });
exports.Shipping = mongoose_1.default.model('Shipping', shippingSchema);
