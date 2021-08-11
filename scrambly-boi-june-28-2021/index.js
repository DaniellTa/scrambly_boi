const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment")
const giveMeAJoke = require('give-me-a-joke');
const randomPuppy = require("random-puppy");
const Cube = require("cubejs");
const cube = new Cube();
const fs = require("fs");
const db = require('quick.db')
const lib = require("reddit-package")
const redditimage = require("reddit.images");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const Stopwatch = require('statman-stopwatch');
const stopwatch = new Stopwatch();
const talkedRecently = new Set();
const Canvas = require('canvas');
const disbut = require('discord-buttons');
disbut(client)
const { MessageButton, MessageActionRow } = require("discord-buttons")
const { registerFont } = require('canvas');
registerFont('Roboto/Roboto-Medium.ttf', { family: 'Roboto' });
const express = require('express');
const http = require('http');
const app = express();
const port = 3000;
const uptime = require("uptime-express")
uptime.start(3000)


app.get('/', (req, res) => res.send('yeet.'));

app.listen(port, () => console.log(`scrambly boi listening at http://localhost:${port}`));

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const prefix = "plz "
var counting = 0;
var secretNum = [];
var secretNum2 = [];
var secretNum3 = [];
var words = ['aeheththae', 'rgeea', 'gdgdgd'];
var close = [1, 2];
var close2 = [1, 2];
var close3 = [1, 2];
var started = false;
var started2 = 0;
var started3 = 0;
var jefgn = 1602168320204


// let defend = JSON.parse(fs.readFileSync("./defend.json", "utf8"));
// let support = JSON.parse(fs.readFileSync("./support.json", "utf8"));
let gn = JSON.parse(fs.readFileSync("./gn.json", "utf8"));
let gm = JSON.parse(fs.readFileSync("./gm.json", "utf8"));
let gnn = JSON.parse(fs.readFileSync("./gnn.json", "utf8"));
let gmm = JSON.parse(fs.readFileSync("./gmm.json", "utf8"));
let sniped = JSON.parse(fs.readFileSync("./sniped.json", "utf8"));


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 
  client.user.setActivity(client.guilds.cache.size + " srvs | plz help", {type: 5});

  // let activities = [`${client.guilds.cache.size} servers`, `${client.channels.cache.size} channels`], i = 0;

  // setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]} | plz help`, { type: "WATCHING" }), `10000`)
});

client.on("messageDelete", (messageDelete) => {
  try{
  if(messageDelete && messageDelete.channel.name != undefined){

  if(!db.get(`snipedGuild_${messageDelete.guild.id}`)){
      db.set(`snipedGuild_${messageDelete.guild.id}`, {msgs: [messageDelete.content], pfps: [messageDelete.author.avatarURL()], tag: [messageDelete.author.tag]})
  }
  else{
    if(db.get(`snipedGuild_${messageDelete.guild.id}.msgs`).length > 10){
      db.delete(`snipedGuild_${messageDelete.guild.id}`)
    }

      let text = messageDelete.content
      let re = /fuck|shit|bitch|pussy|cunt|slut|nigg|bich|negro|kys/gi;

      let newStr = text.replace(re, (match) => {
          return `||${match}||`
      });

      db.push(`snipedGuild_${messageDelete.guild.id}.msgs`, newStr)

      try{
        if(!messageDelete.attachments.first()) {
          if(sworCount == 0){
            db.push(`snipedGuild_${messageDelete.guild.id}.msgs`, messageDelete.content)
          }
        }
        else{
          var url = JSON.stringify(messageDelete.attachments.first().url)
          db.push(`snipedGuild_${messageDelete.guild.id}.msgs`, url.substring(1, url.length-1))
        }
      }catch(error){}

      try{
        db.push(`snipedGuild_${messageDelete.guild.id}.pfps`, messageDelete.author.avatarURL())
      }catch(error){}

      try{
        db.push(`snipedGuild_${messageDelete.guild.id}.tag`, messageDelete.author.tag)
      }catch(error){}
  }
  }
  }catch(e){console.log("MESSAGEDELETE EVENT")}
});


client.on("typingStart", function(channel, user){
  try{

  if(db.get(`${user.id}_start_timer`) && channel.id == String(db.get(`${user.id}_start_timer.channelId`)) && db.get(`${user.id}_start_timer.checkTime`)){
    db.set(`${user.id}_start_timer.checkTime`, false)

    let elapsed = ((Date.now() - db.get(`${user.id}_start_timer.start`))/1000).toFixed(2)
    db.push(`${user.id}_all_times`, elapsed)

    let scram = plz3().description
    db.push(`${user.id}_all_scrambles`, scram)

    const embed = new Discord.MessageEmbed()
    .setTitle("Timer for " + user.username)
    .setDescription(scram + "\n\nTime: " + elapsed + " seconds")
    .setColor("BLUE")
    .setThumbnail(user.avatarURL())

    const start = new disbut.MessageButton()
    .setLabel("start timer")
    .setStyle("green")
    .setID(`${user.id}_timer`)

    const new_scram = new disbut.MessageButton()
    .setLabel("last scramble")
    .setStyle("blurple")
    .setID(`${user.id}_last_scramble`)

    const past_times = new disbut.MessageButton()
    .setLabel("times history")
    .setStyle("blurple")
    .setID(`${user.id}_past_times`)
  
    channel.messages.fetch({around: db.get(`${user.id}_start_timer.msgId`), limit: 1})
    .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit({
          buttons: [start, new_scram, past_times],
          embed: embed
        });
    });
  }
  }catch(e){console.log("TYPINGSTART EVENT")}
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount - 1} members!`);
  client.user.setActivity("plz help | " + client.guilds.cache.size + " servers"); 
  client.channels.cache.get("709982756129734667").send(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount - 1} members!`);
  if(guild.name != null){
    client.channels.cache.get("710707752078671913").send(`NEW SERVER: \`${guild.name}\`(id: ${guild.id}). This server has ${guild.memberCount - 1} members <a:jiggly:725923225368002580>`);
  }
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id}). This guild had ${guild.memberCount} members :(`);
  client.user.setActivity("plz help | " + client.guilds.cache.size + " servers"); 
  client.channels.cache.get("709982756129734667").send(`I have been removed from: ${guild.name} (id: ${guild.id}). This guild had ${guild.memberCount} members :(`);
  if (guild.name != null){
    client.channels.cache.get("710707752078671913").send(`Yeeted from: \`${guild.name}\`(id: ${guild.id}). This server had ${guild.memberCount} members <a:cry12:738590696151318561>`);
  }
});

newlist = ["no", "NO", "I SAID NO", "REEEEEEEEEEEEEEEE", "<:REEEEEEE:826244828978217000> <:REEEEEEE:826244828978217000> <:REEEEEEE:826244828978217000>", "<a:peepono:821863744089882715>", "...", ".....", "<:peepoeyes:826247986483822602>", "are you gonna stop", "i will do this forever", "you think i wont?", "dont tempt me bro", "i will actually fight you", "you want this?", "YOU REALLY WANT THIS??", "NO JOKE MAN", "https://tenor.com/view/pepe-the-frog-pepe-shoot-aim-gun-gif-15576765", "there are no more messages, dm <@483818735849963530> for any suggestions for more lines and join the official server https://discord.gg/WushFBN <:peepoyay:693014997756018709>"]

