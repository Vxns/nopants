//Benötigte Daten
const botconfig = require("./botconfig.json")
const Discord = require("discord.js")
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true})

bot.commands = new Discord.Collection()

//Command Sektion
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        //console.log("Couldn't find commands.")
    return
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        //console.log(`${f} loadet!`)
        bot.commands.set(props.help.name, props)
    })
})

//Bot Einloggen mit Beschäftigung.
bot.on("ready", async () => {
    //console.log(`${bot.user.username} is online!`) Keine Console vorhanden
    bot.user.setActivity("Music with no Pants on.(:", {type: "LISTENING"})
})
// Bot Ausgaben, für die Befehl sektion.
bot.on("message", async message => {
    if(message.author.bot) return
    if(message.channel.type === "dm") return 

    let prefix = botconfig.prefix
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)

    let commandfile = bot.commands.get(cmd.slice(prefix.length))
    if(commandfile) commandfile.run(bot,message,args)
})
//
//Autorole Funktion -> Funktioniert.
const AUTOROLEID = "534686936929927193"

bot.on('guildMemberAdd', (member) => {

    var role = member.guild.roles.find(r => r.id == AUTOROLEID)

        if (role) {
            member.addRole(role).then(() => {
                member.send('', new Discord.RichEmbed().setColor(0x29B6F6).setDescription(`Welcome to the No Pants Crew (:\nYou got automatical assigned the role ${role.name} and all your pants have been deleted!\n.help in <#539854066042404895> and you can see my Commands. (:`))
                // Nachricht für die Offis in einen seperaten Channel
                // Weil noch Programmiert wird, für 2 Wochen Rollen Update.
                
            })
        }
})

bot.login(process.env.token)
