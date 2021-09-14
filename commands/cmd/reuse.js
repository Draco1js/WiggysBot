const Discord = require(`discord.js`);
const db = require(`quick.db`);

module.exports = {
  name: "reuse",
  run: async (client, message, args) => {
    if (!message.author.id === "292138463854067722" || !message.author.id === "427435240093646849") {
      return message.channel.send(`You are not allowed to run this command!`);
    }
    if (!args[0]) {
      return message.channel.send(`Please provide a code to make Re-Usable. _Usage:_ \`!reuse special_code\``)
    }
    const code = args[0]
    if (!code === 'anfuh' || !code === 'dajsn' || !code === 'dkasndjn') {
      return message.reply(`That is not a valid code!`);
    }

    db.set(`is_used_${code}`, 0)
    message.channel.send(`Processing`);
    message.channel.send(`Reesult sent to DMs!`)
    message.member.send(new Discord.MessageEmbed()
      .setDescription(`I made the \`${code}\` redeem code Re-Usable!`)
      .setColor('GREEN')
    )

  }
}