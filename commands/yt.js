const Discord = require("discord.js");
const client = new Discord.Client();
const search = require('youtube-search');
const opts = {
    maxResults: 10,
    key: "AIzaSyB60NRkNrcVP3bi0C-hW78SFcgFiDqieaY",
    type: 'video'
};


module.exports = {
	name: 'yt',
	async execute(message, args) {
        let embed = new Discord.MessageEmbed()
            .setColor("#73ffdc")
            .setDescription("Enter a search query below")
            .setTitle("YouTube Search");
        let embedMsg = await message.channel.send(embed);
        let filter = m => m.author.id === message.author.id;
        let query = await message.channel.awaitMessages(filter, { max: 1 });
        let results = await search(query.first().content, opts).catch(err => console.log(err));
        if(results) {
            let youtubeResults = results.results;
            let i = 0;
            let titles = youtubeResults.map(result => {
                i++;
                return i + ") " + result.title;
            });
            console.log(titles);
            message.channel.send({
                embed: {
                    title: 'Select which video you want by typing the number',
                    description: titles.join("\n")
                }
            }).catch(err => console.log(err));
            
            filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
            let collected = await message.channel.awaitMessages(filter, { max: 1 });
            let selected = youtubeResults[collected.first().content - 1];

            embed = new Discord.MessageEmbed()
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setDescription(`${selected.description}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);

            message.channel.send(embed);
        }
	},
}
