import * as express from "express";
import { connectDatabase } from "./src/mongodb";
import productRouter from "./src/routes/products.routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(productRouter);

connectDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Сервер запущен на порту ${port}`);
        });
    })
    .catch((error) => {
        console.log("Ошибка подключения к базе данных: ", error);
    });

