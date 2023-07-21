import express from "express";
import {createUser, getUsers, deleteUser, getUser} from "../controllers/user.controller";


const userRouter = express.Router();

userRouter.post ('/user', createUser);
userRouter.get ('/user', getUsers);
userRouter.get ('/user/:id', getUser);
userRouter.put ('/user/:id', deleteUser);

export default userRouter;