module.exports = {
	name: 'egg',
	execute(message, args) {
    message.channel.send(":egg:")
      .then(msg => {
        setTimeout(function() {
            msg.edit(`:egg:\n:fire:`)
        }, 1500);
        setTimeout(function() {
            msg.edit(`:cooking:`)
        }, 4000);
      })
	}
};