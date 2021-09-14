const Discord = require('discord.js');

module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setTitle('Help')
      .setDescription('**Ping**: Showws the bot\'s Ping\n**Help**: Shows this Embed \n**Verify**: Redeems a Role if you have the proper code. _Usage:_\`!verify special_code\` \n**ReUse**: Makes a code reusable (Owner Only!) \n**ExpireTime**: Sets the time for role expiry (in hours)')
      .setColor('PURPLE')
    message.channel.send(embed)
  }
}