function plz3(){
    var num;
    var package;
    var previous;
    var count = 0;
    var previous2;
    var n=" ";

    while(count<18){

      var package = Math.floor(Math.random() * 6);

      if (previous2!=package){
        if (previous!=package){
          count++;
          var num = Math.floor(Math.random() * 3);

          if(num==0){
              if(package==0) n=n+("L ");
              if(package==1) n=n+("R ");
              if(package==2) n=n+("U ");
              if(package==3) n=n+("D ");
              if(package==4) n=n+("F ");
              if(package==5) n=n+("B ");

          }
          
          
          if(num==1){
              if(package==0) n=n+("L' ");
              if(package==1) n=n+("R' ");
              if(package==2) n=n+("U' ");
              if(package==3) n=n+("D' ");
              if(package==4) n=n+("F' ");
              if(package==5) n=n+("B' ");

          }
          if(num==2){
              if(package==0) n=n+("L2 ");
              if(package==1) n=n+("R2 ");
              if(package==2) n=n+("U2 ");
              if(package==3) n=n+("D2 ");
              if(package==4) n=n+("F2 ");
              if(package==5) n=n+("B2 ");
          }
          previous = package;
          previous2 = previous-1;
        }
      }
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(n)
    .setColor("BLUE")

    return embed
  }


client.on("clickButton", async (button) => {
  if(button.clicker.user){
  try{
  const rock = new disbut.MessageButton()
  .setStyle("blurple")
  .setLabel("rock")
  .setID(`${button.clicker.user.id}_rock`)
  const paper = new disbut.MessageButton()
  .setStyle("blurple")
  .setLabel("paper")
  .setID(`${button.clicker.user.id}_paper`)
  const scissors = new disbut.MessageButton()
  .setStyle("blurple")
  .setLabel("scissors")
  .setID(`${button.clicker.user.id}_scissors`)
  if(button.id === `${button.clicker.user.id}_rock`){
    button.reply.defer()
    var dict = {
      0: "I choose rock <:pepoS:753281368959746188>",
      1: "I choose paper <:pepekekloser:824055843443572776>",
      2: "I choose scissors <:pepeangy:693009494153887774>"
    }
    //button.channel.send(dict[Math.floor(Math.random() * 3)])
    rand = Math.floor(Math.random() * 3)
    if (rand == 1) db.add(`losses_${button.clicker.user.id}`, 1)
    if (rand == 2) db.add(`wins_${button.clicker.user.id}`, 1)
    button.message.edit("Wins: " + db.get(`wins_${button.clicker.user.id}`) + "\nLosses: " + db.get(`losses_${button.clicker.user.id}`) + "\n" + dict[rand])
  }
  if(button.id === `${button.clicker.user.id}_paper`){
    button.reply.defer()
    var dict = {
      0: "I choose rock <:pepeangy:693009494153887774>",
      1: "I choose paper <:pepoS:753281368959746188>",
      2: "I choose scissors <:pepekekloser:824055843443572776>"
    }
    //button.channel.send(dict[Math.floor(Math.random() * 3)])
    rand = Math.floor(Math.random() * 3)
    if (rand == 2) db.add(`losses_${button.clicker.user.id}`, 1)
    if (rand == 0) db.add(`wins_${button.clicker.user.id}`, 1)
    button.message.edit("Wins: " + db.get(`wins_${button.clicker.user.id}`) + "\nLosses: " + db.get(`losses_${button.clicker.user.id}`) + "\n" + dict[rand])
  }
  if(button.id === `${button.clicker.user.id}_scissors`){
    button.reply.defer()
    var dict = {
      0: "I choose rock <:pepekekloser:824055843443572776>",
      1: "I choose paper <:pepeangy:693009494153887774>",
      2: "I choose scissors <:pepoS:753281368959746188>"
    }
    //button.channel.send(dict[Math.floor(Math.random() * 3)])
    rand = Math.floor(Math.random() * 3)
    if (rand == 0) db.add(`losses_${button.clicker.user.id}`, 1)
    if (rand == 1) db.add(`wins_${button.clicker.user.id}`, 1)
    button.message.edit("Wins: " + db.get(`wins_${button.clicker.user.id}`) + "\nLosses: " + db.get(`losses_${button.clicker.user.id}`) + "\n" + dict[rand])
  }

  const scramble = new disbut.MessageButton()
  .setStyle("green")
  .setLabel("press for new scramble")
  .setID(`${button.clicker.user.id}_scramble`)
  if(button.id === `${button.clicker.user.id}_scramble`){
    button.reply.defer()
    button.message.edit({
      buttons: [scramble],
      embed: plz3()
    })
  }

  if (button.id === "no"){
    button.reply.defer()
    button.channel.send(`<@${button.clicker.user.id}> clicked no`)
  }

  if (button.id === "yes"){
    button.reply.defer()
    const embed = new Discord.MessageEmbed()
    .setTitle("ok you pressed yes")
    .setDescription("now subscribe pussy")
    .setColor("GREEN")

    const sub = new disbut.MessageButton()
    .setStyle("url")
    .setLabel("subscribe")
    .setURL("https://www.youtube.com/channel/UCgnfGgfe4IDWOEdrICGDmDA")

    button.message.edit({button: sub, embed: embed})
  }


    var mutelist = []
    button.guild.members.cache.forEach(member => {
    if (member.roles.cache.find(r => r.name === "Muted")){

      if (member.user.tag == button.id){
        button.reply.defer()
        if (!button.clicker.member.hasPermission("KICK_MEMBERS")) {
          return button.clicker.member.send("stfu you dont have perms")
        }
        let mutedRole = button.guild.roles.cache.find(role => role.name === "Muted")
        member.roles.remove(mutedRole).catch(console.error)

        button.message.edit(member.user.tag + " is unmuted")

        // var buttons_list = []
        // for (let i = 0; i<mutelist.length; i++){
        //   let newbutton = new disbut.MessageButton()
        //   .setStyle("blurple")
        //   .setLabel(mutelist[i])
        //   .setID(mutelist[i])
        //   buttons_list.push(newbutton)
        // }
        // const embed = new Discord.MessageEmbed()
        // .setTitle("Who do you want to unmute?")
        // .setColor("BLUE")
        // button.message.edit(member.user.tag + " is unmuted", {
        //   buttons: buttons_list,
        //   embed: embed
        // })
        // mutelist = []
      }
      else{
        mutelist.push(member.user.tag)
      }
    }
  });


  // clicks start button 
  if (button.id === `${button.clicker.user.id}_timer`){
    button.reply.defer()
    db.set(`${button.clicker.user.id}_start_timer`, {start: [Date.now()], checkTime: [true], channelId: [button.message.channel.id], msgId: [button.message.id]})

    let scram = db.get(`${button.clicker.user.id}_all_scrambles`)[db.get(`${button.clicker.user.id}_all_scrambles`).length - 1]

    const embed = new Discord.MessageEmbed()
    .setTitle("Starting timer for " + button.clicker.user.username)
    .setDescription(scram)
    .setImage("https://cdn.discordapp.com/attachments/524029492449116160/852537472419364944/JBdQlPQ_-_Imgur.gif")
    .setColor("GREEN")
    .setFooter("*This gif is not an accurate reflection of your time", button.clicker.user.avatarURL())

    const stop = new disbut.MessageButton()
    .setLabel("press any key or here to stop")
    .setStyle("red")
    .setID(`${button.clicker.user.id}_stop_timer`)
    button.message.edit({button: stop, embed: embed});
  }

  // clicks stop button
  if (button.id === `${button.clicker.user.id}_stop_timer`){
    button.reply.defer()
    db.set(`${button.clicker.user.id}_start_timer.checkTime`, false)

    let elapsed = ((Date.now() - db.get(`${button.clicker.user.id}_start_timer.start`))/1000).toFixed(2)
    db.push(`${button.clicker.user.id}_all_times`, elapsed)
    

    let scram = plz3().description
    db.push(`${button.clicker.user.id}_all_scrambles`, scram)

    const embed = new Discord.MessageEmbed()
    .setTitle("Timer for " + button.clicker.user.username)
    .setDescription(scram + "\n\nTime: " + elapsed + " seconds")
    .setColor("BLUE")
    .setThumbnail(button.clicker.user.avatarURL())

    const start = new disbut.MessageButton()
    .setLabel("start timer")
    .setStyle("green")
    .setID(`${button.clicker.user.id}_timer`)

    const last_scram = new disbut.MessageButton()
    .setLabel("last scramble")
    .setStyle("blurple")
    .setID(`${button.clicker.user.id}_last_scramble`)

    const past_times = new disbut.MessageButton()
    .setLabel("times history")
    .setStyle("blurple")
    .setID(`${button.clicker.user.id}_past_times`)
    
    button.message.edit({
      buttons: [start, last_scram, past_times],
      embed: embed
    })
  }

  //clicks times history
  if (button.id === `${button.clicker.user.id}_past_times`){
    button.reply.defer()

    let history = []
    let total = 0
    let count = 0
    let scrams = db.get(`${button.clicker.user.id}_all_scrambles`)
    let times = db.get(`${button.clicker.user.id}_all_times`)
    for (let i = 0; i<scrams.length-1; i++){
      history.push((i+1) + ". **" + times[i+1] + "**\t" + scrams[i] + "\n")
      count++
      total += Number(times[i+1])
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Times History")
    .setDescription(String(history).replace(/,/g, ""))
    .setColor('BLUE')
    .setThumbnail(button.clicker.user.avatarURL())
    .setFooter("Mean: " + (total/count).toFixed(2) + " seconds")

    const start = new disbut.MessageButton()
    .setLabel("start timer")
    .setStyle("green")
    .setID(`${button.clicker.user.id}_timer`)

    const back = new disbut.MessageButton()
    .setLabel("go back")
    .setStyle("red")
    .setID(`${button.clicker.user.id}_back`)

    button.message.edit({
      buttons: [back],
      embed: embed
    })
  }

  //clicks tip
  if (button.id === `${button.clicker.user.id}_tip`){
    button.reply.defer()

    const embed = new Discord.MessageEmbed()
    .setTitle("Tab Navigation")
    .setDescription("If you are on PC, try the following steps to time your solves more consistently!\n\n1. TAB\n2. UP ARROW\n3. TAB (x4)\n4. Press or hold SPACE to start and stop the timer")
    .setColor('BLUE')
    .setImage("https://cdn.discordapp.com/attachments/524029492449116160/870098289293410395/final_6101f2555955d800f69eba3e_729059.gif")
    .setFooter(button.clicker.user.tag, button.clicker.user.avatarURL())

    const back = new disbut.MessageButton()
    .setLabel("go back")
    .setStyle("red")
    .setID(`${button.clicker.user.id}_back`)

    button.message.edit({
      buttons: [back],
      embed: embed
    })
  }


  //clicks go back
  if (button.id === `${button.clicker.user.id}_back`){
    button.reply.defer()

    const embed = new Discord.MessageEmbed()
    .setTitle("Timer for " + button.clicker.user.username)
    .setDescription(db.get(`${button.clicker.user.id}_all_scrambles`)[db.get(`${button.clicker.user.id}_all_scrambles`).length - 1] + "\n\nTime: " + db.get(`${button.clicker.user.id}_all_times`)[db.get(`${button.clicker.user.id}_all_times`).length - 1] + " seconds")
    .setColor("BLUE")
    .setThumbnail(button.clicker.user.avatarURL())

    const start = new disbut.MessageButton()
    .setLabel("start timer")
    .setStyle("green")
    .setID(`${button.clicker.user.id}_timer`)

    const last_scram = new disbut.MessageButton()
    .setLabel("last scramble")
    .setStyle("blurple")
    .setID(`${button.clicker.user.id}_last_scramble`)

    const past_times = new disbut.MessageButton()
    .setLabel("times history")
    .setStyle("blurple")
    .setID(`${button.clicker.user.id}_past_times`)
    
    button.message.edit({
      buttons: [start, last_scram, past_times],
      embed: embed
    })
  }

  // clicks last scramble
  if (button.id === `${button.clicker.user.id}_last_scramble`){
    button.reply.defer()

    const embed = new Discord.MessageEmbed()
    .setTitle("Timer for " + button.clicker.user.username)
    .setDescription("Last scramble:\n" + db.get(`${button.clicker.user.id}_all_scrambles`)[db.get(`${button.clicker.user.id}_all_scrambles`).length - 2])
    .setColor("BLUE")
    .setThumbnail(button.clicker.user.avatarURL())

    const start = new disbut.MessageButton()
    .setLabel("start timer")
    .setStyle("green")
    .setID(`${button.clicker.user.id}_timer`)

    const next_scram = new disbut.MessageButton()
    .setLabel("next scramble")
    .setStyle("blurple")
    .setID(`${button.clicker.user.id}_next_scramble`)

    const past_times = new disbut.MessageButton()
    .setLabel("times history")
    .setStyle("blurple")
    .setID(`${button.clicker.user.id}_past_times`)

    button.message.edit({
      buttons: [start, next_scram, past_times],
      embed: embed
    })
  }

  //clicks next scramble
  if (button.id === `${button.clicker.user.id}_next_scramble`){
    button.reply.defer()

    const embed = new Discord.MessageEmbed()
    .setTitle("Timer for " + button.clicker.user.username)
    .setDescription(db.get(`${button.clicker.user.id}_all_scrambles`)[db.get(`${button.clicker.user.id}_all_scrambles`).length - 1])
    .setColor("BLUE")
    .setThumbnail(button.clicker.user.avatarURL())

    const start = new disbut.MessageButton()
    .setLabel("start timer")
    .setStyle("green")
    .setID(`${button.clicker.user.id}_timer`)

    const old_scram = new disbut.MessageButton()
    .setLabel("last scramble")
    .setStyle("blurple")
    .setID(`${button.clicker.user.id}_last_scramble`)

    const past_times = new disbut.MessageButton()
    .setLabel("times history")
    .setStyle("blurple")
    .setID(`${button.clicker.user.id}_past_times`)

    button.message.edit({
      buttons: [start, old_scram, past_times],
      embed: embed
    })
  }

  if(button.id == `useless_button_${button.clicker.user.id}`){
    button.reply.defer()
    const touch = new disbut.MessageButton()
    .setStyle("green")
    .setLabel("Press me")
    .setID(`useless_button_${button.clicker.user.id}`)

    button.message.edit(`<@${button.clicker.user.id}>`, null)
    setTimeout(() => {
      button.message.edit("_ _", {buttons: [touch]})
    }, 1000);
  }
  }catch(e){console.log(e)}
  }
});

//==================================================================
  client.on("message", async message => {
    try{
    if(message.author && message.channel && message.guild){
    if(message.author.id === client.user.id) return; //i added it bro bro i added reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    // ok i think i am bad
    // respond to dms
    if (message.channel.name == undefined) {
      try{
        if(db.get(`respond_${message.author.id}`) >= newlist.length){
          db.set(`respond_${message.author.id}`, 0)
        }
        db.add(`respond_${message.author.id}`, 1)
        return message.channel.send(newlist[db.get(`respond_${message.author.id}`) - 1])
      }
      catch(e){console.log("DM ERROR")}
    }
//=============================================================

  

  if (message.content){
    list = ['horny','ass','tit','tits','boob','pussy','boobs','creampie','feet','cum','hentai','bdsm','orgy','anal','futa','trap','cbt','bbc','loli','lewd','lewds','nudes','nude','nsfw','porn','cock']
    for (let i = 0; i < list.length;i++){
      if (message.content.toLowerCase() == ("plz " + list[i])){
        db.add(`horny`, 1)
        let nothing = db.get(`nothing`)

        horny = ['https://cdn.discordapp.com/attachments/681177599489212424/739579182656389173/FB_IMG_1596065980169.jpg','https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755','https://media.discordapp.net/attachments/681177599489212424/748051347437387796/IMG_20200822_101503.jpg?width=418&height=664','https://cdn.discordapp.com/attachments/524029492449116160/748628432837148793/20200827_130437.jpg','https://cdn.discordapp.com/attachments/524029492449116160/748612204311347310/20200825_171240.jpg','https://cdn.discordapp.com/attachments/524029492449116160/748713455531458600/bro-stop-being-4a913008ba.png','https://media.discordapp.net/attachments/681657479691632640/749055383586209892/20200828_195830.jpg','https://media.discordapp.net/attachments/524029492449116160/749424489716121793/20200829_201733.png','https://cdn.discordapp.com/attachments/682559765842493450/750380562757189692/always_horny.jpg','https://cdn.discordapp.com/attachments/681177599489212424/752621231752085514/IMG_20200908_013754.jpg', 'https://cdn.discordapp.com/attachments/524029492449116160/783737159400030258/IMG_20201122_101619.png', 'https://media.discordapp.net/attachments/681178315255709699/755549134366310430/image4.png','https://cdn.discordapp.com/attachments/681178315255709699/755854795394384016/20200710_230119.png','https://cdn.discordapp.com/attachments/727389932439470151/758370840538251275/20200901_080630.jpg','https://tenor.com/view/hololive-kiryu-coco-horny-point-vtuber-gif-17764367','https://cdn.discordapp.com/attachments/682559765842493450/765610087879671829/20201012_071915.jpg','https://cdn.discordapp.com/attachments/681178315255709699/765940283439185990/silence_horny_teen.jpg','https://media.discordapp.net/attachments/681178315255709699/766651605378138122/c0279e8.png?width=763&height=665','https://media.discordapp.net/attachments/681177599489212424/769078497674133594/unknown.png?width=683&height=664', 'https://cdn.discordapp.com/attachments/524029492449116160/785992883127844864/20201208_113542.png', 'https://media.discordapp.net/attachments/717843271627440168/784030343593721876/51b6aa5.gif','https://cdn.discordapp.com/attachments/524029492449116160/812017974121857055/unknown.png']

        if(nothing < horny.length-1) db.add(`nothing`, 1)
        else db.set(`nothing`, 0)

        message.channel.send(horny[nothing])
      }
    }
  }

  if(!message.author.bot && message.guild.id == 681177598931238920){
    if(message.attachments.first()){
      try{
        var url = JSON.stringify(message.attachments.first().url)

        client.channels.cache.get("747617414606225519").send("From " + message.author.tag + ": " + url.substring(1, url.length-1))
      }catch(error){console.log(error)}
    }
  }

  // if(message.content.toLowerCase() === "plz time"){
  //   let scram = plz3()
  //   db.set(`${message.author.id}_all_times`, [0])
  //   db.set(`${message.author.id}_all_scrambles`, [scram.description])
  //   const embed = new Discord.MessageEmbed()
  //   .setTitle("Timer for " + message.author.username)
  //   .setDescription(scram.description)
  //   .setColor("BLUE")
  //   .setThumbnail(message.author.avatarURL())

  //   const start = new disbut.MessageButton()
  //   .setStyle("green")
  //   .setLabel("start timer")
  //   .setID(`${message.author.id}_timer`)

  //   message.channel.send({
  //     buttons: [start],
  //     embed: embed
  //   })
  // }

  if(message.content.toLowerCase() == "plz useless"){
    const touch = new disbut.MessageButton()
    .setStyle("green")
    .setLabel("Press me")
    .setID(`useless_button_${message.author.id}`)

    message.channel.send("_ _", {buttons: [touch]})
  }

    //________________________________________________
    //add to racer group
    // dan, I commented this out bc it was sending messages on each message idk
      if(db.get(`numRacers_${message.guild.id}`) > 0 && message.channel.id == 681266490892091453){
        var go = false;

        for(var i = 0; i < db.get(`numRacers_${message.guild.id}`); i++){
          if(message.author.username == db.get(`racers_${message.guild.id}`)[i]){
            go = true;
            break
          }
        }
        if(go && (!isNaN(message.content) || message.content.toLowerCase().startsWith("dnf") || message.content.toLowerCase().startsWith("dns"))){
          let done = false

          for(var i = 0; i < db.get(`numRacers_${message.guild.id}`); i++){
            if(message.author.username == db.get(`racers_${message.guild.id}`)[i]){
              //arr.splice(i, 1)
              done = true
              db.subtract(`yeeet_${message.guild.id}`, 1)
              break
            }
          }
          if(!done){
            message.channel.send("youve already submitted your time silly")
          }
          if(db.get(`yeeet_${message.guild.id}`) == 0){
            plz3();
            db.set(`yeeet_${message.guild.id}`, db.get(`numRacers_${message.guild.id}`))
          }
        }
      }

    //________________________________________________
    //only for sb and test server (private servers)
    if(message.guild.id == 524028960565362728 || message.guild.id == 681177598931238920 || message.guild.id == 528046335551864832 || message.guild.id == 700411795223085146 || message.guild.id == 778068679321452614){


      //_______________________________________________________________________
      //#guess-the-number

      if(!isNaN(message.content)){
        if(message.channel.id == 705557728189218958){
          if(message.content > 300 || message.content < 0){
            message.channel.send("The number is between 1 and 300");
          }
          else{
            if(!started){
              client.channels.cache.get("705557728189218958").send("starting timer");
              stopwatch.start();
              started = true;
              do{
                var randNum = (Math.floor(Math.random() * 300)+1);
              }while(randNum == message.content);
              secretNum.push(randNum);
            }
            
            if(started){
              var time = (stopwatch.read() / 1000).toFixed(2);
              if(time > 300){
                stopwatch.stop();
                started = false;
                secretNum.shift();
                stopwatch.reset();
                return message.channel.send("Time limit of 5 minutes exceeded")
              }
              if(message.content == secretNum[0]){
                stopwatch.stop();
                started = false;
                let thetime = "";
                if(time>60) thetime = Math.round(time/60) + " minutes and " + Math.round(time%60) + " seconds"
                else thetime = time + " seconds"

                message.reply("POGGERS, THE NUMBER WAS " + message.content + "\nTime: " + thetime)
                client.channels.cache.get("705537285877268520").send("THE NUMBER WAS " + secretNum);
                secretNum.shift();
                stopwatch.reset();
              }
              else{
                close.push(message.content);
                close.shift();
                if(Math.abs(close[0]-secretNum) > Math.abs(close[1]-secretNum)){
                  message.channel.send(message.content + " is closer to the secret number than " + close[0]);
                  client.channels.cache.get("705537285877268520").send(message.content + " is closer than " + close[0]);
                }
                else if(close[0] == message.content){
                  message.channel.send(message.content + " is " + close[0]);
                }
                else{
                  message.channel.send(message.content + " is further from the secret number than " + close[0]);
                  client.channels.cache.get("705537285877268520").send(message.content + " is further than " + close[0]);
                }
              }
            }
          }
        }
      }

      //________________________________________________
      //giveaway guessing 
      if(!isNaN(message.content)){
        if(message.channel.id == 720430454670360617){
          if(message.content > 1000 || message.content < 0){
            return message.channel.send("The number is between 1 and 1000");
          }
          if(started2 == 0){
            do{
              var randNum = (Math.floor(Math.random() * 1000)+1);
            }while(randNum == message.content);
            secretNum2.push(randNum);
            started2++;
          }
          if(started2 == 1){
            if(message.content == secretNum2[0]){
              message.reply("YOU WON A $10 CUBICLE GIFTCARD, THE NUMBER WAS " + message.content + " <@297778817332674560>")
              secretNum2.shift();
              started2--;
            }
            else{
              close2.push(message.content);
              close2.shift();
              if(Math.abs(close2[0]-secretNum2) > Math.abs(close2[1]-secretNum2)){
                message.channel.send(message.content + " is closer to the secret number than " + close2[0]);
                client.channels.cache.get("720439805137125538").send(message.content + " is closer than " + close2[0]);
              }
              else if(close2[0] == message.content){
                message.channel.send(message.content + " is " + close2[0]);
              }
              else{
                message.channel.send(message.content + " is further from the secret number than " + close2[0]);
                client.channels.cache.get("720439805137125538").send(message.content + " is further than " + close2[0]);
              }
            }
          }
        }
      }

      //_______________________________________
      //replicating chat

      channelList = ['762781425338417152','762782528498171924','762783150740209725','762785009907007528']
      sbchannelList = ['731207362253160529','681177599489212424','724499961307332699','681180775936294932']

      for (let i = 0; i < sbchannelList.length; i++){
        if(message.channel.id == sbchannelList[i] && db.get(`replicateChat_${channelList[i]}`) == 1){
          const embed = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setDescription(message.content)
              .setFooter(message.author.tag, message.author.avatarURL())
          client.channels.cache.get(channelList[i]).send(embed);
        }
      }

      for (let i = 0; i< channelList.length; i++){
        if (message.channel.id == channelList[i]){
          if (message.content == "start"){
            db.set(`replicateChat_${message.channel.id}`, 1)
            message.channel.send("Will **start** replicating now")
          }
          else if (message.content == "stop"){
            db.set(`replicateChat_${message.channel.id}`, 0)
            message.channel.send("Will **stop** replicating")
          }
          else{
            client.channels.cache.get(sbchannelList[i]).send(message.content);
          }
        }
      }

      


      //________________________________________________
      //joining chains actually works per channel now
      if(message.content.toLowerCase().indexOf("plz") != 0 && !message.content.includes("@") && message.channel.id != 829843825417125908){
          if(!db.get(`chains_${message.channel.id}`)){
              db.set(`chains_${message.channel.id}`, [message.content])
          }
          else{
              db.push(`chains_${message.channel.id}`, message.content)
              if(db.get(`chains_${message.channel.id}`).length > 3){
                  arr = db.get(`chains_${message.channel.id}`)
                  arr.shift()
                  db.set(`chains_${message.channel.id}`, arr)

                  if (arr[0] == arr[1] && arr[1] == arr[2]){
                      message.channel.send(message.content)
                      db.set(`chains_${message.channel.id}`, [message.content])
                  }
              }
          }
      }

      //finding last channel person talked in
      db.set(`lastfound_guild_${message.author.id}`, message.guild.id)
      db.set(`lastfound_channel_${message.author.id}`, message.channel.id)
      db.set(`lastfound_msg_${message.author.id}`, message.id)
      
      //________________________________________________
      //gn gm
      const gngm = ['<:pepeheart:693029390753202206>', '<:peepoflushed:708107710259789904>', ':flushed:', '<:uwublush:693022337087438868>', '<:whyleave:693022303558303794>', '<:peepoyay:693014997756018709>', '<:pepeshoot:756689633538080842>', '<:pepovamp:858568265668231200>', '<:DIDSOMEONESAYCOCK:779914992891199528>', '<:boolin:803026002406146088>'];
      
      if (message.content.toLowerCase() === 'gn' || message.content.toLowerCase() === 'good night' || message.content.toLowerCase() === 'goodnight') {
        const gnMsgs = ['good night', 'sweet dreams', 'bye secksy', 'sleep tight'];
        const randgn = gnMsgs[Math.floor(Math.random() * gnMsgs.length)];
        const randgn2 = gngm[Math.floor(Math.random() * gngm.length)];

        if(message.guild.id != 681177598931238920 || message.channel.id == 681177599489212424){
          message.channel.send(randgn);
          message.channel.send(randgn2);
        }

        gnn[message.author.id] = {
          start: message.createdTimestamp,
          check: true
        };
        fs.writeFile("./gnn.json", JSON.stringify(gnn), (err) => {
          if (err) console.error(err)
        });
      }

      if (message.content.toLowerCase() === 'ga' || message.content.toLowerCase() === 'good afternoon' || message.content.toLowerCase() === 'goodafternoon') {
        const gaMsgs = ['good afternoon', 'howdy', 'sup gamer'];
        const randga = gaMsgs[Math.floor(Math.random() * gaMsgs.length)];
        const randga2 = gngm[Math.floor(Math.random() * gngm.length)];

        if(message.guild.id != 681177598931238920 || message.channel.id == 681177599489212424){
          message.channel.send(randga);
          message.channel.send(randga2);
        }
      }

      if (message.content.toLowerCase() === 'gm' || message.content.toLowerCase() === 'good morning' || message.content.toLowerCase() === 'goodmorning') {
        const gmMsgs = ['good morning', 'morning sexy', 'did you sleep well?', 'hey baby'];
        const randgm  = gmMsgs[Math.floor(Math.random() * gmMsgs.length)];
        const randgn2 = gngm[Math.floor(Math.random() * gngm.length)];

        if(message.guild.id != 681177598931238920 || message.channel.id == 681177599489212424){
          message.channel.send(randgm);
          message.channel.send(randgn2);
        }

        gmm[message.author.id] = {
          stop: message.createdTimestamp
        };
        fs.writeFile("./gmm.json", JSON.stringify(gmm), (err) => {
          if (err) console.error(err)
        });
        if(gnn[message.author.id].check){
          var sleeptime = (gmm[message.author.id].stop - gnn[message.author.id].start)/1000;

          if(!db.get(`gngmpb_${message.author.id}`) || sleeptime < db.get(`gngmpb_${message.author.id}`)){
            let arr = db.get(`userlb_${message.guild.id}`)
            let arr2 = db.get(`guesslb_${message.guild.id}`)
            for(var i = 0; i < db.get(`userlb_${message.guild.id}`).length; i++){
              if(message.author.tag == db.get(`userlb_${message.guild.id}`)[i] || db.get(`guesslb_${message.guild.id}`)[i] < 0){
                arr.splice(i,1)
                arr2.splice(i,1)
                db.set(`userlb_${message.guild.id}`, arr)
                db.set(`guesslb_${message.guild.id}`, arr2)
              }
            }
            db.set(`gngmpb_${message.author.id}`, sleeptime)
            message.channel.send("PB: " + sleeptime);
            db.push(`guesslb_${message.guild.id}`, sleeptime)
            db.push(`userlb_${message.guild.id}`, message.author.tag)
          }

          if(sleeptime>0 && sleeptime<60) message.channel.send("<@"+message.author.id + "> slept for " + sleeptime + " seconds");

          else if(sleeptime >= 60 && sleeptime < 3600) message.channel.send("<@"+message.author.id + "> slept for " + Math.round(sleeptime/60) + " minutes and " + Math.round(sleeptime%60) + " seconds");

          else if(sleeptime >= 3600 && sleeptime < 86400) message.channel.send("<@"+message.author.id + "> slept for " + Math.round(sleeptime/3600) + " hours and " + Math.round(((sleeptime)%3600)/60) + " minutes");

          else if(sleeptime >= 86400) message.channel.send("holy shit <@"+message.author.id + "> slept for " + Math.round(sleeptime/86400) + " days and " + Math.round((sleeptime%86400)/3600) + " hours");

          else{
            return message.channel.send("this message shouldnt be printed unless bad code")
          }

          gnn[message.author.id] = {
            start: message.createdTimestamp,
            check: false
          };
          fs.writeFile("./gnn.json", JSON.stringify(gnn), (err) => {
            if (err) console.error(err)
          });
        }
      }

      if (message.content.toLowerCase() === 'plz track sleep' || message.content.toLowerCase() === 'plz tracksleep'){
        try{
          var sleeptime = (message.createdTimestamp - gnn[message.author.id].start)/1000;

          if(sleeptime>0 && sleeptime<60) message.channel.send("<@"+message.author.id + "> slept for " + sleeptime + " seconds");

          else if(sleeptime >= 60 && sleeptime < 3600) message.channel.send("<@"+message.author.id + "> slept for " + Math.round(sleeptime/60) + " minutes and " + Math.round(sleeptime%60) + " seconds");

          else if(sleeptime >= 3600 && sleeptime < 86400) message.channel.send("<@"+message.author.id + "> slept for " + Math.round(sleeptime/3600) + " hours and " + Math.round(((sleeptime)%3600)/60) + " minutes");

          else if(sleeptime >= 86400) message.channel.send("<@"+message.author.id + "> slept for " + Math.round(sleeptime/86400) + " days and " + Math.round((sleeptime%86400)/3600) + " hours");

          else{
            return message.channel.send("this message shouldnt be printed unless bad code")
          }
        }
        catch(e){message.channel.send("something didnt work")}
      }
      

      //________________________________________________
      //auto assign roles based on mee6 lvl up msg
      if(message.author.id == 159985870458322944 && message.content.indexOf(", you level ") != -1) {
        let member = message.mentions.members.first();
        let roleFive = message.guild.roles.cache.find(role => role.name === "Active");
        let roleTen = message.guild.roles.cache.find(role => role.name === "Very active");
        let roleFifteen = message.guild.roles.cache.find(role => role.name === "Extremely active");
        let roleTwenty = message.guild.roles.cache.find(role => role.name === "Super active");
        let roleTwentyfive = message.guild.roles.cache.find(role => role.name === "Seriously active");
        let roleThirty = message.guild.roles.cache.find(role => role.name === "Cringely active");
        let roleThirtyfive = message.guild.roles.cache.find(role => role.name === "Radio active");
        let roleForty = message.guild.roles.cache.find(role => role.name === "Dangerously active");
        let roleFortyfive = message.guild.roles.cache.find(role => role.name === "Suspiciously active");
        let roleFifty = message.guild.roles.cache.find(role => role.name === "Hyper active");
        let roleFiftyfive = message.guild.roles.cache.find(role => role.name === "Extensively active");
        let roleSeventy = message.guild.roles.cache.find(role => role.name === "attrACTIVE")

        if(message.content.indexOf(", you level 5 now") != -1) {
          member.roles.add(roleFive).catch(console.error);
        }
        else if(message.content.indexOf(", you level 10 now") != -1) {
          member.roles.add(roleTen).catch(console.error);
        }
        else if(message.content.indexOf(", you level 15 now") != -1) {
          member.roles.add(roleFifteen).catch(console.error);
        }
        else if(message.content.indexOf(", you level 20 now") != -1) {
          member.roles.add(roleTwenty).catch(console.error);
        }
        else if(message.content.indexOf(", you level 25 now") != -1) {
          member.roles.add(roleTwentyfive).catch(console.error);
        }
        else if(message.content.indexOf(", you level 30 now") != -1) {
          member.roles.add(roleThirty).catch(console.error);
        }
        else if(message.content.indexOf(", you level 35 now") != -1) {
          member.roles.add(roleThirtyfive).catch(console.error);
        }
        else if(message.content.indexOf(", you level 40 now") != -1) {
          member.roles.add(roleForty).catch(console.error);
        }
        else if(message.content.indexOf(", you level 45 now") != -1) {
          member.roles.add(roleFortyfive).catch(console.error);
        }
        else if(message.content.indexOf(", you level 50 now") != -1) {
          member.roles.add(roleFifty).catch(console.error);
        }
        else if(message.content.indexOf(", you level 55 now") != -1) {
          member.roles.add(roleFiftyfive).catch(console.error);
        }
        else if(message.content.indexOf(", you level 70 now") != -1) {
          member.roles.add(roleSeventy).catch(console.error)
        }
      }

      //________________________________________________
      //random shit
      if(message.content.toLowerCase() === "plz tell me who asked") message.channel.send("nobody");
      if(message.content.toLowerCase() === "whats crack a lackin its ya boy jefferson") message.channel.send("ok buddy")
      

      if (message.content.toLowerCase().startsWith("plz mute") ){
        if (!message.member.hasPermission("KICK_MEMBERS")) {
          return message.reply("you dont have perms <:cant:796445448696889404>");
        }
        let member = message.mentions.members.first()
        if (!member){
          return message.reply("who fuck am i muting <:REE:758898819101622282>")
        }
        // let adminRole = message.guild.roles.cache.find("name", "Dev");
        // let modRole = message.guild.roles.cache.find("name", "Moderator");
        if(member.id == 456375269020663818){
          return message.channel.send("<:thinkpika:853412406730424343>")
        }
        if(member.roles.cache.find(r => r.name === "Moderator") && message.author.id != member.id){
          return message.reply("this person is a mod you fucking idiot <:jeff:728468163972562985>")
        }
        if (member.roles.cache.find(r => r.name === "Dev") && message.author.id != member.id){
          return message.reply("this is an admin <:peporead:766444039113146399>")
        }
        if (message.author.id == member.id){
          message.channel.send("<:peeposus:800815775538479115>")
        }
        let mutedRole = message.guild.roles.cache.find(role => role.name === "Muted")
        member.roles.add(mutedRole).catch(console.error)
        message.channel.send("<@"+member +"> has been muted")
      }

      if (message.content.toLowerCase().startsWith("plz unmute")){
        var list = []
        message.guild.members.cache.forEach(member => {
          if (member.roles.cache.find(r => r.name === "Muted")){
            list.push(member.user.tag)
          }
        });

        var buttons_list = []
        for (let i = 0; i<list.length; i++){
          let newbutton = new disbut.MessageButton()
          .setStyle("blurple")
          .setLabel(list[i])
          .setID(list[i])
          buttons_list.push(newbutton)
        }
        const embed = new Discord.MessageEmbed()
        .setTitle("Who do you want to unmute?")
        .setColor("BLUE")

        if (list.length == 0){
          message.channel.send("nobody is muted")
        }
        else{
          message.channel.send({
            buttons: buttons_list,
            embed: embed
          })
        }
      }

    }
    }
    }catch(e){console.log("FIRSTMESSAGE EVENT")}

});

//=========================================================================================


client.on("message", async message => {
  try{
  if(message.author && message.channel && message.guild){
  if(message.author.id === client.user.id) return;
  if (message.channel.id === 1) return;

  if (db.get(`commands_${message.guild.id}`) && db.get(`commands_${message.guild.id}`).includes(message.content.toLowerCase())) {
        let index = db.get(`commands_${message.guild.id}`).indexOf(message.content.toLowerCase())
        message.channel.send(db.get(`response_${message.guild.id}`)[index])
    }

  if(!(message.content.toLowerCase().indexOf("plz thog") != -1) && !(message.content.indexOf("<") != -1)){
    db.set(`lastMessage_${message.channel.id}`, message.content)
    db.set(`lastPfp_${message.channel.id}`, message.author.displayAvatarURL({ format: 'png' }))
  }

  const applyText = (canvas, text) => {
      const ctx = canvas.getContext('2d');
      let fontSize = 70;
      do {
        ctx.font = `${fontSize -= 1}px Roboto`;
      } while (ctx.measureText(text).width > canvas.width - 300);
      return ctx.font;
  };

  // if(message.content.toLowerCase() == "plz thog"){
  //   if (talkedRecently.has(message.author.id)) {
  //       message.reply("Wait one hour plz");
  //   } else {
  //       const canvas = Canvas.createCanvas(900, 900);
  //       const ctx = canvas.getContext('2d');

  //       // Since the image takes time to load, you should await it
  //       const background = await Canvas.loadImage('./thog.png');
  //       // This uses the canvas dimensions to stretch the image onto the entire canvas
  //       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  //       ctx.strokeStyle = '#74037b';
  //       ctx.strokeRect(0, 0, canvas.width, canvas.height);

  //       // Assign the decided font to the canvas
  //       ctx.font = applyText(canvas, db.get(`lastMessage_${message.channel.id}`));
  //       ctx.fillStyle = '#000000';
  //       ctx.fillText(db.get(`lastMessage_${message.channel.id}`), canvas.width / 3.5, canvas.height / 6);

  //       ctx.beginPath();
  //       ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  //       ctx.closePath();
  //       ctx.clip();

  //       // const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
  //       const avatar = await Canvas.loadImage(db.get(`lastPfp_${message.channel.id}`))
        
  //       ctx.drawImage(avatar, 15, 15, 200, 200);
  //       // Use helpful Attachment class structure to process the file for you
  //       const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'thog.png');

  //       message.channel.send(attachment);
        
  //       talkedRecently.add(message.author.id);
  //       setTimeout(() => {
  //         // Removes the user from the set after a minute
  //         talkedRecently.delete(message.author.id);
  //       }, 3600000);
  //   }
  // }

  if(message.content.toLowerCase().indexOf("plz v ") != -1){
    var dict = {
        "W": "B",
        "I": "R",
        "E": "L'",
        "O": "B'",
        "S": "D",
        "D": "L",
        "F": "U'",
        "G": "F'",
        "H": "F",
        "J": "U",
        "K": "R'",
        "L": "D'",
        "X": "M'",
        "B": "x'",
        "N": "x'",
        "Y": "x",
        ";": "y",
        "A": "y'",
        "T": "x",
        "Y": "x",
        "U": "r",
        "M": "r'",
        "P": "z",
        "Q": "z'",
        "5": "M",
        "6": "M",
        ".": "M'",
        ",": "u",
        "/": "d'",
        "Z": "d",
        "R": "l'",
        "C": "u'",
        "V": "l"
    };
    let start = message.content.indexOf("plz v ")
    let text = message.content.substring(start + 6, message.content.length)
    if (message.content == "plz v"){
      return message.channel.send("nothing to convert \<:peeporead:782679702471966752>")
    }
    let temp = []
    bad = false
    let temp2 = ""
    for(let i = 0; i < text.length; i++){
      if(text[i] != " "){
        temp2 += text[i]
      }
    }
    text = temp2
    for(let i = 0; i < text.length; i++){
      if (dict[text[i].toUpperCase()] == null){
        bad = true
      }
      temp.push(dict[text[i].toUpperCase()] + " ")
    }
    if (bad){
      const help = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .addField('Not a valid string', '[refer to this table](https://media.discordapp.net/attachments/681177599489212424/788861418471948308/image0.png)', true)
      return message.channel.send(help);
    }
    else{
      let prev = "ff"
      let newnote = []
      let here = false
      let count = 1
      let skip = false
      for(let i = 0; i < temp.length; i++){
        // temp = ["R ", "R ", "R "] => R3
        if (prev == temp[i]){
          skip = true
          count ++
          here = true
          if(count <= 4 || count % 4 != 1){
            newnote.pop()
          }
        }
        if (here){
          if(count % 4 != 0){
            if (count % 4 == 1){
              if(prev[1] == "'"){
                newnote.push(prev[0] + "' ")
              }
              else{
                newnote.push(prev[0] + " ")
              }
            }
            else{
              if(prev[1] == "'"){
                if(count % 4 == 3){
                  newnote.push(prev[0] + " ")
                }
                else{
                  newnote.push(prev[0] + count % 4 + "' ")
                }
              }
              else{
                if(count % 4 == 3){
                  newnote.push(prev[0] + "' ")
                }
                else{
                  newnote.push(prev[0] + count % 4 + " ")
                }
              }
            }
          }
        }
        else{
          newnote.push(temp[i])
          count = 1
          here = false
          skip = false
        }
        if (!skip){
          prev = temp[i]
        }
        here = false
      }
      final = ""
      for(let i = 0; i < newnote.length; i++){
        final += newnote[i]
      }
      message.channel.send(final)
    }
  }
  const emote_ids = ['693009494153887774', '693009687406182422', '693009829291229225', '693009903606038548', '693010009973587978', '693010333371072532', '693010394045743125', '693013769307029514', '693014681903956008', '693014724551508044', '693014841614663700', '693014877568106507', '693014915287613490', '693014997756018709', '693015038017142848', '693015074255667221', '693015336194277386', '693015602335580300', '693015674490060822', '693015758493581342', '693022017355513939', '693022072384782336', '693022104370675713', '693022138113851433', '693022167457333278', '693022227955712050', '693022303558303794', '693022337087438868', '693025345569554463', '693029358318911549', '693029390753202206', '697969060444635166', '699925614563426374', '700584553064038402', '708107710259789904', '726295409219338280', '727742438210273322', '728468163972562985', '728469597111713843', '731788220244819999', '745502506380951582', '747178497042022532', '747588832060243998', '749906799817261078', '751312812760104990', '752405809245192311', '753271594842980442', '753279557506826360', '753280676870226034', '753280701348053099', '753281368959746188', '753281584983179396', '753281975472881777', '753291963742027776', '753326529190166576', '753386308529029271', '754105414303481856', '754440785579212881', '754894303263719525', '755481918266540074', '755881772167987231', '755976650910466089',
    '756613116212805802', '756689633538080842', '757635972514185349', '757662928462676038', '758329342156865567', '758340290268102677', '758340579095740497', '758340716413059102', '758341153979629648', '758551869823385670', '758821440241270825', '758898819101622282', '760686300596142130', '766444039113146399', '766725701193039924', '771949862186778684', '772514536964096042', '774024637754376243', '775567100440870962', '778469015597219871', '779914992891199528', '782679702471966752', '787015483740258310', '793774281950887946', '796445448696889404', '798614014024351794', '799043630102872064', '800778767991046154', '800815775538479115', '800954114426142738', '802748542719885352', '802767300776034354', '802768113539874816', '803026002406146088', '803841454408990721', '804407259399454740', '808718426750844988', '809583946090020934', '811833641361604639', '814187863226187776', '818525447347503154', '821471662922268703', '821521040848846868', '821523509372911627', '821523560971108392', '821523579627503646', '821523731498401833', '821525556625276958', '821525973547614248', '821538446341701672', '821539628556353546', '821539639928160337', '821539672546345001', '821539688606859325', '821540112940269669', '821789578016718898', '821789636720066610', '821847912908324884', '821195175358758943', '821863093877211226', '821876053030862889', '821876080864264202', '731389913995542558', '821876107292573708', '725923225368002580', '821876133896388638', '821876146550603826', '821876162057863208', '821876178830360631', '821876197453594675', '799358581220442164', '799358685637771264', '821876244000800769', '821876275760726048', '821876310338306059', '821876334925185075', '821876363002642482', '821876373185495040', '821876387932798996', '821876399538962433', '821876411114455042', '821876422217564183', '821876432254664714', '821876441331269664', '821876451627499521', '822144934928318475', '733054261859975260', '821171821448527872', '823385765517590559', '823995495776780298', '824055843443572776', '824069672353267712', '824806346645831690', '824806386705760288', '825116369904861214', '825157518363328512', '825161178929168415', '825833723932311583', '825997674603348010', '826247986483822602', '826519795016007690', '826536677014896670', '826838828752699483', '826949153220460544', '826961647947481139',
    '826972742448447508', '827221887746441266', '827228925653418004', '827422455501029437', '828081938757582878', '829943863040671745', '831201854950998097', '831213729571274752', '831569928682340442', '831657654497443850', '832301413459427408', '832334451383205918', '834190578681774110', '834190652383166535', '834190813843947541', '834191888490954752', '834192009194897448', '835612280095768648', '835975503377858570', '836330287121563729', '836330629221056584', '836673311768838185', '837545338876854373', '839216233982984223', '843217726390403104', '852967640187797574', '852969416294924289', '852969485132234782', '853015507203522640', '853133006519926804', '847291094144516119', '853346709059665941', '847311234478112788', '853412009093365760', '853412406730424343', '853438288912187422', '853438769180049408', '853438810816512000', '853439156943192074', '853446317211779082', '853451461291147265', '853451613200318505', '853468796545925120', '853469189558108161', '853469251986128906', '853470001037180959', '853482545437999105', '853483168740802561', '853483282130141224', '853483570391285770', '853483905549991977', '853484473018351616', '853484543331401774', '853484629080014869', '853484756514635836', '853484876657721385', '853485236015595581', '853485386730438677', '853485880701747221', '853486518257844284', '853488298626252820', '853488380910501898', '853488472886476800', '853488573280944179', '853488914832293888', '853489112791384084', '853489303800119296', '853489876413972501', '853489999257141248', '853495850663804938', '853496154897907712', '841528558522073139', '853498683123302431', '853733759795200080', '853749279213879336', '853751959721869363', '853770921637445632', '853790155025547314', '853790192984784896', '853806823747878933', '853811431275364352', '853976609810677760', '854033738391879740', '854098331981709402', '854099039675088936', '854102105929416725', '854145499124858890', '854156157655973968', '854156277944287252', '854157064468824114', '854157102183743498', '854157178452967443', '854157482133553162', '854157597984686081', '854157642595434536', '854157680532652042', '854157844148387851', '854157878255812649', '854157899949015042', '854158042786168843', '854158143931285565', '854158164327923733', '854158487281598475', '854158533860130837', '824857716966817813',
    '738481242206371853', '854158831209938944', '854158876283109416', '854158895977857054', '854159231821414442', '854159386674331688', '854159415505715200', '854159441594941440', '854159520652984340', '854160128194379786', '854162340270047232', '854162455991550002', '854163945652486164', '854194561777270825', '763403025930256395', '854211906680258580', '854212049075699714', '854212713696985098', '854212963052814336', '854213001452322836', '854213025509670922', '854213049073532959', '854213137334796309', '854225447377567766', '854225543963475968', '854372867420586044', '854376042584342558', '854428298037166141', '854445290991255572', '854475848638660688', '854532528148185128', '854886764552388638', '854886848912424990', '854889545032269876', '855283388814721035', '855480933327437844', '855588366246084608', '855611133368205342', '855612456193228867', '856026236618145813', '856038962816352286', '856039007267061760', '856044170099163156', '856064365006553098', '856220599629512755', '856233678224621598', '856234853083119620', '856236729094373396', '856375192066326558', '856380068061773864', '856577591632461854', '856586513827364914', '856588758814949386', '856608802287779860', '856622833248239676', '856635741739417630', '856639282922913802', '856641640256110623', '856684901574901760', '856728662203301888', '856764983090216990', '857029422019248138', '857086523879063602', '857110653592141844', '857115166105403404', '857115240013889546', '857286984154087484', '857319179745099777', '857351518787993610', '857414393759662090', '857432645880381475', '857703800580472842', '857719139803070534', '857770505808248832', '857845250592735242', '857845360008626176', '857845445618040842', '857855686440648704', '857856128263258143', '858099820924764190', '858184992521191484', '858445665780105226', '858495514802388992', '858495608121720833', '858516311029448715', '858568263666237480', '858568265668231200', '858570726873104394', '858573610960551956', '858813939180765194', '858816167904542740', '858929206637494302', '858948956574973963', '859519364940300290', '859519544838455346', '859595944995455017', '859616958986453004', '859635866229800960', '859640732221177874', '859946580365541376', '859992513858109491', '859994527048663040', '860166182703595521', '860237474839003167', '860292349903765555',
    '860349009708711947', '860376042820730901', '860378825011626034', '860379165080289330', '860379311260303390', '860380395698520076', '860382490849705985', '860682092513591326', '860682367377866773', '860745156700143616', '860752871619297290', '860992829790224394', '861365800753561640', '861507291584004117', '861643882425090048', '861643957305999360', '861663726838087720', '861727822560493589', '861994578704597012', '862159716448469003', '862427094013181952', '862488483334586380', '862539459576463371', '862539621690638356', '862711943420837898', '863077186196865074', '863287658168057856', '864209872458350592', '864219970636218389', '864366568313454603', '864649398062809099']

  const emt = message.content.match(/<:.+?:\d+>/g)
  const aemt = message.content.match(/<a:.+?:\d+>/g)

  if(message.guild.id == 681177598931238920 && message.channel.id != 681657479691632640 && message.channel.id != 681178209634746368){
    if (emt){
        for(let i = 0; i<emote_ids.length;i++){
            for (let j = 0;j<emt.length;j++){
                if (emt[j].includes(emote_ids[i])){
                    if(db.get(emt[j])){
                        db.add(emt[j], 1)
                    }
                    else{
                        db.set(emt[j], 1)
                    }
                    if (db.get(`elb_emotes`) && db.get(`elb_emotes`).includes(emt[j])) {
                        let index = db.get(`elb_emotes`).indexOf(emt[j])
                        // update count for emote in elb_count
                        let arr = db.get(`elb_count.count`)
                        db.delete(`elb_count.count`)
                        for (let k = 0; k < index ;k++){
                            db.push(`elb_count.count`, arr[k])
                        }
                        db.push(`elb_count.count`, db.get(emt[j]))
                        for (let k = index + 1; k < arr.length; k++) {
                            db.push(`elb_count.count`, arr[k])
                        }
                    }
                    else {
                        try{
                            db.push(`elb_emotes`, emt[j])
                            db.push(`elb_count.count`, db.get(emt[j]))
                        }catch(e){console.log(e)}
                    }
                    break
                }
            }
        }
    }
    if (aemt){
        for (let i = 0; i < emote_ids.length; i++) {
            for (let j = 0; j < aemt.length; j++){
                if (aemt[j].includes(emote_ids[i])) {
                    if (db.get(aemt[j])) {
                        db.add(aemt[j], 1)
                    }
                    else {
                        db.set(aemt[j], 1)
                    }
                    if (db.get(`elb_emotes`) && db.get(`elb_emotes`).includes(aemt[j])){
                        let index = db.get(`elb_emotes`).indexOf(aemt[j])
                        // update count for emote in elb_count
                        let arr = db.get(`elb_count.count`)
                        db.delete(`elb_count.count`)
                        for (let k = 0; k < index; k++) {
                            db.push(`elb_count.count`, arr[k])
                        }
                        db.push(`elb_count.count`, db.get(aemt[j]))
                        for (let k = index+1; k < arr.length; k++) {
                            db.push(`elb_count.count`, arr[k])
                        }
                    }
                    else{
                        try{
                            db.push(`elb_emotes`, aemt[j])
                            db.push(`elb_count.count`, db.get(aemt[j]))
                        } catch (e) { console.log(e) }
                    }
                    break
                }
            }
        }
    }
  }

  if(message.content.toLowerCase().indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(message.content.startsWith("plz")){
    db.add(`numCmds`, 1)

    if(message.author.id != 827745746933514252 && message.author.id != 483818735849963530){
      const embed = new Discord.MessageEmbed()
        .setTitle("**"  + message.content + "**\n\n" + message.author.tag)
        .addField("User", `<@${message.author.id}>`, true)
        .addField("Guild", message.guild.id, true)
        .setColor("BLUE")
        .setThumbnail(message.author.avatarURL())
        .setFooter(message.guild.name, message.guild.iconURL())
      client.channels.cache.get("869705536583630859").send(embed);
    }
  }

  //cmd handler
  try {
    client.commands.get(command).execute(message, args);
  } catch (e){}

  //much one liner commands
  if(message.content.toLowerCase() == ("plz mega pll") || message.content.toLowerCase() == ("plz megaminx pll")) message.channel.send ("https://docs.google.com/spreadsheets/d/1lVODoMORbDdVXwTG4RUZPWCSrx8uPx2bvwvXg5tuQYE/edit?fbclid=IwAR0xVR10oInF-L_gKu4A9twUQW7pX0TtJWQbu_1-9Ps6_7lZYoB1Y6LFde8#gid=0");
  if(command === "isab") message.channel.send("https://www.youtube.com/channel/UC7WQH4kpgxXJYHp8r9IAO-Q")
  if(command === "ktk" || command === "kardtrickkid") message.channel.send("https://www.youtube.com/channel/UCRc2imW_0b6ID2AWBwKITSA")
  if(command === "cyoubx") message.channel.send("https://www.youtube.com/channel/UCBtt3ISTKAgmwkJ3fYIuS1Q")
  if(command === "siauw") message.channel.send("https://www.youtube.com/channel/UCHV1K9ffQlMKhL1rB7P05Bg")
  if(command === "mats" || command === "valk") message.channel.send("https://www.youtube.com/channel/UCk_nBvBjw0DuEtrT8Sxv5vA")
  if(command === "vibe") message.channel.send("https://media.discordapp.net/attachments/700492943684796548/740042421601304606/image0.gif")
  if(command === "dylan"){message.channel.send("https://www.youtube.com/channel/UCTvK6Qo6ENRP1aqnH96uXTg")}
  if(command === "dyco") message.channel.send("https://www.youtube.com/channel/UCEJA--U6lRPx_apf-PlW9Mg")
  if(command === "gote"|| command === "goat" || command === "will") {message.channel.send("https://www.youtube.com/channel/UCESY2GGgcEcsSOwm7S9NLsg")}
  if(command === "llama") message.channel.send("https://streamerlinks.com/llama_sol")
  if(command === "ohpll"){message.channel.send("https://docs.google.com/spreadsheets/d/1AreuY24Am_REfZC157XN7_qj3nX_ZtxnoIJS6y52rm0/edit#gid=433291876")} 
  if(command === "joslo"){message.channel.send("https://imgur.com/a/O4339pj")} 
  if(command === "magicwondeful"){message.channel.send("http://www.cyotheking.com/magic-wondeful")}  
  if(command === "beginnerf2l"){message.channel.send("https://www.youtube.com/watch?v=IT5BPHEZGJE")}  
  if(command === "tuesdaytips"){message.channel.send("https://www.youtube.com/playlist?list=PLjUDKtvFU6ciyTvv_2RextBE_tbHd3Ruu")} 
  if(command === "zbll"){message.channel.send("https://docs.google.com/spreadsheets/d/1-uwmZHf4vwJxFgeB3-TiF8MQ0RFSS30d5CUK96PoIwk/edit#gid=34031343")} 
  if(command === "vls") message.channel.send("http://algdb.net/puzzle/333/vls")
  if(command === "f2lexplained"){message.channel.send("https://www.youtube.com/watch?v=JebXf1uYYwU")}  
  if(command === "jperm"){message.channel.send("https://www.youtube.com/channel/UCqTVfT9JQqhA6_Hi_h_h97Q")}
  if(command === "jay"){message.channel.send("https://www.youtube.com/user/ottozing")}
  if(command === "cubeskills"){message.channel.send("https://www.cubeskills.com/")}
  if(command === "daniel" || command === "dan" || command === "irrrlrvant" || command === "dev"){message.channel.send("https://www.youtube.com/channel/UCgnfGgfe4IDWOEdrICGDmDA")}
  if(command === "rich") message.channel.send("https://www.youtube.com/channel/UCLGNH7iEUOillUpWjVPIc2Q")
  if(command === "invitebot") message.channel.send("https://discord.com/oauth2/authorize?client_id=601113688245665864&scope=bot&permissions=8")
  if(command === "sevils") message.channel.send("https://www.youtube.com/channel/UCUhHvzQe_9uVFhttOr4ik1A")
  if(command === "joan" || command === "manan") message.channel.send("https://www.youtube.com/channel/UCeWnjdh-ThQoxBrHLQEVZFw")
  if(command === "tc"){message.channel.send("<https://www.thecubicle.com/>")}
  if(command === "scs"){message.channel.send("<https://speedcubeshop.com/>")}
  if(command === "zcube" || command === "ziicube"){message.channel.send("https://www.ziicube.com/")}
  if(command === "cubezz"){message.channel.send("https://cubezz.com/")}
  if(command === "4lll"){
    message.channel.send("https://youtu.be/GhmYBgLoQQg")
    message.channel.send("https://youtu.be/f_Yor-ydZjs")
  }
  // if(command === "oll"){message.channel.send("https://docs.google.com/spreadsheets/d/1CHGvHn1tIeWBj_zdpmhtqzydeW-pgUAxChslJg_jirE/edit?usp=sharing")}
  if(command === "ollcp"){message.channel.send("https://docs.google.com/spreadsheets/d/1OQkYLOR_ZK-3r0_qE0ndgtrC_U-nVDza6dWu-D9-BiA/htmlview#")}
  // if(command === "pll"){message.channel.send("https://docs.google.com/spreadsheets/d/1gpGw2cZciAvdqyMYCsjqudSp0-9G1CycKh-Xdk6zSDc/edit?usp=sharing")}
  if(command === "cross"){message.channel.send("https://www.youtube.com/playlist?list=PLI24ciRbl8BWbmb42GW5BDinKfKVq79WD")}
  if(command === "f2l"){message.channel.send("http://bit.ly/bestf2l")}
  if(command === "lltips"){message.channel.send("https://www.youtube.com/playlist?list=PLI24ciRbl8BXotkGewgSHQ55pRKG-XW7E")}
  if(command === "coll"){message.channel.send("https://www.youtube.com/playlist?list=PLI24ciRbl8BVMcz6pykWw040A40JntUrn")}
  if(command === "lookahead"){message.channel.send("https://www.youtube.com/watch?v=Sw3DpueJsWM")}
  if(command === "feliks"){message.channel.send("https://www.youtube.com/fazrulz1")}
  if(command === "cmll"){message.channel.send("https://sites.google.com/view/kianroux/cmll")}
  if(command === "max" || command === "park"){message.channel.send("https://www.youtube.com/channel/UCMNCzzXmnobZhNWSTENexHw")}
  if(command === "cstimer"){message.channel.send("https://cstimer.net/")}
  if(command === "3style"){message.channel.send("https://docs.google.com/spreadsheets/d/16UbivKIag9ibXOJQaDQWKOQSn66s3EZBNYukN44YWQ8/edit#gid=1765999120")}
  if(command === "panda") message.channel.send("https://giphy.com/gifs/sitewwwreactiongifsus-lcySndwSDLxC4eOU86")
  if(command === "1lll"){message.channel.send("https://drive.google.com/file/d/1-kf9bSQwUEMFOkyuCuLZj9XNQLzkuk_L/view?ts=5ea3807c")}
  if(command === "silk"){message.channel.send("https://www.thecubicle.com/products/cubicle-labs-silk?_pos=1&_sid=c82c9543f&_ss=r")}
  if(command === "bedtime"){message.channel.send("https://imgur.com/ctzynlC")}
  if(command === "vote"){message.channel.send("https://top.gg/bot/601113688245665864")}
  if(command === "chandler" || command === "chandlah"){message.channel.send("https://www.worldcubeassociation.org/persons/2019SCHE06")}
  if(command === "eolr"){message.channel.send("https://docs.google.com/document/d/1ViMrgrlEpY2E7fhaRdw_Zfj04qwdwm2R8GaXB66YZRo/edit?usp=drivesdk")}
  if(command === "brian" || command === "brina"){message.channel.send("https://www.youtube.com/channel/UCTrb6qcYgOjj2Wh-9iQnmsQ")}
  if(command === "chaos" || command === "stasis"){message.channel.send("https://www.youtube.com/channel/UCJlPVOkTm17bKEk6U87rutQ")}
  if(command === "jeff"){message.channel.send("https://www.youtube.com/channel/UCR4s1DE9J4DHzZYXMltSMAg")}
  if(command === "jane"){message.channel.send("https://www.youtube.com/channel/UCuVn_CAvdcKiHmqMXvmBVdA")}
  if(command === "charles" || command === "cabarpes")message.channel.send("https://www.youtube.com/channel/UCQ4jGtTL7r0UT0I9leqZx8w");
  if(command === "charlitics"){message.channel.send("https://www.youtube.com/channel/UCkJIc3zID6F1wzVUnQAsdPw")}
  if(command === "charlescubes"){message.channel.send("https://www.youtube.com/channel/UCXgyMvEfVHF55ujT4v1uc5Q")}
  if(command === "test") message.channel.send('JS: <:dan:758551869823385670>');
  if(command === "die") message.channel.send("<:peepoignorecri:693014724551508044>");
  if(command === "69") message.channel.send("\<:plzsext:693010009973587978>");
  if(command === "100") message.channel.send("bruh wot");
  if(command === "420") message.channel.send("\<a:smoke:698633084563619950>");
  if(command === "nitro") message.channel.send("where you at <@437707594786799638> <:peepomegasad:693022017355513939>");
  if(command === "numcmds") message.channel.send("Number of commands used from me: " + db.get(`numCmds`))
  if(command === "0" || command === "0x0") message.channel.send("‏‏‎ ‎‏‏‎ ‎");

  //only for sb and test
  if(message.guild.id == 681177598931238920 || message.guild.id == 524028960565362728){


  if (command === "resetemote" && message.author.id == 827745746933514252){
        let emote = args[0]
        if(!emote){
            return message.channel.send("format: plz resetemote <emote>")
        }
        db.delete(emote)
        let arr = db.get(`elb_emotes`)
        let arr2 = db.get(`elb_count.count`)
        for (let i = 0; i < db.get(`elb_emotes`).length; i++) {
            if (arr[i] == emote) {
                arr.splice(i, 1)
                arr2.splice(i, 1)
                db.set(`elb_emotes`, arr)
                db.set(`elb_count.count`, arr2)
                return message.channel.send("removed " + emote + " count")
            }
        }
    }

    if (command === "resetemotelb" && message.author.id == 827745746933514252){
        for (let i = 0; i < db.get(`elb_emotes`).length; i++) {
            db.delete(db.get(`elb_emotes`)[i])
        }
        db.delete(`elb_emotes`)
        db.delete(`elb_count`)
        message.channel.send("reset emote lb")
    }

    if(command === "emotelb"){

        let emotes = db.get(`elb_emotes`)
        let count = db.get(`elb_count.count`)
        let arr = []

        for (var i = 0; i < emotes.length; i++) {
            arr.push({theEmotes: emotes[i], theCount: count[i]})
        }

        arr = arr.sort((a, b) => a.theCount - b.theCount).reverse().slice(0, 100)

        let embed = new Discord.MessageEmbed()
            .setTitle("Emotes Leaderboard")
            .setColor("BLUE")
        let s = ""
        
        for (let i = 0; i<arr.length;i++){
            try{
                s += `${arr[i].theEmotes}${arr[i].theCount}    `
                //embed.addField(i+1 + ". " + arr[i].theEmotes, arr[i].theCount, true)
            }catch(e){console.log(e)}
        embed.setDescription(s)
        }
        try{
            message.channel.send(embed)
        }catch(e){}
    }

    if (command === "reset" && message.author.id == 827745746933514252) {
        db.delete(`commands_${message.guild.id}`)
        db.delete(`response_${message.guild.id}`)
        message.channel.send("reset commands")
    }

    if (command === "addc") {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("you dont have perms to do this")
        }
        if (!args[1]) {
            return message.channel.send("format: plz addc <name> <response>")
        }
        let name = args[0].toLowerCase()
        let reply = args.slice(1)
        let cont = ""
        for (let i = 0; i < reply.length; i++) {
            cont += reply[i] + " "
        }
        if (name.includes("@") || cont.includes("@")) {
            return message.channel.send("no pings in commands")
        }
        

        db.push(`commands_${message.guild.id}`, name)
        db.push(`response_${message.guild.id}`, cont)
        message.channel.send(`added command \`${name}\` with reply: \`${cont}\``)
    }

    if(command === "removec"){
        if(!args[0]){
            return message.channel.send("format: plz removec <command>")
        }
        let comm = args[0]
        let arr = db.get(`commands_${message.guild.id}`)
        let arr2 = db.get(`response_${message.guild.id}`)
        for (let i = 0; i < db.get(`commands_${message.guild.id}`).length;i++){
            if(arr[i] == comm){
                arr.splice(i, 1)
                arr2.splice(i, 1)
                db.set(`commands_${message.guild.id}`, arr)
                db.set(`response_${message.guild.id}`, arr2)
                return message.channel.send(`removed ${comm} from custom commands`)
            }
        }
        message.channel.send(`${comm} was not found in custom commands`)
    }

    if (command === "allc") {
        let commands = db.get(`commands_${message.guild.id}`)
        let replies = db.get(`response_${message.guild.id}`)
        let list = []
        for (let i = 0; i < commands.length; i++) {
            list.push("\`" + commands[i] + "\`\t" + replies[i])
        }
        let embed = new Discord.MessageEmbed()
            .setTitle("Custom Commands")
            .setColor("BLUE")
            .setDescription(list)
        message.channel.send(embed)
    }

    if(command === "emote"){
      if(message.member.hasPermission("MANAGE_EMOJIS")){
        let link = args[0]
        let name = args[1]
        message.guild.emojis.create(link, name)
        .then(emoji => message.channel.send(`${client.emojis.cache.get(`${emoji.id}`)}`))
        .catch(console.error);
      }
      else{
        message.channel.send("you dont have perms to do this <:jeff:728468163972562985>")
      }
    }

    if(command === "emotelink"){
      let emote = args[0]
      let animated = emote.substring(1, 2) == "a"
      let link = "https://cdn.discordapp.com/emojis/" + emote.substring(emote.length - 19, emote.length -1)
      if(animated){
        message.channel.send(link + ".gif")
      }
      else{
        message.channel.send(link + ".png")
      }
    }

    if(command === "clone"){
      if(message.member.hasPermission("MANAGE_EMOJIS")){
        let emote = args[0]
        let name = args[1]
        let animated = emote.substring(1, 2) == "a"
        let link = "https://cdn.discordapp.com/emojis/" + emote.substring(emote.length - 19, emote.length -1)

        if (animated) {
          message.guild.emojis.create(link + ".gif", name)
          .then(emoji => message.channel.send(`${client.emojis.cache.get(`${emoji.id}`)}`))
          .catch(console.error)
        }
        else {
          message.guild.emojis.create(link + ".png", name)
          .then(emoji => message.channel.send(`${client.emojis.cache.get(`${emoji.id}`)}`))
          .catch(console.error)
        }
      }
      else{
        message.channel.send("you dont have perms to do this <:bwuh:771949862186778684>")
      }
    }

    if(command === "delete"){
      if(message.member.hasPermission("MANAGE_EMOJIS")){
          let emote = args[0]
          let emoteid = message.guild.emojis.cache.get(emote.substring(emote.length - 19, emote.length -1))
          message.channel.send("removing " + emote)
          try{
            emoteid.delete()
            message.channel.send("done.")
          }catch(e){message.channel.send("that didnt work")}
      }
      else{
        message.channel.send("you dont have perms to do this <:jeff:728468163972562985>")
      }
    }

    if(command === "rename"){
      if(message.member.hasPermission("MANAGE_EMOJIS")){
        let emote = args[0]
        let newname = args[1]
        let emoteid = message.guild.emojis.cache.get(emote.substring(emote.length - 19, emote.length -1))
        
        emoteid.edit({name: newname})
        message.channel.send(`Changed ${emoteid} to \`${newname}\``)
      }
      else{
        message.channel.send("you dont have perms to do this <:jeff:728468163972562985>")
      }
    }

    if(command === "find"){
      let person = args[0]
      if(!person) return message.channel.send("you have to mention a user or id")

      try{
        person = await client.users.fetch(id)
      }catch(e){
        person = message.mentions.users.first() || message.author
      }
      
      if(db.get(`lastfound_msg_${person.id}`)) {
        let link = `https://discord.com/channels/${db.get(`lastfound_guild_${person.id}`)}/${db.get(`lastfound_channel_${person.id}`)}/${db.get(`lastfound_msg_${person.id}`)}`
        const embed = new Discord.MessageEmbed()
          .setColor("BLUE")
          .setDescription("Person was last found in <#" + db.get(`lastfound_channel_${person.id}`) + ">\n" + link)
        message.channel.send(embed)
      }
      else{
        message.channel.send("this person has not said anything yet")
      }
    }

    if(command == "say"){
        var name = args.slice(0).join(' ');
        var sworCount=0;
        const swor = ["fuck","bitch","pussy","cunt","slut","shit","nigg","negro","bich","kys"," ass", "nlgg"];

        for(let i = 0; i < swor.length; ++i){
          if(name.toLowerCase().indexOf(swor[i].toLowerCase()) != -1){
            message.channel.send("<@"+ message.author.id +"> said a bad word >:(");
            sworCount++;
          }
        }

        if(sworCount == 0){
          if(name.indexOf("@") != -1){
            message.reply("ping succ");
          }
          else if(!name || name.includes("http")){
            return;
          }
          else if(message.mentions.has(client.user)){
            message.delete();
            message.channel.send("<:pingbruh:693021886426120193>")
              .then((msg) => {
              setTimeout(function() {
              msg.edit(name);
            }, 500)});
            if(message.guild.id == 681177598931238920){
              client.channels.cache.get("708808169673195571").send("from " + message.author.username + ": " + name);
            }
          }
          else{
            message.delete();
            message.channel.send(name);
            if(message.guild.id == 681177598931238920){
              client.channels.cache.get("708808169673195571").send("from " + message.author.username + ": " + name);
            }
          }
        }
      }
  }

  //much command
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }




  if(command === "joke"){
    // To get a random dad joke
    giveMeAJoke.getRandomDadJoke (function(joke) {
        message.channel.send(joke)
    });
  }

  if(command === "diceroll"){
    let amount = args[0]
    let sides = args[1]

    if(!(amount && sides)){
      const embed = new Discord.MessageEmbed()
        .setTitle('"plz diceroll <number of dice> <number of sides>"')
        .setColor("BLUE")
        .setThumbnail("https://cdn.discordapp.com/attachments/524029492449116160/857409992282210324/100-1005320_daily-random-numbers-transparent-background-black-and-white-dice-clip-art.png")
        .setDescription("Example: **plz diceroll 6 9**\nRolls 6 dice with 9 sides each")
      message.channel.send(embed)
    }
    else{
      let list = ""
      for(let i = 0; i < amount; i++){
        list += `${Math.floor(Math.random() * sides) + 1}, `
      }
      message.channel.send(list.substring(0, list.length-2))
    }
  }

  if(command === "avatar" || command === "pfp" || command === "icon"){
    let id = args[0]
    let person = ""
    try{
      person = await client.users.fetch(id)
    }catch(e){
      person = message.mentions.users.first() || message.author
    }
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${person.username}'s Avatar`)
      .setImage(person.displayAvatarURL({ size: 1024, dynamic: true}))
    message.channel.send(embed)
  }

  if(command === "info"){
    let id = args[0]
    let has_roles = true
    let has_perms = true
    let person = ""
    try{
      person = await client.users.fetch(id)
    }catch(e){
      person = message.mentions.users.first() || message.author
    }
    var roleslist = []
    message.guild.roles.cache.forEach(role => {
      if(message.guild.member(person).roles.cache.has(role.id)){
        roleslist.push(role)
      }
    });
    let main_color = 0
    let colorful = false
    let rolesstring = ""
    for(let i = 0;i<roleslist.length; i++){
      if(roleslist[i].color != 0 && !colorful){
        main_color = roleslist[i].color
        colorful = true
      }
      rolesstring += `${roleslist[i]} `
    }
    if(rolesstring == "") has_roles = false
    
    //let perms = message.guild.member(person).permissions
    let perms_list = ['Administrator', 'Manage Server', 'Manage Roles', 'Manage Channels', 'Manage Messages', 'Manage Webhooks', 'Manage Nicknames', 'Manage Emojis', 'Kick Members', 'Ban Members', 'Mention Everyone']
    let perms_names = ["ADMINISTRATOR", "MANAGE_GUILD", "MANAGE_ROLES_OR_PERMISSIONS", "MANAGE_CHANNELS", "MANAGE_MESSAGES", "MANAGE_WEBHOOKS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "KICK_MEMBERS", "BAN_MEMBERS", "MENTION_EVERYONE"]

    let permsstring = ""
    for (let i=0;i<perms_list.length; i++){
      try{
        if(message.guild.member(person).hasPermission(perms_names[i])) permsstring += `${perms_list[i]}, `
      }catch(e){}
    }
    if(permsstring == "") has_perms = false

    if(has_roles && has_perms){
      const embed = new Discord.MessageEmbed()
        .setTitle(person.tag)
        .setDescription(`<@${person.id}>`)
        .setColor(main_color)
        .addField("**Joined**", moment.utc(message.guild.member(person).joinedAt).format("MMMM Do YYYY, h:mm:ss a"), true)
        .addField("**Registered**", moment.utc(person.createdAt).format("MMMM Do YYYY, h:mm:ss a"), true)
        .addField("**Roles [" + roleslist.length + "]**", rolesstring)
        .addField("**Permissions**", permsstring.substring(0, permsstring.length - 2))
        .setThumbnail(person.avatarURL())
        .setFooter(`ID: ${person.id} • Today: ${moment().format("DD/MM/YYYY")}`)
      message.channel.send(embed)
    }
    else if(has_roles && !has_perms){
      const embed = new Discord.MessageEmbed()
        .setTitle(person.tag)
        .setDescription(`<@${person.id}>`)
        .setColor(main_color)
        .addField("**Joined**", moment.utc(message.guild.member(person).joinedAt).format("MMMM Do YYYY, h:mm:ss a"), true)
        .addField("**Registered**", moment.utc(person.createdAt).format("MMMM Do YYYY, h:mm:ss a"), true)
        .addField("**Roles [" + roleslist.length + "]**", rolesstring)
        .setThumbnail(person.avatarURL())
        .setFooter(`ID: ${person.id} • Today: ${moment().format("DD/MM/YYYY")}`)
      message.channel.send(embed)
    }
    else if(!has_roles && has_perms){
      const embed = new Discord.MessageEmbed()
        .setTitle(person.tag)
        .setDescription(`<@${person.id}>`)
        .setColor("BLUE")
        .addField("**Joined**", moment.utc(message.guild.member(person).joinedAt).format("MMMM Do YYYY, h:mm:ss a"), true)
        .addField("**Registered**", moment.utc(person.createdAt).format("MMMM Do YYYY, h:mm:ss a"), true)
        .addField("**Permissions**", permsstring.substring(0, permsstring.length - 2))
        .setThumbnail(person.avatarURL())
        .setFooter(`ID: ${person.id} • Today: ${moment().format("DD/MM/YYYY")}`)
      message.channel.send(embed)
    }
    else{
      const embed = new Discord.MessageEmbed()
        .setTitle(person.tag)
        .setDescription(`<@${person.id}>`)
        .setColor("BLUE")
        .addField("**Joined**", moment.utc(message.guild.member(person).joinedAt).format("MMMM Do YYYY, h:mm:ss a"), true)
        .addField("**Registered**", moment.utc(person.createdAt).format("MMMM Do YYYY, h:mm:ss a"), true)
        .setThumbnail(person.avatarURL())
        .setFooter(`ID: ${person.id} • Today: ${moment().format("DD/MM/YYYY")}`)
      message.channel.send(embed)
    }
  }


  if(command === "scramble"){

    const scramble = new disbut.MessageButton()
    .setStyle("green")
    .setLabel("Press for new scramble")
    .setID(`${message.author.id}_scramble`)

    message.channel.send("_ _", {
      buttons: [scramble],
      embed: plz3()
    })
  }

  if(command === "rps"){
    db.set(`wins_${message.author.id}`, 0)
    db.set(`losses_${message.author.id}`, 0)
    const a = new disbut.MessageButton()
    .setStyle("blurple")
    .setLabel("rock")
    .setID(`${message.author.id}_rock`)
    const b = new disbut.MessageButton()
    .setStyle("blurple")
    .setLabel("paper")
    .setID(`${message.author.id}_paper`)
    const c = new disbut.MessageButton()
    .setStyle("blurple")
    .setLabel("scissors")
    .setID(`${message.author.id}_scissors`)
    message.channel.send("_ _", {buttons: [a,b,c]})
  }

  if(command === "meme"){
    let found = false
    while (!found)
      await redditimage.fetch({
        type: "custom",
        total: 1,
        subreddit: ["dankmemes", "memes"],
      })
      .then((result) => {
        console.log(result)
        if (result[0]["upvotes"] > 5000){
          found = true
          return message.channel.send(result[0]["image"])
        }
      }); //returns 1 meme
  }

  if(command === "gura"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["gawrgura"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 meme
  }

  if(command === "korone"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["korone"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 meme
  }


  // if(command === "reddit"){
  //   let sub = args.slice(0).join(' ');
  //   if (!sub){
  //     message.channel.send("enter what sub you want to see")
  //   }
  //   else{
  //     try{
  //       await redditimage.fetch({
  //         type: "custom",
  //         total: 1,
  //         subreddit: [sub],
  //       })
  //       .then((result) => {
  //         console.log(result)
  //         if(result[0]["NSFW"] == true){
  //           message.channel.send("stop being horny")
  //         }
  //         else{
  //           message.channel.send(result[0]["image"])
  //         }
  //       }); //returns 1 megu
  //     }catch(error){message.channel.send("this sub doesnt exist")}
  //   }
  // }

  if (command === "megu" || command === "megumin"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["megumin"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 megu
  }

  if (command === "cat" || command === "kitty"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["kitty"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 megu
  }

  if (command === "mai"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["onetruemai"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 mai
  }

  if (command === "yuri"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["wholesomeyuri"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 mai
  }

  if (command === "chizuru" || command === "mizuhara"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["chizurumizuhara"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 chizuru
  }

  if (command === "nanachi"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["nanachi"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 nanachi
  }

  if (command === "rem"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["onetruerem"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 rem
  }
  
  if (command === "ayame"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["NakiriAyame"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 ayame
  }

  if (command === "wholesome"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["wholesome"],
    })
    .then((result) => {
      console.log(result)
      message.channel.send(result[0]["image"])
    }); //returns 1 wholesome
  }
  
  if (command === "rin"){
    await redditimage.fetch({
      type: "custom",
      total: 1,
      subreddit: ["onetrueTohsaka"],
    })
    .then((result) => {
      console.log(result)
      if(result[0]["NSFW"] == true){
        message.channel.send("stop being horny")
      }
      else{
        message.channel.send(result[0]["image"])
      }
    }); //returns 1 rem
  }

  if(command === "time" || command === "timer"){
    const test_embed = new Discord.MessageEmbed()
      .setTitle("Timer for " + message.author.tag)
      .setDescription(`<@${message.author.id}>`)
      .setColor("BLUE")
      .setThumbnail(message.author.avatarURL())
      .setFooter(message.guild.name, message.guild.iconURL())
    client.channels.cache.get("869411177342595193").send(test_embed)

    
    let scram = plz3()
    db.set(`${message.author.id}_all_times`, [0])
    db.set(`${message.author.id}_all_scrambles`, [scram.description])
    const embed = new Discord.MessageEmbed()
    .setTitle("Timer for " + message.author.username)
    .setDescription(scram.description)
    .setColor("BLUE")
    .setThumbnail(message.author.avatarURL())

    const start = new disbut.MessageButton()
    .setStyle("green")
    .setLabel("start timer")
    .setID(`${message.author.id}_timer`)

    const tip = new disbut.MessageButton()
    .setEmoji("💡")
    .setStyle("blurple")
    .setID(`${message.author.id}_tip`)

    message.channel.send({
      buttons: [start, tip],
      embed: embed
    })
  }

  if(command === "gif"){
    if (message.channel.id == 681657479691632640 || message.channel.id == 681178209634746368){
      let text = args.slice(0).join(' ')
      if (!text){
        message.channel.send("i cant gifify this idot")
      }
      else if(text.length > 5){
        message.channel.send("max is 5")
      }
      else{
        var dict = {
          'a': 'https://tenor.com/view/adancing-dancing-a-pesing-gif-18704788',
          'b': 'https://tenor.com/view/letter-b-dancing-gif-9063746',
          'c': 'https://tenor.com/view/letter-c-dancing-gif-9063747',
          'd': 'https://tenor.com/view/letter-d-dancing-gif-9063748',
          'e': 'https://tenor.com/view/letter-e-gif-9063749',
          'f': 'https://tenor.com/view/letter-f-gif-9063750',
          'g': 'https://tenor.com/view/gletter-dance-cartoon-gif-13894794',
          'h': 'https://tenor.com/view/letter-gif-9063752',
          'i': 'https://tenor.com/view/letter-gif-9063753',
          'j': 'https://tenor.com/view/letter-gif-9063754',
          'k': 'https://tenor.com/view/letter-gif-9063755', 
          'l': 'https://tenor.com/view/red-alphabet-letter-dancing-letter-l-cartoons-gif-12084376',
          'm': 'https://tenor.com/view/letter-gif-9063757',
          'n': 'https://tenor.com/view/letter-gif-9063758',
          'o': 'https://tenor.com/view/letter-gif-9063759',
          'p': 'https://tenor.com/view/letter-gif-9063760',
          'q': 'https://tenor.com/view/letter-q-gif-9063761',
          'r': 'https://tenor.com/view/letter-gif-9063762',
          's': 'https://tenor.com/view/letter-gif-9063763',
          't': 'https://tenor.com/view/letter-gif-9063764',
          'u': 'https://tenor.com/view/letter-gif-9063765',
          'v': 'https://tenor.com/view/letter-v-gif-9063766',
          'w': 'https://tenor.com/view/letter-w-gif-9063767',
          'x': 'https://tenor.com/view/letter-x-gif-9063768',
          'y': 'https://tenor.com/view/letter-y-gif-9063769',
          'z': 'https://tenor.com/view/letter-z-gif-9063770'
        }
        for(let i = 0; i < text.length; i++){
          message.channel.send(dict[text[i]])
        }
      }
    }
  }
  
  

  if(command === "addlist"){
    let thingtoadd = args.slice(0).join(' ');
    let check = 1;
    if(!thingtoadd) message.channel.send("Format: plz addlist [item to add to list]")
    else {
      if(db.get(`list_${message.author.id}`)){
        for(let i = 0; i< db.get(`list_${message.author.id}`).length; i++){
          if(thingtoadd == db.get(`list_${message.author.id}`)[i]) {
            message.channel.send("This item is already number " +(i + 1)+ " on your list")
            check--
            break
          }
        }
      }
      if(check == 1){
        db.push(`list_${message.author.id}`,thingtoadd)
        message.channel.send("Added <:peponice:693014841614663700>")
      }
    }
  }

  if(command === "clearlist"){
    let num = args.slice(0).join(' ');
    if(!db.get(`list_${message.author.id}`)) message.channel.send("Your list is empty already..")
    else{
      if(!num) {
        db.delete(`list_${message.author.id}`)
        message.channel.send("I cleared your list")
      }
      else{
        if(num > db.get(`list_${message.author.id}`).length) message.channel.send("Your list only has " + db.get(`list_${message.author.id}`).length + " items")
        else if (num <= 0) message.channel.send("<:pepethink:693014681903956008>")
        else if (isNaN(num)) message.channel.send("Format: plz clearlist [item number to remove] or plz clearlist to clear your whole list")
        else{
          let list = db.get(`list_${message.author.id}`);
          list.splice(num - 1, 1)
          db.set(`list_${message.author.id}`, list);
          message.channel.send("I cleared the item in position " + num)
        }
      }
    }
  }

  if(command === "checklist" || command === "list"){
    if(!db.get(`list_${message.author.id}`)) message.channel.send("Your checklist is empty tho.. use plz addlist [item] to start adding things to your list")
    else{
      theList = ""
      for(let i = 0; i < db.get(`list_${message.author.id}`).length; i++){
        theList += (i + 1) + ". " + (db.get(`list_${message.author.id}`)[i]) + "\n"
      }
      let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + "'s checklist")
        .setDescription(theList)
        .setThumbnail("https://cdn.discordapp.com/attachments/524029492449116160/756544705457553608/158-1580572_checklist-cartoon.png")
      message.channel.send(embed)
    }
  }


  if(command === "clearsnipe"){
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        db.delete(`snipedGuild_${message.guild.id}`)
        message.reply("I reset all deleted messages");
      }
      else{
        message.channel.send("srry fam, you dont have perms to do that...")
      }
  }

  if(command === "suggest"){
    let suggestion = args.slice(0).join(' ');

    if(!suggestion){
      return message.reply("format: plz suggest <suggestion>")
    }
    if(!suggestion.indexOf("@everyone") != -1){
      client.channels.cache.get("742184476838461531").send(`new suggestion from ` + message.author.tag + ":\n\`" + suggestion + "\`");
      message.channel.send("Your suggestion has been recorded")
    }
  }

  if(command === "lb"){

    // let arr = [];

    // let user = db.get(`userlb_${message.guild.id}`);
    // let xp = db.get(`guesslb_${message.guild.id}`);
    // for(var i = 0; i < db.get(`userlb_${message.guild.id}`).length; i++){
    //   if(xp[i] <= 0){
    //     user.splice(i,1)
    //     xp.splice(i,1)
    //     db.set(`userlb_${message.guild.id}`, user)
    //     db.set(`guesslb_${message.guild.id}`, xp)
    //   }
    // }
    
    // for(var i = 0; i < xp.length; i++){
    //   arr.push({theUser: user[i], theXp: xp[i]})
    // }
    // arr.sort((a, b) => a.theXp - b.theXp).slice(0,10);
    // const lb = new Discord.MessageEmbed()
    //   .setColor('RANDOM')
    //   .setTitle("Goodnight Goodmorning Leaderboard")
    //   .addField("1. " + arr[0].theUser, "Time: " + arr[0].theXp)
    //   .addField("2. " + arr[1].theUser, "Time: " + arr[1].theXp)
    //   .addField("3. " + arr[2].theUser, "Time: " + arr[2].theXp)
    //   .addField("4. " + arr[3].theUser, "Time: " + arr[3].theXp)
    //   .addField("5. " + arr[4].theUser, "Time: " + arr[4].theXp)
    //   .addField("6. " + arr[5].theUser, "Time: " + arr[5].theXp)
    //   .addField("7. " + arr[6].theUser, "Time: " + arr[6].theXp)
    //   .addField("8. " + arr[7].theUser, "Time: " + arr[7].theXp)
    //   .addField("9. " + arr[8].theUser, "Time: " + arr[8].theXp)
    //   .addField("10. " + arr[9].theUser, "Time: " + arr[9].theXp)
    // message.channel.send(lb);
    const lb = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Goodnight Goodmorning Leaderboard")
      .addField("1. dylan.#9066", "Time: 0.001")
      .addField("2. irrrlrvant#0001", "Time: 0.001")
      .addField("3. Cheese Danish#0001", "Time: 0.005")
      .addField("4. NerdThatNoOneLikes#0115", "Time: 0.038")
      .addField("5. Billy_Nye#0706", "Time: 0.04")
      .addField("6. chknwngs999#8934", "Time: 0.049")
      .addField("7. IcyAlt#9240", "Time: 0.053")
      .addField("8. The_Cube_Nerd#4806", "Time: 0.064")
      .addField("9. Bob_The_Penguin#5650", "Time: 0.067")
      .addField("10. Eight#2709", "Time: 0.069")
    message.channel.send(lb);
  }

  if(command === "userlb" && message.author.id == 483818735849963530){
    let user = db.fetch(`userlb_${message.guild.id}`)
    message.channel.send(`${user}`)
    let xp = db.get(`guesslb_${message.guild.id}`);
    message.channel.send(`${xp}`)
  }

  if(command === "resetlb"){
    if(message.author.id == 483818735849963530){
      db.delete(`guesslb_${message.guild.id}`);
      db.delete(`userlb_${message.guild.id}`);
      db.delete(`gngmpb_${message.guild.id}`);
      db.set(`guesslb_${message.guild.id}`, [9999])
      db.set(`gngmpb_${message.author.id}`, [9999])
      db.set(`userlb_${message.guild.id}`, ["test"])
      message.channel.send("ok");
    }
  }

  // if (command === "reset"){
  //   let name = args[0]
  //   let time = args[1]
  //   let user = db.get(`userlb_${message.guild.id}`);
  //   let xp = db.get(`guesslb_${message.guild.id}`);
  //   for(var i = 0; i < db.get(`userlb_${message.guild.id}`).length; i++){
  //     if(user[i] == name){
  //       user.splice(i,1)
  //       xp.splice(i,1)
  //       db.set(`userlb_${message.guild.id}`, user)
  //       db.set(`guesslb_${message.guild.id}`, xp)
  //     }
  //   }
  //   message.channel.send("removed " + name + " from userlb")
    
  //   db.push(`guesslb_${message.guild.id}`, time)
  //   db.push(`userlb_${message.guild.id}`, name)
  //   message.channel.send("Pushed " + time + " to xplb and " + name + " to userlb");
  // }


  if(command === "snipe"){

    if(message.guild.id != 717423546049101894 && message.guild.id != 868430008404832286){

    if(db.get(`snipedGuild_${message.guild.id}`)){
         let number = args.slice(0).join(' ');
         if(!number){
           var len = db.get(`snipedGuild_${message.guild.id}.msgs`).length - 1;
         }
         else if (number > 0 && number <= 10){
           var len = db.get(`snipedGuild_${message.guild.id}.msgs`).length - number;
         }
         else if(number <= 0) {
           return message.channel.send("can't snipe messages less than or equal to 0")
         }
         else{
           return message.channel.send("deleted messages are capped to 10 messages per server")
         }
         
         if(db.get(`snipedGuild_${message.guild.id}.msgs`)[len]){
         const snipedMsg = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setDescription("**" + db.get(`snipedGuild_${message.guild.id}.msgs`)[len] + "**")
              .setFooter("Deleted by " + db.get(`snipedGuild_${message.guild.id}.tag`)[len], db.get(`snipedGuild_${message.guild.id}.pfps`)[len])
            message.channel.send(snipedMsg);
         }
         else{
           return message.channel.send("I have not logged messages this far")
         }
      
    }
    }
    
    
  }

  // if(command === "esnipe" || command === "editsnipe"){
  //   if(edited[message.guild.id]){
  //     if(edited[message.guild.id].guild == message.guild.id){
  //        const editedMsg = new Discord.MessageEmbed()
  //         .setColor('#0099ff')
  //         .addField("Old Message", edited[message.guild.id].oldMsg)
  //         .addField("New Message", edited[message.guild.id].newMsg)
  //         .setFooter("Edited by " + edited[message.guild.id].user, edited[message.guild.id].userpfp)
  //       message.channel.send(editedMsg);
  //     }
  //     else return message.channel.send("nothing edited to snipe");
  //   }
  // }

  if(command === "resetrace" || command === "rr"){
    if(message.guild.id == 681177598931238920){
      if(message.channel.id == 681266490892091453){
        db.delete(`numRacers_${message.guild.id}`)
        db.delete(`racers_${message.guild.id}`)
        db.delete(`yeeet_${message.guild.id}`)
        message.channel.send("i reset race");
      }
      else return message.channel.send("bruh u have to be in racing channel to use this");
    }
  }

  if(command === "joinrace" || command === "join"){
    if(message.guild.id == 681177598931238920){
      if(message.channel.id == 681266490892091453){
          for(var i = 0; i < db.get(`numRacers_${message.guild.id}`); i++){
            if(message.author.username == db.get(`racers_${message.guild.id}`)[i]){
              return message.channel.send("you are already in this race smh")
            }
          }

          db.add(`yeeet_${message.guild.id}`, 1)
          db.add(`numRacers_${message.guild.id}`, 1)
          db.push(`racers_${message.guild.id}`, message.author.username)

          message.channel.send(message.author.username + " has joined the race.\nNumber of racers: " + db.get(`numRacers_${message.guild.id}`));
          
          
      }
      else return message.channel.send("bruh u have to be in racing channel to use this");
    }
  }

  if(command === "leaverace" || command === "leave"){
    if(message.guild.id == 681177598931238920){
      if(message.channel.id == 681266490892091453){

          let racers = db.get(`racers_${message.guild.id}`);
          for(var i = 0; i < racers.length; i++){
            if(message.author.username == racers[i]){
              racers.splice(i,1)
              db.set(`racers_${message.guild.id}`, racers)
              db.subtract(`numRacers_${message.guild.id}`, 1)
              if(db.get(`numRacers_${message.guild.id}`) > 0) return message.channel.send(message.author.username + " has left the race.\nNumber of racers: " + db.get(`numRacers_${message.guild.id}`))
              else if (db.get(`numRacers_${message.guild.id}`) == 0) return message.channel.send("The race has ended")
            }
          }
          message.channel.send("you cant leave a race you're not in <:pepehmmm:693014915287613490>")

      }
      else return message.channel.send("bruh u have to be in racing channel to use this");
    }
  } 

    if(command === "guild"){
      if(message.author.id == 483818735849963530 || message.author.id == 472128691539804160){
      let guildId = args.slice(0).join(' ');
        if(!guildId){
          message.channel.send("what am i searching tho");
        }
        else if(guildId.indexOf('@everyone') != -1 || guildId.indexOf('@here') != -1){
          return;
        }
        else{
          let guild = client.guilds.cache.get(guildId);
          if (!guild) return message.reply("The bot isn't in the guild with this ID.");

          guild.fetchInvites()
            .then(invites => message.channel.send('Found Invites:\ndiscord.gg/' + invites.map(invite => invite.code).join('\n')))
            .catch(console.error);
        }
      }
    }

    var Main = (function () {
        function Main() {
        }
        
        Main.NNState = function (StateChange) {
          
            var rng = 0;
            if (StateChange === 1) {
                rng = ((Math.random() * 2) | 0) + 1;
                if (rng === 1) {
                    grip += "R2 ";
                    
                    return 2;
                }
                else {
                    grip += "R\' ";
                    return 5;
                }
            }
            else if (StateChange === 2) {
                rng = ((Math.random() * 2) | 0) + 1;
                if (rng === 1) {
                    grip += "R2 ";
                    return 1;
                }
                else {
                    grip += "R ";
                    return 5;
                }
            }
            else if (StateChange === 3) {
                rng = ((Math.random() * 2) | 0) + 1;
                if (rng === 1) {
                    grip += "L2 ";
                    return 4;
                }
                else {
                    grip += "L ";
                    return 5;
                }
            }
            else if (StateChange === 4) {
                rng = ((Math.random() * 2) | 0) + 1;
                if (rng === 1) {
                    grip += "L2 ";
                    return 3;
                }
                else {
                    grip += "L\' ";
                    return 5;
                }
            }
            else {
                rng = ((Math.random() * 6) | 0) + 1;
                if (rng === 1) {
                    grip += "R ";
                    return 1;
                }
                else if (rng === 2) {
                    grip += "R\' ";
                    return 2;
                }
                else if (rng === 3) {
                    grip += "L\' ";
                    return 3;
                }
                else if (rng === 4) {
                    grip += "L ";
                    return 4;
                }
                else if (rng === 5) {
                    grip += "R ";
                    return 1;
                }
                else {
                    grip += "R\' ";
                }
                return 2;
            }
        };
        Main.NNReturn = function (StateChange) {
            if (StateChange === 1)
                grip += "R\' ";
            else if (StateChange === 2)
                grip += "R ";
            else if (StateChange === 3)
                grip += "L ";
            else if (StateChange === 4)
                grip += "L\' ";
        };
        Main.altMove = function (prev, state) {
            var AltT = ["B2", "U2", "D2", "B2"];
            var AltP = ["B\'", "U\'", "D\'", "B\'"];
            var Alt = ["B", "U", "D", "B"];
            var NNT = ["", "U2", "D2"];
            var NNP = ["", "U\'", "D\'"];
            var NN = ["", "U", "D"];
            var fin = "";
            var rng = 0;
            var rng2 = 0;
            if (state !== 5) {
                do {
                    {
                        rng = ((Math.random() * 4) | 0);
                    }
                } while ((rng === prev || rng === prev + 3 || rng === prev - 3));
                prev = rng;
                rng2 = ((Math.random() * 3) | 0) + 1;
                if (rng2 === 1)
                    fin = AltT[rng];
                else if (rng2 === 2)
                    fin = AltP[rng];
                else
                    fin = Alt[rng];
            }
            else {
                do {
                    {
                        rng = ((Math.random() * 2) | 0) + 1;
                    }
                } while ((rng === prev || rng === prev + 4));
                prev = rng;
                rng2 = ((Math.random() * 2) | 0) + 1;
                if (rng2 === 1)
                    fin = NNT[rng];
                else if (rng2 === 2)
                    fin = NNP[rng];
                else
                    fin = NN[rng];
            }
            grip += fin + " ";
            return rng;
        };
        return Main;
    }());
    Main["__class"] = "Main";


    if(command === "r" || command === "icy" || command === "regripless") {
        let amount = args.slice(0).join(' ');
        if(!amount) amount = 1;
        if(amount>5) {
          var buffer = amount;
          amount = 5;
        }
        if(amount==0) message.channel.send('Amount of scrambles shown: your IQ :smirk:');

        for(var h = 1;h<=amount;h++){
        var state = 5;
        var prev = 5;
        var grip = "";
        for(var i = 0;i<7;i++){
          state = Main.NNState(state);
          prev = Main.altMove(prev, state);
          prev = Main.altMove(prev, state);
        }
        Main.NNReturn(state);

        if(amount>1){
          message.channel.send({embed: {
            color: 3447003,
            description: h + ". " + grip
          }});
        }
        else {
          message.channel.send({embed: {
            color: 3447003,
            description: grip
          }});
        }

      }
      if (buffer>5) {message.channel.send('5 is max bruh. Think im actually finna spam '+ buffer + ' scrams lookin ass. smh')}  
    }
  }
  }catch(e){console.log("SECONDMESSAGE EVENT")}

});

client.login(process.env.DISCORD_TOKEN)
