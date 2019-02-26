const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
         if(!bUser) return message.channel.send("Can't find user!")
         let bReason = args.join(" ").slice(22)
         if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!")
         if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!")
    
         let banEmbed = new Discord.RichEmbed()
         .setDescription("~Ban~")
         .setColor("#bc0000")
         .addField("Banned User", `${kUser} with ID ${kUser.id}`)
         .addField("Banned By", `<@${message.author.id} with ID ${message.author.id}`)
         .addField("Banned In", message.channel)
         .addField("Time", message.createdAt)
         .addField("Reason", bReason)
    
             let incidentschannel = message.guild.channels.find(`name`, "bot-spamm")
             if(!incidentschannel) return message.channel.send("Can't find bot-spamm Channel.")

             message.guild.member(bUser).ban(bReason)
             incidentschannel.send(banEmbed)

}

module.exports.help = {
    name: "ban"
}