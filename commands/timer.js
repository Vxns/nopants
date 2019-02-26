const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args, level) => {
    if (!message.member.roles.find(r => ( r.name === 'Officer' || r.name === 'GM' ))) { //Rollen zuweisung
		message.channel.send('Oof, don´t try it again.');
        return;
    }

let Timer = args[0];

if(!args[0]){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

if(args[0] <= 0){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send("Timer has ended, it lasted: " + ` ${ms(ms(Timer), {long: true})}` + ` ${message.author.toString()}` + ` ${args.join(' ')}`)

}, ms(Timer));
    //Delete Message
    message.delete().catch(O_o=>{})
    
}

exports.help = {
  name: "timer",
};