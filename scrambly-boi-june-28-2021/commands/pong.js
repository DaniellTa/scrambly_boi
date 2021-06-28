module.exports = {
	name: 'pong',
	execute(message, args) {
    message.channel.send("Ping!")
    .then(msg => {
      setTimeout(function() {
          msg.edit(`wait...something's not right here...`)
      }, 2000);
    })
	}
};