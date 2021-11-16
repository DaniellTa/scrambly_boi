// module.exports = {
// 	name: 'leaverace',
// 	execute(message, args) {
//     if(message.guild.id == 681177598931238920){
//       if(message.channel.id == 681266490892091453){
//           if(numberOfRacers > 2){
//             numberOfRacers--; 
//             message.channel.send("cya, now " +numberOfRacers+" people in this race");
//           }
//           else if(numberOfRacers == 2){
//             numberOfRacers--;
//             message.channel.send("cya, now " +numberOfRacers+" person in this race");
//           }
//           else if(numberOfRacers == 1){
//             numberOfRacers--;
//             message.channel.send("the race has ended");
//           }
//           else{
//             message.channel.send("negative racers \<:pepehmmm:693014915287613490>");
//           }
//       }
//       else return message.channel.send("bruh u have to be in racing channel to use this");
//     }
// 	}
// };