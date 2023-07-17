import * as express from "express";
import {createProduct, getProductById, getAllProducts, deleteProduct, updateOneProduct} from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.post('/products', createProduct);

productRouter.get('/products:id', getProductById);

productRouter.get('/products', getAllProducts);

productRouter.delete('/products:id', deleteProduct);

productRouter.put('/products', updateOneProduct);


export default productRouter;