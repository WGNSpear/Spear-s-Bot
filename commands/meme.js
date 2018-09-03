const Discord = require('discord.js');
const meme = require('memejsfork');

module.exports.run = async (client, message, args) => {

  meme(function(data) {
    const embed = new Discord.RichEmbed()
      .setTitle(data.title[0])
      .setURL(data.url[0])
      .setDescription(`From r/${data.subreddit[0]} by ${data.author[0]}`)
      .setImage(data.url[0])
    message.channel.send({embed});
  });
};

module.exports.help = {

  name: "meme"
}
