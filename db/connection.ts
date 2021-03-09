import dotenv from 'dotenv';
import { Sequelize } from "sequelize";
dotenv.config();

const db = new Sequelize('node', 'root', process.env.PASSWORD_DB, {
    host: 'localhost',
    dialect: 'mysql',
    //logging: 'false'
});

export default db;