import express from 'express';
import {createOrder, getAllOrders, getOrderById} from "../controllers/order.controller"

const orderRouter = express.Router();

orderRouter.post('/order', createOrder);
orderRouter.get('/order', getAllOrders);
orderRouter.get('/order/:id', getOrderById);

export default orderRouter;