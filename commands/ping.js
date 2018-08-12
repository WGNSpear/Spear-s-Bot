const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let pingembed = new Discord.RichEmbed()
    .setTitle("Checking Ping... Please Wait")
    .setDescription(" ")
    .setColor("#0000ff")

    let finalpingembed = new Discord.RichEmbed()
    .setTitle("Done!")
    .setDescription(`The current ping of this server is: ${bot.ping.toLocaleString() -23} ms`)
    .setColor("#0000ff")

    message.channel.send(pingembed).then(function(m) {
    m.edit(finalpingembed)
  });

}
// bot.ping.toLocaleString()

module.exports.help = {
  name: "ping"
}
