// const Discord = require("discord.js");
// const client = new Discord.Client();

// module.exports = {
// 	name: 'guild',
// 	execute(message, args) {
//     if(message.author.id == 483818735849963530 || message.author.id == 472128691539804160){
//       let guildId = args.slice(0).join(' ');
//       if(!guildId){
//         message.channel.send("what am i searching tho");
//       }
//       else if(guildId.indexOf('@everyone') != -1 || guildId.indexOf('@here') != -1){
//         return;
//       }
//       else{
//         let guild = client.guilds.cache.get(guildId);
//         if (!guild) return message.reply("The bot isn't in the guild with this ID.");

//         guild.fetchInvites()
//           .then(invites => message.channel.send('Found Invites:\ndiscord.gg/' + invites.map(invite => invite.code).join('\n')))
//           .catch(console.error);
//       }
//     }
// 	}
// };