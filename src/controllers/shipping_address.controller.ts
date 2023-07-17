import {Request, Response} from "express";
import {ShippingAddress} from "../models/shipping_address.model";

export const addAddress = async (req: Request, res: Response) => {
    try {
        const {address, city, postalCode, country} = req.body;
        const newAddress = new ShippingAddress({
            //user,
            address,
            city,
            postalCode,
            country
        });

        const saveAddress = await newAddress.save();

        res.status(201).json(saveAddress);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

