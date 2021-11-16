module.exports = {
	name: 'yeet',
	execute(message, args) {
    var tabs = "";
    let emote = args.slice(0).join(' ');
    if(!emote) {message.channel.send("what am i yeeting tho")}
    else if(emote.indexOf("@") != -1){
      return message.reply("ping succ");
    }
    else{

      for(var i = 0; i<24; i++) tabs+="\t";

      var build = "━━━━━┒\n┓┏┓┏┓┃\n┛┗┛┗┛┃ ＼" + emote+ "／\n┓┏┓┏┓┃\     /\n┛┗┛┗┛┃ノ)";
      
      for(var i=0;i<7;i++){
        build += "\n┓┏┓┏┓┃\n┛┗┛┗┛┃";
      }

      build += "\n┓┏┓┏┓┃\n┃┃┃┃┃┃\n┻┻┻┻┻┻ " + tabs + "<a:peeposalute:731692573252517898>";

      message.channel.send(build);
    }
	},
}
