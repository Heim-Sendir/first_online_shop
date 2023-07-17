"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateOneProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
var products_model_1 = require("../models/products.model");
var createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, price, count, description, category, newProduct, saveProduct, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, price = _a.price, count = _a.count, description = _a.description, category = _a.category;
                newProduct = new products_model_1.Product({
                    name: name_1,
                    description: description,
                    price: price,
                    count: count,
                    category: category
                });
                return [4 /*yield*/, newProduct.save()];
            case 1:
                saveProduct = _b.sent();
                //Отправялем успешный ответ с сохраненным товаром
                res.status(201).json(saveProduct);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                //В случае ошибки отправялем ошибочный ответ
                res.status(500).json({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createProduct = createProduct;
//Метод для получения всех товаро
var getAllProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, products_model_1.Product.find()];
            case 1:
                products = _a.sent();
                //Отправляем успешный ответ с полученными товарами
                res.json(products);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                //В случае ошибки отправляем ошибочный ответ
                res.status(500).json({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllProducts = getAllProducts;
var getProductById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, product, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, products_model_1.Product.findById(id)];
            case 1:
                product = _a.sent();
                if (!product) {
                    return [2 /*return*/, res.status(404).json({ error: 'Товар не найден' })];
                }
                res.json(product);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProductById = getProductById;
var updateOneProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_2, description, price, count, category, updateProduct, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, name_2 = _a.name, description = _a.description, price = _a.price, count = _a.count, category = _a.category;
                return [4 /*yield*/, products_model_1.Product.findByIdAndUpdate(id, {
                        name: name_2,
                        price: price,
                        description: description,
                        count: count,
                        category: category
                    }, { new: true })];
            case 1:
                updateProduct = _b.sent();
                if (!updateProduct) {
                    return [2 /*return*/, res.status(404).json({ error: 'Товар не найден' })];
                }
                res.json(updateProduct);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                res.status(500).json({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateOneProduct = updateOneProduct;
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, products_model_1.Product.findByIdAndDelete(id)];
            case 1:
                _a.sent();
                res.json({ message: 'Товар успешно удален' });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(500).json({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
