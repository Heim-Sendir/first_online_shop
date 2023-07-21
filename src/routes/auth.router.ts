import express from 'express';
import {registerUser} from '../controllers/register.controller';

const authRouter = express.Router();

authRouter.post('/register', registerUser);

export default authRouter;