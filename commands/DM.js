const Discord =require("discord.js");

module.exports.run = async (bot, message, args) => {

  //let Dev = message.author.id === 370606740523188227
  if(message.author.id != (476408544267206656)) return message.channel.send("You are not a Dev!");
    let DMUser = message.mentions.members.first()
    if(!DMUser) return message.channel.send("Cannot find user!");
    let DMMessage = args.join(" ").slice(22);
    if(message.author.id = (476408544267206656))
      (DMUser).send(DMMessage)
      message.delete();

//  (DMUser).send(DMMessage)
//  message.delete()
//  multiple Devs = if (message.author.id === "ID here" && message.author.id === "ID here")

}

module.exports.help = {
  name: "DM"
}
