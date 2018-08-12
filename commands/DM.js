const Discord =require("discord.js");

module.exports.run = async (bot, message, args) => {

  //let Dev = message.author.id === 370606740523188227
  if(message.author.id != (370606740523188227)) return message.chanel.send("You are not a Dev!");
    let DMUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!DMUser) return message.channel.send("Cannot find user!");
    let DMMessage = args.join(" ").slice(22);
    if(message.author.id = (370606740523188227))
      (DMUser).send(DMMessage)
      message.delete();

//  (DMUser).send(DMMessage)
//  message.delete()
//  multiple Devs = if (message.author.id === "ID here" && message.author.id === "ID here")

}

module.exports.help = {
  name: "DM"
}
