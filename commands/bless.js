module.exports = {
	name: 'bless',
	execute(message, args) {
    let name = args.slice(0).join(' ');
    if(name.indexOf("@") != -1){
      return message.reply("ping succ");
    }
    else if(!name){
      message.reply('who am i blessing fam?');
    }
    else{
      const blessquotes = [', i hope the judge at your next comp is :weary::ok_hand:',', i hope you judge a wr',', i hope thecubicle makes a sale on the cubes you wanted',', i hope thecubicle begs to sponsor u',', i hope you get a 1 move xcross in competition',', i hope you dont have to learn csp because you never get parity',', i hope you never get a z perm on skewb again',', i hope the stock lingao clock you ordered comes magnetized and lubed',', i hope you get a ll skip in comp',', i hope you get a skewb u perm scramble in comp',', i hope you get a 4 move 2x2 scramble',', i hope you sit next to Feliks in 3x3 and get a better time than him',', i hope Feliks Zemdegs judges your pb single',', i hope you suddenly know the entirety of 1lll during your official solves',', hope you get an extra attempt on your worst solve',', i hope your next order of cubes ships the same day',', i hope someone lets you borrow a bunch of premium cubes for your official solves',', i hope you get no parity on all 5 of your official solves',', i hope your next bld attempt you have to guess and guess correctly',', i hope you win a cosmic PVC coated Gan i giveaway',', i hope your 1x1 order gets mis-shipped and you instead get a bunch of premium cubes',', i hope you get a pyra ao5 in comp with tips solved each time',', i hope you find a 15 move solution in FMC by accident'];
      if (name.toLowerCase() == "me") name = "<@"+message.author.id+">";
      const randbless = blessquotes[Math.floor(Math.random() * blessquotes.length)];
      message.channel.send(name + randbless);
    }
	}
};