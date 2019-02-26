const Discord = require("discord.js");

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find(r => ( r.name === 'Officer' || r.name === 'GM' || r.name === 'Raidlead' || r.name === 'Veteran'))) { //Rollen zuweisung
		message.channel.send('Oof, don´t try it again.');
		return;
}
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: .say <anything>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor(message.member.displayColor)
	.setDescription(args.join(' '))
    
        let msg = await message.channel.send(embed)
        .then(function (msg) {
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

module.exports.help = {
  name: "say"
}
