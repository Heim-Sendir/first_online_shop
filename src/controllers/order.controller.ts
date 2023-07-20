import {Request, Response} from "express";
import {Order} from "../models/orders.model";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const {user_id, products, shippingAddress, total, paymentMethod, state, create_time, perform_time, cancel_time} = req.body;

        const newOrder = new Order({
            user_id,
            products,
            create_time,
            perform_time,
            cancel_time,
            shippingAddress,
            total,
            paymentMethod,
            state
        });

        const saveOrder = await newOrder.save();

        res.status(201).json(saveOrder);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const order = await Order.find();

        res.json(order);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({error: 'Заказ не найден'});
        }
        res.json(order);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};