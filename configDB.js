import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config();

const connection = await mysql.createConnection({
    host:process.env.HOST_DB,
    user: process.env.USER_DB,
    database: process.env.DATABASE,
    password: process.env.PASSWORD_DB,
})

export default connection;
