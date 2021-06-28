const lib = require("reddit-package")

module.exports = {
	name: 'reddit',
	execute(message, args) {
    let sub = args.slice(0).join(' ');
    let data = lib.reddit(sub)
    message.channel.send(data.img)
	}
};