import {User} from "../models/user.model";
import {Request, Response} from "express";
import {hashPassword} from "../utils/auth.utils";

/**
 * Обработка запроса регистрации нового пользователя
 * @param req - объект запроса
 * @param res - объект ответа
 * @returns {Promise<Response>}
 */

export const registerUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        // Получаем данные пользователя из запроса
        const {name, email, password} = req.body;

        // Проверяем, существует ли уже пользователь с таким email
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(409).json({error: 'Пользователь с таким e-mail уже существует'});
        }

        // Хешируем пароль перед сохранением в базе данных
        const hashedPassword = await hashPassword(password);

        // Создаем нового пользователя
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Сохраняем пользователя в базе данных
        const savedUser = await newUser.save();

        // Отправляем успешный ответ
        return res.status(201).json(savedUser);
    } catch (error: any) {
        return res.status(500).json({error: error.message});
    }
};