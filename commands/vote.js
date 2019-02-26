const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find(r => ( r.name === 'Officer' || r.name === 'GM' ))) { //Rollen zuweisung
		message.channel.send('Oof, don´t try it again.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: .polln <Date>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //Change Color do ("#fffff")
        .addField(`Vote`, `${args.join(' ')}`, true)
                
    let msg = await message.channel.send(embed)
        .then(function (msg) {
		//React außer Funktion...
            msg.react("👍");
            msg.react("👎");
	          //msg.react(""); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};
module.exports.help = {
  name: "vote"
}
