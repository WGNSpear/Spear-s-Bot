const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.author.id != (370606740523188227)) return message.chanel.send("You are not a Dev!");
      let msg = args.join(" ").split(" ");
      message.delete();
      let announcements = message.guild.channels.find('name', 'announcements')


      if(!announcements) return message.channel.send(":x: Could not find announcements channel.")
      let embed = new Discord.RichEmbed()
      .setTitle("Announcement")
      .setColor("#6AC3FD")
      .setDescription(msg)
      message.channel.send(embed)
      announcements.send(embed);
   }



module.exports.help = {
  name: "announce"
}
