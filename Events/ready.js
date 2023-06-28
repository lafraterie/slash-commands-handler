const Discord = require("discord.js")
const loadDatabase = require("../Loaders/loadDatabase")
const loadSlashCommands = require("../Loaders/loadSlashCommands")
const mysql = require('mysql')
const interval = 2 * 60 * 1000; // 2 minutes en millisecondes
const Gamedig = require('gamedig');
const { EmbedBuilder } = require('discord.js');

let db = mysql.createConnection({
    host: "mysql-lygdrangheta.alwaysdata.net",
    user: "301709",
    password: "Natanael4",
    database: "lygdrangheta_base",
    charset: 'utf8mb4'
})

module.exports = async bot => {

    bot.db = await loadDatabase()
    bot.db.connect(function () {
        console.log("Base de données connéctée.")
    })

    await loadSlashCommands(bot)
    
}