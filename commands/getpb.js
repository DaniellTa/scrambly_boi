const db = require('quick.db')

module.exports = {
	name: 'getpb',
	execute(message, args) {
    if(message.guild.id == 681177598931238920){
      let user = message.mentions.users.first() || message.author

      if(!db.get(`gngmpb_${user.id}`)) message.channel.send("you havent slept yet. do gn gm so i can start watching you sleep :D");

      else message.channel.send(user.username + "'s gn gm pb is: " + db.get(`gngmpb_${user.id}`)); 
    }
	}
};