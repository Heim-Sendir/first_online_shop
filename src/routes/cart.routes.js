"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cart_controller_1 = require("../controllers/cart.controller");
var cartRoutes = express.Router();
cartRoutes.post('/cart', cart_controller_1.addToCart);
cartRoutes.get('/cart', cart_controller_1.getCartItems);
cartRoutes.delete('/cart', cart_controller_1.removeFromCart);
exports.default = cartRoutes;
