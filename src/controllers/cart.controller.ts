import {Cart} from "../models/cart.model";
import {Request, Response} from "express";


export const addToCart = async (req: Request, res: Response) => {
    try {
        const {products, total} = req.body;
        const newCartItem = new Cart({
            products,
            total
        });

        const saveCardItem = await newCartItem.save();

        res.status(201).json(saveCardItem);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const removeFromCart = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await Cart.findByIdAndDelete(id);

        res.json({message: 'Товар успешно удален из корзины'})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getCartItems = async (req: Request, res: Response) => {
    try {
      const cartItems = await Cart.find();

      res.json(cartItems);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};