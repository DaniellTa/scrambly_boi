module.exports = {
	name: 'cry',
	execute(message, args) {
    message.delete();
    const yay = ['<:peposad:693010394045743125>','<:feelswhyman:693022227955712050>','<:peepomegasad:693022017355513939>','<:peepoignorecri:693014724551508044>','<:peeposadhug:731788220244819999>','<a:cryrunfall:700584553064038402>','<:cry1:738593365641396274>','<:cry2:738592676894605345>','<:cry3:738592638156013578>','<:cry4:738592600872976446>','<:cry5:738590842603962409>','<a:cry6:738593407760334909>','<a:cry7:738592778166075412>','<a:cry8:738592712189542423>','<a:cry9:738591011713974285>','<a:cry10:738590912246054922>','<a:cry11:738590775608344677>','<a:cry12:738590696151318561>','<:cry13:743558515565789296>'];
    var randpog = yay[Math.floor(Math.random() * yay.length)];
    message.channel.send(randpog);
	}
};