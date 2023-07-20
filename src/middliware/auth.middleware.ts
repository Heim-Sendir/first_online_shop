/*
import jwt from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";


const authToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({error: 'Ошибка аутентификации'});
    }

    jwt.verify(token, 'my-secret-key', (err, decoded) => {
        if (err) {
            return res.status(401).json({error: 'Ошибка аутентификации'});
        }


        req.userId = (decoded as {userId: string}).userId;

        next();
    });
}

export default authToken;
*/

