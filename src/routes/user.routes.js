"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_controller_1 = require("../controllers/user.controller");
var userRouter = express.Router();
userRouter.post('/user', user_controller_1.createUser);
userRouter.get('/user', user_controller_1.getUsers);
userRouter.put('/user/:id', user_controller_1.deleteUser);
exports.default = userRouter;
