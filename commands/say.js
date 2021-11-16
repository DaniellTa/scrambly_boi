// const Discord = require("discord.js");
// const client = new Discord.Client();

// module.exports = {
// 	name: 'say',
// 	async execute(message, args) {
//       var name = args.slice(0).join(' ');
//       var sworCount=0;
//       const swor = ["fuck","bitch","pussy","cunt","slut","shit","nigg","negro","bich","kys"," ass"];

//       for(let i = 0; i < swor.length; ++i){
//         if(name.toLowerCase().indexOf(swor[i].toLowerCase()) != -1){
//           message.channel.send("<@"+ message.author.id +"> said a bad word >:(");
//           sworCount++;
//         }
//       }

//       if(sworCount == 0){
//         if(name.indexOf("@") != -1){
//           message.reply("ping succ");
//         }
//         else if(!name){
//           return;
//         }
//         else if(message.mentions.has(client.user)){
//           message.delete();
//           message.channel.send("<:pingbruh:693021886426120193>")
//             .then((msg) => {
//             setTimeout(function() {
//             msg.edit(name);
//           }, 500)});
//           if(message.guild.id == 681177598931238920){
//             client.channels.cache.get("708808169673195571").send("from " + message.author.username + ": " + name);
//           }
//         }
//         else{
//           message.delete();
//           message.channel.send(name);
//           if(message.guild.id == 681177598931238920){
//             client.channels.cache.get("708808169673195571").send("from " + message.author.username + ": " + name);
//           }
//         }
//       }
//     }
// };