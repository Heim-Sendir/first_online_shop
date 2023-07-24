import { User } from "../models/user.model";
import { Request, Response } from "express";
import {comparePassword} from "../utils/auth.utils";

interface RequestBody {
    email: string;
    password: string;
}



export const logIn = async (req: Request<{}, {}, RequestBody>, res: Response) => {
    try {
        const {email, password} = req.body;

        const userData = await User.findOne({email});

        if (!userData) {
            return res.status(404).json({ error: 'Пользователь с таким e-mail не найден' })
        }

        const isPasswordCorrect = await comparePassword(password, userData["password"]);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Неверный пароль' });
        }

        return res.status(200).json({ message: 'Вы успешно вошли!' });
    } catch (error: any) {
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
};
