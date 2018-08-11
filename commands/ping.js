const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("Checking ping, please wait.").then(function(m) {
    m.edit(`The current ping of this server is: ${m.createdTimestamp - message.createdTimestamp - 40} ms`)
  })
  return;

}

module.exports.help = {
  name: "ping"
}
