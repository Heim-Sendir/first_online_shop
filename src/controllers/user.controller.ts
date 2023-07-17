import {Request, Response} from "express";
import {User} from 'src/models/user.model';

export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body;
        const newUser = new User ({
            name,
            email,
            password
        });

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
    await User.findByIdAndDelete(id);

    res.json({message: 'Пользователь успешно удален'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};