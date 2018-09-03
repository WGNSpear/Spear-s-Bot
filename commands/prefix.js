const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  let prefix = prefixes[message.guild.id].prefixes;

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You dont have permission to do this!");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: " + prefix + "prefix <desired prefix here>");


  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}
