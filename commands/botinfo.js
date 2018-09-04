const Discord = require("discord.js");
const { version } = require('discord.js');

module.exports.run = async (bot, message, args) => {

function time( milliseconds ) {
let day, hour, minute, seconds;

seconds = Math.floor(milliseconds / 1000);
minute = Math.floor(seconds / 60);
seconds = seconds % 60;
hour = Math.floor(minute / 60);
minute = minute % 60;
day = Math.floor(hour / 24);
hour = hour % 24;

let string = `\`${day}\` %day%, \`${hour}\` %hour%, \`${minute}\` %minute% and \`${seconds}\` %seconds%`;

string = string.replace("%day%", "day" + (day === 1 ? "" : "s"));
string = string.replace("%hour%", "hour" + (hour === 1 ? "" : "s"));
string = string.replace("%minute%", "minute" + (minute === 1 ? "" : "s"));
string = string.replace("%seconds%", "second" + (seconds === 1 ? "" : "s"));

return string;
};

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField('Guild Count', bot.guilds.size, true)
    .addField('Discord.js Version', `v${version}`, true)
    .addField('Node Version', `${process.version}`, true)
    .addField('Memory Usage', `${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}MBs of RAM`, true)
    .addField('User Count', bot.users.size, true)
    .addField('Uptime', `${time(bot.uptime)}`)

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
