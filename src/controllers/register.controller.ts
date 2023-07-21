import * as bcrypt from 'bcrypt';
import {User} from "../models/user.model";
import {Request, Response} from "express";

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

        console.log('Имя: ', name);
        console.log('Почта: ', email);
        console.log('Пароль: ', password);

        // Проверяем, существует ли уже пользователь с таким email
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(409).json({error: 'Пользователь с таким e-mail уже существует'});
        }

        console.log('Проверка по e-mail: ', 'Такой e-mail не существует, всё ок');

        // Хешируем пароль перед сохранением в базе данных
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log('Проверка хэша: ', hashedPassword);

        // Создаем нового пользователя
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        console.log('Возвращаем юзера: ', newUser);


        // Сохраняем пользователя в базе данных
        const savedUser = await newUser.save();

        console.log('Юзер должен сохраниться: ', savedUser);


        // Отправляем успешный ответ
        return res.status(201).json(savedUser);
    } catch (error: any) {
        return res.status(500).json({error: error.message});
    }
};

/*{message: 'Пользователь успешно зарегистрирован'}*/