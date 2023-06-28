const mysql = require("mysql")

module.exports = async () => {

    let db = await mysql.createConnection({
        host: "adresse",
        user: "user",
        password: "password",
        database: "database",
        charset: 'utf8mb4'
    })

    return db;
}