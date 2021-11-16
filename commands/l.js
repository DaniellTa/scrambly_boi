module.exports = {
	name: 'l',
	async execute(message, args) {
    if(message.author.id == 483818735849963530){
      const deleteCount = 1;
      const fetched = await message.channel.messages.fetch({limit: deleteCount + 1});
      message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
    else return
	}
};