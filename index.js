"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb_1 = require("./src/mongodb");
var products_routes_1 = require("./src/routes/products.routes");
var app = express();
var port = 3000;
app.use(express.json());
app.use(products_routes_1.default);
(0, mongodb_1.connectDatabase)()
    .then(function () {
    app.listen(port, function () {
        console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0443 ".concat(port));
    });
})
    .catch(function (error) {
    console.log("Ошибка подключения к базе данных: ", error);
});