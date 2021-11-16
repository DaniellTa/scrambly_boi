module.exports = {
	name: 'rategirl',
	execute(message, args) {
    let name = args.slice(0).join(' ');

    if(!name) message.channel.send ("bruh i dont see anyone to rate :expressionless: smh go back to middle school");

    else if(name.indexOf("@") != -1){
      return message.reply("ping succ");
    }

    else if(name.toLowerCase() == "daniel" || name.toLowerCase() == "dan"){
      message.channel.send(name + " is the epitome of beauty. much thic. such wow :flushed:");
    }

    else if(name.toLowerCase() == "megumin" || name.toLowerCase() == "megu"){
      message.channel.send(name + " is the best girl and there is nobody that tops her. I will simp for " + name + " until the day i die. " + name + " is the only reason i exist :triumph:")
    }

    else if(name.toLowerCase() == "pulsar" || name.toLowerCase() == "joan"){
      message.channel.send(name + " is a 0 out of 10. yikers :grimacing:");
    }

    else{
      const ratearray = [' is a 0 out of 10. yikers :grimacing:', ' is a 1 out of 10. get away.',' is a 2 out of 10. quite ugly.',' is a 3 out of 10. you can be in my presence',' is a 4 out of 10. below avg. i wouldnt mind seeing you in my peripheral.',' is a 5 out of 10. idk what to say, you are avg asf.',' is a 6 out of 10. i would buy you a water.',' is a 7 out of 10. u know what, i would look at u in my free time',' is a 8 out of 10. you are in hawt territory. would smash.',' is a 9 out of 10. holy fack. plz marry',' is a 10 out of 10!!! WOW YOU ARE DANIEL LEVELS OF HAWT :weary:. *ahem* Sorry. You thicc',' is -1 out of 10. you dont deserve to be acknowledged']
      if (name.toLowerCase() == "me") name = "<@"+message.author.id+">";
      const randrate = ratearray[Math.floor(Math.random() * ratearray.length)];
      if(ratearray.indexOf(randrate) == 1){
        message.channel.send('ew, ' + name + ratearray[1]);
      }
      else if(ratearray.indexOf(randrate) == 10){
        message.channel.send('POGGERS ' + name + ratearray[10]);
      }
      else{
        message.channel.send(name + randrate)
      }
    }
	}
};