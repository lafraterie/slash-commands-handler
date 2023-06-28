const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const loadDatabase = require("./Loaders/loadDatabase")
const mysql = require("mysql")
const { EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

bot.commands = new Discord.Collection()
bot.color = "#ffffff";


bot.login("TOKEN_DU_BOT")
loadCommands(bot)
loadEvents(bot)