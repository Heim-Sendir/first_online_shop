import {Request, Response} from "express";
import {Order} from "../models/orders.model";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const {user, products, shippingAddress, total, paymentMethod, isPaid, create_time} = req.body;

        const newOrder = new Order({
            user,
            products,
            create_time,
            shippingAddress,
            total,
            paymentMethod,
            isPaid
        });

        const saveOrder = await newOrder.save();

        res.status(201).json(saveOrder);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const order = await Order.find();

        res.json(order);
    } catch (error) {
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
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};