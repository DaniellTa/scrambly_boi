module.exports = {
	name: 'flipcoin',
	execute(message, args) {
    var randomnumber = Math.floor(Math.random() * 2);
    if(randomnumber==0) message.channel.send('heads');
    else message.channel.send('tails');
	}
};