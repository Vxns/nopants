const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    // Role Officer oder GM
    if (!message.member.roles.find(r => (r.name === 'Officer' || r.name === 'GM'))) return message.channel.send('This requires the role: Officer or GM')
    let sicon = message.guild.iconURL
         let serverembed = new Discord.RichEmbed()
         .setDescription("Server Information")
         .setColor("#15f153")
         .setThumbnail(sicon)
         .addField("Server Name", message.guild.name)
         .addField("Created On", message.guild.createdAt)
         .addField("You Joined", message.member.joinedAt)
         .addField("Total Members", message.guild.memberCount)

        let serverchannel = message.guild.channels.find(`name`, "bot-spamm")
        if(!serverchannel) return message.channel.send("Couldn't find bot-spamm channel.")


        message.delete().catch(O_o=>{})
        serverchannel.send(serverembed)

}

module.exports.help = {
    name: "serverinfo"
}
