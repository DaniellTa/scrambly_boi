module.exports = {
	name: 'reck',
	execute(message, args) {
    let name = args.slice(0).join(' ');
    if(name.indexOf("@") != -1){
      return message.reply("ping succ");
    }
    else if(!name){
      message.reply('who am i recking fam?');
    }

    else{
      const reckquotes = [', go commit 7x7 ao100', ', i hope you get a wr with corner twist', ', i hope you get a plus 16 at your next comp', ', go do a pyra session whereby all the scrambles have the tips not solved', ', if u competed with a dry valk, i wouldnt feel very bad :sunglasses:', ', i hope you get a potential sub 4 single in comp but drop the cube at the last second resulting in a sub 5', ', i wish you suddenly commit colorblind during a pb single', ', i wish a judge mixes up the order of your cubes during a multibld attempt',', i hope you win a fake gan xs giveaway',', i hope your next big order of cubes gets misshipped and you get rubiks brands instead :eyes:',', i hope your official 3bld pb is off by two pieces',', i hope you get double parity on all 5 of your official solves',', i hope you get one place off of moving on to the next rounds on all of your events',', i wish you get an underage judge that doesnt stop talking in the middle of your solves :sunglasses:',', i hope you forget ur cubes at home for your next comp and end up having to use a picture cube',', i hope you barely dont make cutoffs for your next comp',', i hope your next order of cubes takes longer than the usual 7 business days :sunglasses::sunglasses::sunglasses:',', i hope you fail ur pb single because you didnt start the timer',', i hope your judge slaps the table during a pb single',', i hope there is a wr sub 5 avg while you start inspecting your cube',', i hope your cubes fall off the table during multibld',', i hope your judge says its oh when its actually 2h',', i hope u dnf 4x4 because of adj parity in the back',', i hope your discord gets hacked and the only server left is the ezcubing one',', i hope you get wr on a misscramble and dnf',', i hope u fail a pb single because you miss the timer stop',', i hope you drop your new cube in sand',', i hope someone screams while you memo for multibld',', i hope you suddenly forget all ur ll algs during fmc',': you know your mom is not allowed to help u during comp solves rite?',': no youre not allowed pencil and paper during bld solves',', i hope you get a pb and scream so loud that your family leaves you',', i hope you dnf an fmc wr because the judges cant read your handwriting',', i hope you get sick the day of your comp',', i hope you forget all your algorithms in the middle of a pb solve',', i hope you step on a pyraminx', ', i hope you get 0.01 off your pb', ', i hope you dnf a pr avg because you forgot to sign your sheet',' i will take off the springs from your oh main before you use it in comp', ', i hope you break your pb but you left inspection on'];
      if (name.toLowerCase() == "me") name = "<@"+message.author.id+">";
      const randreck = reckquotes[Math.floor(Math.random() * reckquotes.length)];
      message.channel.send(name + randreck);
    }
	}
};