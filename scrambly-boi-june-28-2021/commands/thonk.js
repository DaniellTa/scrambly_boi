module.exports = {
	name: 'thonk',
	execute(message, args) {
    message.channel.send("<:pepehmmm:693014915287613490>")
      .then(msg => {
        setTimeout(function() {
            msg.edit(`:bulb:\n<:pepothink:693014681903956008>`)
        }, 1500);
        setTimeout(function() {
            msg.edit(`:bulb:\n<:woaj:693015336194277386>`)
        }, 4000);
      })
	}
};
