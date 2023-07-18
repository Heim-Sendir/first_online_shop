import {Category} from "../models/category.model";
import {Request, Response} from "express";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const {name, description, active, create_time} = req.body;
        const newCategory = new Category({
            name,
            description,
            create_time,
            active
        });

        const saveCategory = await newCategory.save();

        res.status(201).json(saveCategory);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getAllCategory = async (req:Request, res: Response) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const getCategoryById = async (req:Request,res: Response) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({error: 'Категория не найдена'});
        }

        res.json(category);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Category.findByIdAndDelete(id);

        res.json({message: 'Категория успешно удалена'})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

