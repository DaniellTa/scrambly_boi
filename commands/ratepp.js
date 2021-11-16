module.exports = {
	name: 'ratepp',
	execute(message, args) {
    if(message.guild.id != 717423546049101894){
    let name = args.slice(0).join(' ');
    var pp = "";
    var size = Math.floor(Math.random() * 11);
    for(var i=0;i<size;i++){
      pp+="=";
    }
    if(!name && message.author.id == 483818735849963530){
      var dan = "";
      for(var i=0;i<26;i++){
        dan+="=";
      }
      message.channel.send("your pp:\n8" + dan + "D");
    }
    else if(!name){
      message.channel.send("your pp:\n8" + pp + "D");   
    }
    else if(name.indexOf("@") != -1){
      return message.reply("ping succ");
    }
    else{
      if (name.toLowerCase() == "me") name = "<@"+message.author.id+">";
      message.channel.send(name + "'s pp:\n8" + pp + "D");
    }
    }
	}
}