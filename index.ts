import * as express from "express";
import { connectDatabase } from "./src/mongodb";
import productRouter from "./src/routes/products.routes";
import categoryRouter from "./src/routes/category.routes";
import reviewRouter from "./src/routes/review.routes";
import userRouter from "./src/routes/user.routes";
import addressRouter from "./src/routes/shipping_address.routes";



const app = express();
const port = 3000;

app.use(express.json());
app.use(productRouter);
app.use(categoryRouter);
app.use(reviewRouter);
app.use(userRouter);
app.use(addressRouter);




connectDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Сервер запущен на порту ${port}`);
        });
    })
    .catch((error) => {
        console.log("Ошибка подключения к базе данных: ", error);
    });

