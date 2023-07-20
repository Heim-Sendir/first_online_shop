"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb_1 = require("./src/mongodb");
var products_routes_1 = require("./src/routes/products.routes");
var category_routes_1 = require("./src/routes/category.routes");
var review_routes_1 = require("./src/routes/review.routes");
var user_routes_1 = require("./src/routes/user.routes");
var shipping_routes_1 = require("./src/routes/shipping.routes");
var cart_routes_1 = require("./src/routes/cart.routes");
var order_router_1 = require("./src/routes/order.router");
var auth_router_1 = require("./src/routes/auth.router");
var app = express();
var port = 3000;
app.use(express.static('public'));
app.use('/products', products_routes_1.default);
app.use(express.json());
app.use(products_routes_1.default);
app.use(category_routes_1.default);
app.use(review_routes_1.default);
app.use(user_routes_1.default);
app.use(shipping_routes_1.default);
app.use(cart_routes_1.default);
app.use(order_router_1.default);
app.post('/register', auth_router_1.default);
(0, mongodb_1.connectDatabase)()
    .then(function () {
    app.listen(port, function () {
        console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0443 ".concat(port));
    });
})
    .catch(function (error) {
    console.log("Ошибка подключения к базе данных: ", error);
});
