const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    // Role Officer
    if (!message.member.roles.find(r => (r.name === 'Officer' || r.name === 'GM'))) return message.channel.send('This requires the role: Officer or GM')
    // The Text output
    let bicon = bot.user.displayAvatarURL
         let botembed = new Discord.RichEmbed()
         .setDescription("No Pants Bot")
         .setColor("#15f153")
         .setThumbnail(bicon)
         .addField("Bot Name", bot.user.username)
         .addField("Created On", bot.user.createdAt)
         .addField("Dev", "<@311103692847710210>")
         .addField("Owner", "<@402780055861723138>")

        let botchannel = message.guild.channels.find(`name`, "bot-spamm")
        if(!botchannel) return message.channel.send("Couldn't find bot-spamm channel.")

        message.delete().catch(O_o=>{})
        botchannel.send(botembed)
     }

module.exports.help = {
    name: "botinfo"
}
