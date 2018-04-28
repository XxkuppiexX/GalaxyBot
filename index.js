const discord = require('discord.js')
const bot = new discord.Client();
const client = new discord.Client()
var helper =  require('discordbot-helper');
var opusscript = require("opusscript");

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('428835187456213013').send('Welkom in de discord van GalaxyBot**,' + member.user.username + '**'); 
});


bot.on('message', (message) => {

    if(message.content == 'hoi') {
       //message.reply('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?');
        message.channel.sendMessage('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?')
    }

});

bot.on('message', (message) => {

    if(message.content == 'hey') {
       //message.reply('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?');
        message.channel.sendMessage('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?')
    }

});

bot.on('message', (message) => {

    if(message.content == 'hai') {
       //message.reply('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?');
        message.channel.sendMessage('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?')
    }

});

bot.on('message', (message) => {

    if(message.content == 'hallo') {
       //message.reply('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?');
        message.channel.sendMessage('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?')
    }

});


bot.on('message', (message) => {

    if(message.content == 'goed') {
       //message.reply('Mooi, met mij ook!');
        message.channel.sendMessage('Mooi, met mij ook!')
    }

});



bot.login('NDM5Nzk3NzEzODc0MzIxNDEw.DcYgSQ.Hx6hJhxQRf_x4zmIsvoA_QDIvQI')
helper.loginToken("NDM5Nzk3NzEzODc0MzIxNDEw.DcYgSQ.Hx6hJhxQRf_x4zmIsvoA_QDIvQI");
client.login("NDM5Nzk3NzEzODc0MzIxNDEw.DcYgSQ.Hx6hJhxQRf_x4zmIsvoA_QDIvQI")


helper.Owner("373079358614798346");
// Remove ID and put your id (To get type \@Your username. DON'T copy the < , > and @ just take the numbers ex: 35465634) 
 
helper.on("logged", function () {
// You need this for the bot to work, 
 
    helper.addCommand("!owner", helper.getOwner());
// This outputs the owner's username. sometimes its not working. 

// create an event listener for messages
bot.on('message', message => {
    // if the message is "what is my avatar",
    if (message.content === 'wat is mijn avatar?') {
      // send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });
    
 
    helper.addCommandStartWith("-say1", "{content}");
    helper.addCommandStartWith("-say2", "`{content}`");
    helper.addCommandStartWith("-warn", "dit is een waarschuwing wegens {content}")
 
helper.addCommand("commands", helper.commands());
});
