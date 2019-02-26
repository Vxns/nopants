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
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter (`Poll Created By ${message.author.username}`)
    	.addField(`Requirements:`, `Itemlevel: 915+ / Traits: 62+ also to join Discord.`, true)
        .addField (`React:`, `Tank react with 1️⃣, Heal react with 2️⃣, DPS react with 3️⃣.`, true)
        .addField(`Tactics:`, `We got the Raidtactics in <#541678384250486784> to help you out if you need it. Otherwise Tactics will get explained on Discord too.`, true) 
        //.setTitle(args.join(' ')) Backup
    	.setTitle(`Dear Fam! The next Antours normal Raid will be on ${args.join(' ')}`)
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
		    //React außer Funktion...
            //msg.react("1️⃣");
            //msg.react("2️⃣");
	        //msg.react("3️⃣"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};
module.exports.help = {
  name: "polln"
}
