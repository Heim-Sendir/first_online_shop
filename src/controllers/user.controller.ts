import {Request, Response} from "express";
import {User} from '../models/user.model';

export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, create_time, password, active} = req.body;
        const newUser = new User ({
            name,
            email,
            create_time,
            password,
            active
        });

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(409).json({error: 'Пользователь с таким e-mail уже существует'});
        }

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


export const deleteUser = async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    await User.findByIdAndUpdate(
        id,
        {active: false},
        {new: true}
    );

    res.json({message: 'Деактивация пользователя прошла успешно'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};