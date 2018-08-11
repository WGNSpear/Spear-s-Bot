const Discord =require("discord.js");

module.exports.run = async (bot, message, args) => {
  //S! Hi!
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have Permission to do that!");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
