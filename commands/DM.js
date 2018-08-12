const Discord =require("discord.js");

module.exports.run = async (bot, message, args) => {

  //let Dev = message.author.id === 370606740523188227
  let DMUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!DMUser) return message.channel.send("Only the developer can do that!");
  let DMMessage = args.join(" ").slice(22);
  if(message.author.id = (370606740523188227))
    (DMUser).send(DMMessage)
    message.delete();


//  (DMUser).send(DMMessage)
//  message.delete()


}

module.exports.help = {
  name: "DM"
}
