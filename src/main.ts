import express from "express";
import "reflect-metadata";
import AppDataSource from "./configs/data-source";
import router from "./routes/PessoaRoute";

const app = express();

const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log("servidor esta ligado")
});

app.use('/pessoa', router)

AppDataSource.initialize().then(
    () => {console.log("Banco esta conectado")}
).catch((error) => {
    console.error("Deu erro", error);
})