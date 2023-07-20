import express from "express";
import {createCategory, getCategoryById, getAllCategory, deleteCategory} from "../controllers/category.controller";

const categoryRouter = express.Router();

categoryRouter.post('/category', createCategory);

categoryRouter.get('/category/:id', getCategoryById);

categoryRouter.get('/category', getAllCategory);

categoryRouter.delete('/category/:id', deleteCategory);

//categoryRouter.put('/products', updateOneProduct);


export default categoryRouter;