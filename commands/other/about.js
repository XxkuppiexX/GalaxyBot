var commando = require ("discord.js-commando");

class about extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'other',
            memberName: 'about',
            description: 'Mijn Bot'
        });
    }
async run(message, arg){
    message.reply("Deze Bot is gemaakt door @TheDogMasterr!")
}

}
module.exports = about