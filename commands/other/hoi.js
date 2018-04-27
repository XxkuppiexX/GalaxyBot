var commando = require ("discord.js-commando");

class hoi extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hoi',
            group: 'other',
            memberName: 'hoi',
            description: 'Mijn Bot'
        });
    }
async run(message, arg){
    message.reply("Hoezo praat je tegen mij? Ik ben maar een bot.")
}

}
module.exports = hoi