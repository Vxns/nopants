const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

if (!message.member.roles.find(r => r.name === 'Officer')) { //Nur für die Rolle Officer
		message.channel.send('You need the role Officer (:.');
		return;
	}

return message.member.send('', new Discord.RichEmbed().setColor(0x29B6F6).setDescription(`.report, to report a player. (Comment would be deleted, so no one can see you have Reportet a Player ;)\n.polln For a poll Antorus Normal.\n.pollnn For a poll Antorus normal No Progress.\n.pollh For a poll Antorus HC\n.pollhn For a poll Antorus HC no Progress.\n.vote For a normal Vote poll.\n.kick @tag <reason> to kick someone.\n.bann @tag <reason> For a Bann\n.timer <s/m/h> For a Timer, i.e .timer 2m is a 2 minute Timer.`))
                
}

module.exports.help = {
    name: "helpo"
}
