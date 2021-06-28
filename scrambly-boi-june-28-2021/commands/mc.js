module.exports = {
	name: 'mc',
	execute(message, args) {
    if (message.guild.id != 765019641059082270){
      var mc = "**Members\n**" + (message.guild.memberCount);
      message.channel.send({embed: {
        color: 3447003,
        description: mc
      }});
    }
    else{
      var mc = "**Members\n**9.02349757182985e+21";
      message.channel.send({embed: {
        color: 3447003,
        description: mc
      }});
    }
	}
};