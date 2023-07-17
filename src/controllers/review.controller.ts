import {Request, Response} from "express";
import {Review} from "../models/review.model";

export const addReview = async (req: Request, res: Response) => {
    try {
        const {user, product, rating, comment} = req.body;
        const newReview = new Review({
            user,
            product,
            rating,
            comment
        });

        const saveReview = await newReview.save();
        res.status(201).json(saveReview);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteReview = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        await Review.findByIdAndDelete(id);

        res.json({message: 'Отзыв успешно удален'})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};