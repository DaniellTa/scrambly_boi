module.exports = {
	name: 'pop',
	execute(message, args) {
    var bubble = "";
    for(var l = 0; l<8; l++){
      for(var i = 0; i<8; i++){
        bubble+="||:white_circle:||"
      }
      bubble += '\n'
    }

    message.channel.send(bubble);
	}
};