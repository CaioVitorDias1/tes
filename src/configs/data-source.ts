import { DataSource } from "typeorm";
import { Pessoa } from "../entities/Pessoa";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Pessoa]
});

export default AppDataSource;