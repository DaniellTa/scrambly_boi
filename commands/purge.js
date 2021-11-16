module.exports = {
	name: 'purge',
	async execute(message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("srry, you cant do that fam");
      }
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 99)
      return message.reply("gib number between 2 and 99 to delete bruh");
    const fetched = await message.channel.messages.fetch({limit: deleteCount + 1});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
	}
};