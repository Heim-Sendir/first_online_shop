import express from "express";
import {addToCart, getCartItems, removeFromCart} from "../controllers/cart.controller";

const cartRoutes = express.Router();

cartRoutes.post('/cart', addToCart);

cartRoutes.get('/cart', getCartItems);

cartRoutes.delete('/cart', removeFromCart);

export default cartRoutes;