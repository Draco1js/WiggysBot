const Discord = require('discord.js');
const moment = require('moment');


module.exports = {
  name: "ping",
  category: "info",
  description: "tells the bot\'s ping",
  run: async (client, message) => {

    let member = message.member;
    const pinging = new Discord.MessageEmbed()
      .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('#d63a3a')
      .setThumbnail(client.user.displayAvatarURL())
      .addField("Bot's Ping", `Message Ping: (. . .) ms     API Ping: (. . .)ms`)

    let m1 = await message.channel.send(pinging)

    const ping = Date.now() - message.createdTimestamp;

    var ut_sec = process.uptime();
    var ut_min = ut_sec / 60;
    var ut_hour = ut_min / 60;

    ut_sec = Math.floor(ut_sec);
    ut_min = Math.floor(ut_min);
    ut_hour = Math.floor(ut_hour);

    ut_hour = ut_hour % 60;
    ut_min = ut_min % 60;
    ut_sec = ut_sec % 60;

    console.log(`Uptime: ${ut_hour} hour(s) ${ut_min} minute(s) ${ut_sec} second(s)`);


    const pingEmbed = new Discord.MessageEmbed()
      .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('#d63a3a')
      .setThumbnail(client.user.displayAvatarURL())
      .addField("Bot's Ping", `Message Ping: \`${ping}ms\`     API Ping: \`${client.ws.ping}ms\``)
      .addField('Uptime:', `Uptime: ${ut_hour} hour(s) ${ut_min} minute(s) ${ut_sec} second(s)`)

    m1.edit(pingEmbed)
  }
}