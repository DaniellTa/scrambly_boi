const Discord = require("discord.js");

module.exports = {
	name: 'help',
	execute(message, args) {

    function darken(text){
        let comms = text.split(" ")
        let s = ""
        for (let i = 0; i < comms.length; i++) {
            if (comms[i] != "\n")
                s += `\`${comms[i]}\`, `
            else if (comms[i] == "\n")
                s += comms[i]
        }
        return s.slice(0, s.length-2)
    }

    var randomnumber = Math.floor(Math.random() * 2);
    var name = ""
    var pic = ""
    if(randomnumber==0) {
      name = "rihc"
      pic = "https://cdn.discordapp.com/avatars/472128691539804160/ef0094f5c6c6cbdf03123f72e84364ab.webp?size=1024"
    }
    else {
      name = "irrrlrvant"
      pic = "https://cdn.discordapp.com/emojis/627547452450406440.gif?v=1"
    }
    let buffer = args.slice(0).join(' ').toLowerCase();
    // if(buffer === "defend"){
    //   const defendhelp = new Discord.MessageEmbed()
    //   .setColor('#0099ff')
    //   .setTitle('"plz defend"')
    //   .setDescription('How to use: plz defend <the word being defended>\nExample: plz defend pepe\n\nFuture messages talkin smack about pepe will be defended by **scrambly boi**\n\n*stoopidperson: pepe is trash LOL\nscrambly boi: @stoopidperson, wrong\nsmartperson: pepe isnt not not bad\nscrambly boi: i agree bruh*\n\n**How does this work?**\nscrambly boi looks for key words like bad, succ, cringe, etc. and counts the number of negative words like not, isnt, doesnt, etc.\nNote: "plz undefend" will undefend all words in said server')
    //   .setThumbnail('https://cdn.discordapp.com/emojis/585811189997633551.png?v=1')
    //   message.channel.send(defendhelp);
    // }
    if(buffer === "memo"){
      const memohelp = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('"plz memo <scramble> -<memo orientation>"')
      .setDescription(`example: plz memo R U R' U' -YB\n\nYB - memo on Yellow top, Blue front\n\nThis gives you a OP/OP memo based on the scramble and orientation that you put in.\n\nAdditional notes:\n- **add a dash before the orientation**\n- scramble must start with White top, Green front\n- for corners: U of ULB swaps with R of RDF\n- for edges: U of UR swaps with U of UL\n- there is a target hierarchy for new cycles\n- wide moves, slices, and rotations are accepted\n- memo will be in ending orientation of the scramble unless specified otherwise\n- no argument inputted for orientation will default to the orientation the cube is left at the end of the scramble\n\nUse command **"plz help custom"** to find out how to configure your preferred letter scheme and buffer placements`)
      .setThumbnail('https://cdn.discordapp.com/emojis/702726610130042950.png?v=1')
      message.channel.send(memohelp);
    }
    else if(buffer === "custom"){
      const customhelp = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('"plz custom [letters for corners] [letters for edges] [corner buffer] [edge buffer]"')
      .setDescription(`example: plz custom ABCDEFGHIJKLMNOPQRSTUVWX ABCDEFGHIJKLMNOPQRSTUVWX A B\n\nAdditional Notes:\n- When typing this out, **make sure everything is included and separated by a space.** (Don't include brackets like in the example)\n- The letter schemes for corners and edges must be 24 English letters and cannot contain repeats.\n- The buffers must be one English letter and it must be in the respective letter scheme.\n- If you ever need help, just type "plz custom" by itself and you should see some instructions.\n- **"plz reset"** to reset your preferences to the default Speffz letter scheme\n- **"plz settings"** to view your preferred letter scheme and buffer placements`)
      .setThumbnail('https://cdn.discordapp.com/emojis/419532126858379265.gif?v=1')
      message.channel.send(customhelp);
    }
    else if(buffer === "time" || buffer === "timer"){
      const timehelp = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle("\"**plz time**\"")
      .setDescription('1. Do command "plz time"\n\n2. React to your message and the timer will start\n\n3. Press any key once to stop the timer')
      .setThumbnail('https://cdn.discordapp.com/emojis/693015038017142848.png?v=1')
      message.channel.send(timehelp);
    }
    else{
      let scrams1 = darken('0 1 2 3 noob3 scramble 4 5 6 7 squan pyraminx megaminx clock skewb')
        let scrams2 = "[regripless](https://www.reddit.com/r/Cubers/comments/f8xxcf/a_bot_that_generates_regripless_scrambles_more/?utm_medium=android_app&utm_source=share)"
        let resources = darken('invite tuesdaytips cross beginnerf2l f2lexplained f2l lookahead vls magicwondeful oll coll ollcp zbll pll 4lll ohpll lltips 1lll 3style jperm jay feliks max cubeskills cstimer tc scs zcube cubezz')
        let utility = "\`show\` \`<puzzle>\` \`<moves to show>\` \`(eg. \"plz show 3 R U R' U'\")\`\n\`setup\` \`<moves to inverse>\`\n\`memo\` \`<scramble>\` | \`*plz help memo for more info*\`\n\`v\` \`<virtual>\` | \`(eg. \"plz v ijkf\" => R U R' U')\`"
        let fun1 = darken('time gcd rps info cool diceroll recon horny vibe pog cry yt snipe flipcoin pop useless')
        let fun2 = "\n\`mal\` \`<anime>\` | \`*returns link to anime*\`\n\`wcaid\` \`<name>\` | \`*returns wca stats*\`\n\`tcs\` \`<query>\` | \`*returns first result from the cubicle*\`\n\`reck\` \`<name>\` | \`*roasts*\`\n\`ratepp\` \`<name>\` | \`*pp inspection*\`\n\`rategirl\` \`<name>\` | \`*female inspection*\`\n\`yeet\` \`<emote>\` | \`*yeets*\`\n\`?\` \`<question>\` | \`*answers*\`\n\`bless\` \`<name>\` | \`*blesses*\`"
        const help = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Scrambly Boi')
            .setURL('https://discord.gg/WushFBN')
            .setDescription('**prefix: plz**')
            .setThumbnail('https://cdn.discordapp.com/attachments/547216646058803211/706988723547537509/help-me-i-die.gif')
            .addField("Scrambles <:cube:866167244212273163>", scrams1+ ", " + scrams2)
            .addField("Resources <:pepothink:693014681903956008>", resources)
            .addField("Cube Utility <:peepocube:748054614422585395>", utility)
            .addField("Fun <:peepoyay:693014997756018709>", fun1 + fun2)
            .addField("Further info", "[Add this bot to your server](https://discord.com/oauth2/authorize?client_id=601113688245665864&scope=bot&permissions=8)\n[Join the official scrambly boi server](https://discord.gg/WushFBN)")
            .setFooter(name, pic);
        message.channel.send(help);
    }
	},
}
