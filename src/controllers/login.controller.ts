import { User } from "../models/user.model";
import { Request, Response } from "express";

export const logIn = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        //console.log('Получаем почту: ', email);
        //console.log('Получаем пароль: ', password);

        const user = await User.findOne({ email });
        console.log('Получаем email: ', email,'---', 'Тип данных: ' , typeof email);
        console.log('Получаем пароль: ', password,'---', 'Тип данных: ' , typeof password);

        //console.log('Получаем юзера', user);

        if (!user) {
            return res.status(404).json({ error: 'Пользователь с таким e-mail не найден' })
        } console.log('Такой email есть в бд, всё ок');


        const isPasswordCorrect = await user.comparePassword(password);
        console.log('Правильный ли пароль?', user.comparePassword(password));


        if (isPasswordCorrect === false) {
            return res.status(401).json({ error: 'Неверный пароль' });
        }

        return res.status(200).json({ message: 'Вы успешно вошли!' });
    } catch (error: any) {
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
};
