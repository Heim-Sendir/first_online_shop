import express from "express";
import {createShipping} from "../controllers/shipping.controller";

const addressRouter = express.Router();

addressRouter.post('/shipping', createShipping);

export default addressRouter;