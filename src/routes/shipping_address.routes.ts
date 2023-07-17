import * as express from "express";
import {addAddress} from "../controllers/shipping_address.controller";

const addressRouter = express.Router();

addressRouter.post('/shipping', addAddress);

export default addressRouter;