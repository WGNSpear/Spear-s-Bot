const Discord =require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!Sclear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have Permission to do that!");
  if(!args[0]) return message.channel.send("Please specify an amount to delete.");
  message.delete()
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });

}

module.exports.help = {
  name: "clear"
}
