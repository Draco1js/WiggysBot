const Discord = require(`discord.js`);
const client = new Discord.Client();
const fs = require('fs')
const chalk = require('chalk');
const config = require('./config.json')
const PREFIX = config.prefix;
const db = require('quick.db')
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.categories = fs.readdirSync("./commands");
require(`./handler/command.js`)(client)

client.on('ready', () => {
  console.log(chalk.cyan('Logged In !'))
});

client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(PREFIX)) return;
  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (!message.member) message.member = await message.guild.members.fetch(message);
  var command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) {
    command.run(client, message, args)
  }
});

client.login(config.token)