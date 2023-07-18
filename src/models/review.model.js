"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
var mongoose_1 = require("mongoose");
var reviewSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    create_time: { type: Number, default: function () { return Date.now(); } }
}, { versionKey: false, timestamps: { createdAt: false, updatedAt: false } });
exports.Review = mongoose_1.default.model('Review', reviewSchema);
