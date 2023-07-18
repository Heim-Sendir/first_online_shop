"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var shipping_controller_1 = require("../controllers/shipping.controller");
var addressRouter = express.Router();
addressRouter.post('/shipping', shipping_controller_1.createShipping);
exports.default = addressRouter;
