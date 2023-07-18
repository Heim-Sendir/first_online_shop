"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, required: true },
    create_time: { type: Number, default: function () { return Date.now(); } }
}, { versionKey: false, timestamps: { createdAt: false, updatedAt: false } });
exports.User = mongoose_1.default.model('user', userSchema);
