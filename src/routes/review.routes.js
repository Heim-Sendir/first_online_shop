"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var review_controller_1 = require("../controllers/review.controller");
var reviewRouter = express.Router();
reviewRouter.post('/review', review_controller_1.addReview);
reviewRouter.delete('/review/:id', review_controller_1.deleteReview);
exports.default = reviewRouter;
