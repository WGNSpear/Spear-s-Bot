const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.reply(`Click [here](https://discordapp.com/api/oauth2/authorize?client_id=478674261448458261&permissions=8&scope=bot) for support!`, true)
    //https://discordapp.com/api/oauth2/authorize?client_id=478674261448458261&permissions=8&scope=bot")

}


module.exports.help = {
  name:"botinvite"
}
