const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    // Role Officer
    if (!message.member.roles.find(r => r.name === 'Officer')) return message.channel.send('This requires the role: Officer')
    // The Text output
    let bicon = bot.user.displayAvatarURL
         let botEmbed = new Discord.RichEmbed()
         .setDescription("Blutritter")
         .setColor("#15f153")
         .setThumbnail(bicon)
         .addField("Bot Name", bot.member.username)
         .addField("Created On", bot.member.createdAt)
         .addField("Dev", "<@311103692847710210>")
         .addField("Owner", "<@402780055861723138>")

        let botchannel = message.guild.channels.find(`name`, "bot-spamm")
        if(!botchannel) return message.channel.send("Couldn't find bot-spamm channel.")

        message.delete().catch(O_o=>{})
        botchannel.send(botEmbed)
     }

module.exports.help = {
    name: "botinfo"
}
