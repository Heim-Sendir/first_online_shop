import * as express from "express";
import {createUser, getUsers, deleteUser} from "../controllers/user.controller";


const userRouter = express.Router();

userRouter.post ('/user', createUser);
userRouter.get ('/user', getUsers);
userRouter.put ('/user/:id', deleteUser);

export default userRouter;