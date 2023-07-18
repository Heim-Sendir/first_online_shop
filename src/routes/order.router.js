"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var order_controller_1 = require("../controllers/order.controller");
var orderRouter = express.Router();
orderRouter.post('/order', order_controller_1.createOrder);
orderRouter.get('/order', order_controller_1.getAllOrders);
orderRouter.get('/order/:id', order_controller_1.getOrderById);
exports.default = orderRouter;
