import {Request, Response} from "express";
import {Product} from "../models/products.model";
import {connectDatabase} from "../mongodb";


export const createProduct = async (req: Request, res: Response) => {
    try {
        //Получаем данные из запроса
        const {name, price, count, description} = req.body;

        //Создаем новый экземпляр модели "Товар"
        const newProduct = new Product({
            name,
            price,
            count,
            description
        });

        //Сохраняем товар в базе данных
        const saveProduct = await newProduct.save();

        //Отправялем успешный ответ с сохраненным товаром
        res.status(201).json(saveProduct);
    } catch (error) {
        //В случае ошибки отправялем ошибочный ответ
        res.status(500).json({error: error.message});
    }
};


//Метод для получения всех товаро
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        //Получаем все товары из базы данных
        const products = await Product.find();

        //Отправляем успешный ответ с полученными товарами
        res.json(products);
    } catch (error) {
        //В случае ошибки отправляем ошибочный ответ
        res.status(500).json({error: error.message});
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({error: 'Товар не найден'})
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateOneProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {name, description, price, count, category} = req.body;
        const updateProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                price,
                description,
                count,
                category
            },
            {new: true}
        );

        if (!updateProduct) {
            return res.status(404).json({error: 'Товар не найден'});
        }

        res.json(updateProduct);
    } catch (error) {

        res.status(500).json({error: error.message});
    }
}


export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);

        res.json({message: 'Товар успешно удален'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}