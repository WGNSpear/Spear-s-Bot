const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  let user = message.guild.member(message.mentions.members.first());
  if (!user) return message.channel.send("Please Specify a User!");

  let Avatarembed = new Discord.RichEmbed()
  .setTitle(`${user.displayName}'s Avatar.`)
  .setImage(user.user.displayAvatarURL);
  message.channel.send(Avatarembed);
  return

};

module.exports.help = {
  name:"avatar"
}
