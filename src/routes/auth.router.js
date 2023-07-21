"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var auth_controller_1 = require("../controllers/auth.controller");
var authRouter = express.Router();
authRouter.post('/register', auth_controller_1.registerUser);
exports.default = authRouter;
