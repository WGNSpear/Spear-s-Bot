const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  if (!message.content.includes(",")) return message.reply("Make sure you separate your text with `,` !")
  message.channel.send("This may take few seconds!")
  let msg = args.join("+")
  let { body } = await superagent
      .get(`https://dustie.xyz/api/crabs/?text=${msg}`)
      .catch(err => {
        return send.edit("Make sure the bot can actually read the message!")
      })
  const attachment = new Discord.Attachment(body, 'crabs.mp4');
  return message.channel.send(attachment);

}

module.exports.help = {
  name: "crabify"
}
