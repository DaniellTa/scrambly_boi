module.exports = {
	name: 'cool',
	execute(message, args) {
    let emote = ""
    var rand = (Math.floor(Math.random() * 100)) + 1;
    if (rand <= 50) emote = "<:sadge:758821440241270825>"
    else if (rand < 100) emote = "<:poge:693010333371072532>"
    else emote = "<a:pogscroll:821876080864264202><a:pogscroll:821876080864264202><a:pogscroll:821876080864264202><a:pogscroll:821876080864264202><a:pogscroll:821876080864264202>"
    if (message.author.id == 483818735849963530){
      message.channel.send("irrrlrvant is 100% cool")
      message.channel.send("<a:pogscroll:821876080864264202><a:pogscroll:821876080864264202><a:pogscroll:821876080864264202><a:pogscroll:821876080864264202><a:pogscroll:821876080864264202>")
    }
    else if (message.author.id == 678393305905496086){
      message.channel.send(message.author.username + " is 69% cool <:boolin:803026002406146088>")
    }
    else{
      message.channel.send(message.author.username + " is " + rand + "% cool " + emote)
    }
	}
};