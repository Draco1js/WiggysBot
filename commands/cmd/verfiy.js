const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require(`chalk`)
const data = {
  "code1": {
    "name": "anfuh",
    "role": "828327080474443776",
    "role2": "831388008409858049",
    "message": "You have recieved the role!"
  },
  "code2": {
    "name": "dajsn",
    "role": "828327038523146269",
    "role2": "831388042794106881",
    "message": "You have recieved the role!"
  },
  "code3": {
    "name": "dkasndjn",
    "role": "828326552256249886",
    "role2": "831388078165458966",
    "message": "You have recieved the role!"
  }
}

const a = function(message, object) {
  message.channel.send('Redeeming Role')
  if (db.fetch(`is_used_${object.name}`) === 1) {
    message.reply(`This Code has already been redeemed!`)
    return;
  }
  else {
    message.reply(`Done`)
    const h = object.role
    const role = message.guild.roles.cache.get(h)
    message.member.roles.add(role)
    const time = db.fetch(`roleremove_time`) || 2000
    db.set(`is_used_${object.name}`, 1)
    console.log(chalk.blue('[INFO]') + ` Gave ${message.author.tag} the ${role.name} role!`)
    setTimeout(
      function() {
        message.member.roles.remove(role)
        message.member.send(new Discord.MessageEmbed()
          .setDescription(`You role has expired and has been removed from you`)
          .setColor('GREEN'))
        console.log(chalk.blue('[INFO]') + ` Removed the the ${role.name} role from ${message.author.tag} after ${time} hours!`)
      }
      , time);
  }
}


module.exports = {
  name: "verify",
  aliases: ["redeem"],
  run: async (client, message, args) => {
    if (!args[0]) {
      message.channel.send(`Please Provide a Code to redeem. _Usage:_ \`!verify special_code\``)
      return;
    }
    else if (args[0].toLowerCase() === data.code1.name) {
      a(message, data.code1)
    }
    else if (args[0].toLowerCase() === data.code2.name) {
      a(message, data.code2)
    }
    else if (args[0].toLowerCase() === data.code3.name) {
      a(message, data.code3)
    }
    else {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle('Incorrect Code!')
          .setColor('RED')
          .setDescription(`<@!${message.author.id}> The code you entered was wrong, please contact <@!292138463854067722> for a code to redeem!`)
      );
    }

  }
}