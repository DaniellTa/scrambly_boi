const Discord = require("discord.js");

module.exports = {
	name: 'invite',
	execute(message, args) {
    const invite = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .addField("Add Scrambly Boi", "[Here](https://discord.com/oauth2/authorize?client_id=601113688245665864&scope=bot&permissions=8)")
      .addField("Join the server", "[Here](https://discord.gg/WushFBN)")
      .addField("Vote for Scrambly Boi", "[Here](https://top.gg/bot/601113688245665864)")
    message.channel.send(invite);
	}
};