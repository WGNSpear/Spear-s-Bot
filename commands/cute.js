const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {

const sloths = require("../cutejs");

  sloths(function(data) {
    const cuteembed = new Discord.RichEmbed()
      .setTitle(data.title[0])
      .setColor("#ff9900")
      .setURL(data.url[0])
      .setDescription(`From r/${data.subreddit[0]} by ${data.author[0]}`)
      .setImage(data.url[0])
    message.channel.send(cuteembed);
  });
};

module.exports.help = {

  name: "cute"
}
