const Discord =require("discord.js");

module.exports.run = async (bot, message, args) => {
  //S!removerole @spear Naughty
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You do not have permission");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find('name', role);
  if(!gRole) return message.reply("Couldn't find that role!")

  if(!rMember.roles.has(gRole.id)) return message.reply("They dont have that role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, the role ${gRole.name} has been taken from you`)
  }catch(e){
    message.channel.send(`RIP <@${rMember.id}>, the role ${gRole.name} has been taken from you. We tried to DM them, but their DMs are locked`)
  }
}

module.exports.help = {
  name: "removerole"
}
