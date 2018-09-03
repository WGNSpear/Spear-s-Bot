const Discord =require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
//new line template = End of last line (\n) **" + prefix + "command** - Command Description (start new here)"
     let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
     let prefix = prefixes[message.guild.id].prefixes;
     let bicon = bot.user.displayAvatarURL;
     let helpembed = new Discord.RichEmbed()
       .setDescription("**__Help__**")
       .setColor("#0xecfeb")
       .setThumbnail(bicon)
       .addField("Owner Commands", "**" + prefix + "prefix** - Sets the prefix for this server \n")
       .addField("\n Moderator Commands", "**" + prefix + "kick** - Kicks the tagged user \n **" + prefix + "ban** - Bans the tagged user \n **" + prefix + "clear** <Number> - Deletes that amount of messages \n **" + prefix + "addrole** - adds the sepcified role to the tagged user \n **" + prefix + "remove role** - removes the specifed role from the tagged user \n **" + prefix + "warn** - DM's the warned user, and adds one point to their warn level \n **" + prefix + "warnlevel** - Messages an embed containing the tagged users warnlevel \n **" + prefix + "tempmute** - Temporarily mutes the tagged user for the specified time \n **" + prefix + "say** - Makes the bot repeat your message, and delete yours \n ")
       .addField("\n User Commands", "**" + prefix + "serverinfo** - Displays Server Information \n **" + prefix + "report** - reports the tagged user with the reason stated \n **" + prefix + "help** - Gives this command")
       .addField("\n Fun Commands", "**" + prefix + "doggo** - Sends a photo of a doggo :dog: \n **" + prefix + "cat** - sends a photo of a cat :cat:")
       .setFooter("Bot made by Spear#0481");

     return message.channel.send(helpembed);
    }


module.exports.help = {
  name: "help"
}
