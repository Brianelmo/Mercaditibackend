import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host:'localhost',
    user: 'brianelmo',
    database: 'mercaditogamer',
    password: 'briancale12',
})

export default connection;
