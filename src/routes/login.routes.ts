import express from "express";
import {logIn} from "../controllers/login.controller";

const loginRouter = express.Router();

loginRouter.post("/login", logIn);

export default loginRouter;
