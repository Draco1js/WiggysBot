const Discord = require('discord.js');
const db = require(`quick.db`);

module.exports = {
  name: "setroletimer",
  aliases: ["roletimer", "roleexpire", "expiretime"],
  run: async (client, message, args) => {
    if (!message.author.id === "292138463854067722" || !message.author.id === "427435240093646849") {
      return message.channel.send(`You are not allowed to run this command!`);
    }
    if (!args[0]) {
      return message.channel.send(`Please provide a time in hours. _Usage_: \`!expiretime time_in_hours\` (Dont mention h or hours, just the number)`)
    }
    const time = args[0]
    if (!parseFloat(time)) {
      return message.channel.send(`That is not a valid number`)
    }
    db.set(`roleremove_time`, time * 3600000);
    console.log(time * 3600000)
    message.channel.send(`Set the role remove time to ${time} hours`);
  }
}