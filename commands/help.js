const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.member.send('', new Discord.RichEmbed().setColor(0x29B6F6).setDescription(`.report, to report a player. (Comment would be deleted, so no one can see you have Reportet a Player ;)\n`))
    
    
}

module.exports.help = {
    name: "help"
}
