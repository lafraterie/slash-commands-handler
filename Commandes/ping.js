const Discord = require("discord.js")

module.exports = {

    name: "ping",
    description: "Affiche la latence du bot.",
    permission: "Aucune",
    dm: true,
    category: "Informations",

    async run(bot, message) {

        await message.reply(`⏳-Latence du bot : \`${bot.ws.ping}\``)
    }
}