const discord = require('discord.js')
const bot = new discord.Client();
const client = new discord.Client()

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


bot.login('process.env.BOT_TOKEN')
client.login("process.env.BOT_TOKEN")
