const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
	name: 'poll',
	execute(message, args) {
    let suggestion = args.slice(0).join(' ');
    if(!suggestion){
      message.channel.send(" > you have to give me a question to poll");
    }
    else{
      message.delete();

      let embed = new Discord.MessageEmbed()
        .setColor("#55FFFF")
        .setDescription('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n▬▬▬▬▬▬▬▬▬▬▬▬**«    New Poll    »**▬▬▬▬▬▬▬▬▬▬▬▬▬\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n**Suggested By »** <@' + message.author + '>\n\n**Suggestion »** ' + suggestion)
        .setFooter('¯\\_(ツ)_/¯', client.user.avatarURL)

      message.channel.send(embed).then(sentEmbed => {
        sentEmbed.react("👍")
        sentEmbed.react("👎")
      })
    }
	}
};