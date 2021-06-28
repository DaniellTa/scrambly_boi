// const Cube = require("cubejs");
// const cube = new Cube();

// module.exports = {
// 	name: 'solve',
// 	execute(message, args) {
//     //args = message.content.slice(prefix.length).trim().split(/ +/);
//     let moves = "";
//     for(var i = 1; i < args.length; i++){
//       moves += args[i] += " ";
//     }
//     Cube.initSolver();
//     cube.move(moves);
//     message.channel.send(cube.solve());
//     cube.move(Cube.inverse(moves));
// 	}
// };