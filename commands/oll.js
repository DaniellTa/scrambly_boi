const Discord = require("discord.js");

module.exports = {
	name: 'oll',
	execute(message, args) {
    const help = new Discord.MessageEmbed()
      .setColor('#0099ff')
      // .setTitle('PLL Sheet')
      // .setDescription('[click here](https://docs.google.com/spreadsheets/d/1gpGw2cZciAvdqyMYCsjqudSp0-9G1CycKh-Xdk6zSDc/edit?usp=sharing)')
      .addField('OLL Sheet', '[click here](https://docs.google.com/spreadsheets/d/1CHGvHn1tIeWBj_zdpmhtqzydeW-pgUAxChslJg_jirE/edit?usp=sharing)', true)
      message.channel.send(help);
	}
};