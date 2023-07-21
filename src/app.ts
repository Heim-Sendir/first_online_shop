import express from "express";
import { connectDatabase } from "./mongodb";
import productRouter from "./routes/products.routes";
import categoryRouter from "./routes/category.routes";
import reviewRouter from "./routes/review.routes";
import userRouter from "./routes/user.routes";
import addressRouter from "./routes/shipping.routes";
import cartRouter from "./routes/cart.routes";
import orderRouter from "./routes/order.router";
import authRouter from "./routes/auth.router";
import loginRouter from "./routes/login.routes";


const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/products', productRouter);
app.use(express.json());
app.use(productRouter);
app.use(categoryRouter);
app.use(reviewRouter);
app.use(userRouter);
app.use(addressRouter);
app.use(cartRouter);
app.use(orderRouter);
app.post('/register', authRouter);
app.post('/login', loginRouter);



connectDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Сервер запущен на порту ${port} \n-----------------------------\n-----------------------------\n`);
        });
    })
    .catch((error) => {
        console.log("Ошибка подключения к базе данных: ", error);
    });

