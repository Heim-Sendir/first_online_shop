import {Request, Response} from "express";
import {Shipping} from "../models/shipping.model";

export const createShipping = async (req: Request, res: Response) => {
    try {
        const {address, city, postalCode, create_time, country, user} = req.body;
        const newShipping = new Shipping({
            user,
            address,
            create_time,
            city,
            postalCode,
            country
        });

        const saveShipping = await newShipping.save();

        res.status(201).json(saveShipping);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

