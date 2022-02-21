const mysql = require("mysql")
const dotenv = require('dotenv')

dotenv.config()

const db = mysql.createConnection({
    host : "localhost",
    user :"root",
    password : process.env.DATABASE_PASSWORD,
    database : "website"

})

module.exports = db;