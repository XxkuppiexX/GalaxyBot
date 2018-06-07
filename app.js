// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  client.user.setActivity(`with cheese`);
});

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

var prefix = "!";

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

if (message.content.toLowerCase().startsWith(prefix + `nieuw`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (message.guild.channels.exists("name", "ticket-" + message.author.username)) return message.channel.send(`Jij hebt op dit moment al een ticket open.`);
    message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
        let role = message.guild.roles.find("name", "⚙️ Support ⚙️");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Je ticket is gemaakt, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Je hebt een ticket geopend probeer zo goed mogelijk uit te leggen waarom je deze ticket hebt geopent. Onze Support zal je dan zo snel mogelijk helpen.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `sluit`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`je kan het ticket niet sluiten als je niet in de channel van de ticket zit.`);

    message.channel.send(`Weet je het zeker? Deze actie kan niet ongedaan worden gemaakt\nAls je het zeker weet typ \`!ikweethetzeker\`. Na 10 seconde word dit geanuleerd en zal dit ticket niet verwijderd worden.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '!ikweethetzeker', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Je hebt geen !ikweethetzeker getypt, het ticket word niet gesloten').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});

client.on('message', (message) => {

    if(message.content.toLowerCase() == 'hoi') {
       //message.reply('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?');
        message.channel.sendMessage('BlIEP BLOEP.. O hey! Ik kom net vanuit de ruimte. Hoe gaat ie?')
    }

});

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot is tomas ariëns aan het hacken, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("guildMemberAdd", member => {
    console.log(`er is iemand gejoint:` + member.user.username);
  });
  
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  

if(command === "cheese") {
message.channel.send("CHEESE?! I WANT CHEESE :cheese:")
}
  
if(command === "storing") {
	if(!message.member.roles.some(r=>["🎓 | Owner", "🔧 Developer"].includes(r.name)) )
    return message.reply("Sorry je hebt hier geen perms voor :(");
	let naam = args[0];
    let storing = args.slice(1).join(" ");
	message.channel.send({embed: {
    color: 0xeb5ef7,
    title: "**Breakdown service**",
    description:"**Fault Type:**\n" + naam + "\n \n**Description:**\n" + storing,
    footer: {
      text: "© BetterVirus"
  }
}
});
}

if(command === "profsay") {
	if(!message.member.roles.some(r=>["🎓 | Owner"].includes(r.name)) )
  return message.reply("Sorry je hebt hier geen perms voor :(");
  let profmsg = args.slice(1).join(" ");
  let nieuwtje = args[0]
  message.channel.send({embed: {
    color: 0xeb5ef7,
    title: nieuwtje + ":",
    description: profmsg + "\n \n**Written by:**\n" + message.author,
    timestamp: new Date(),
    footer: {
      text: "© CheeseWorlds"
    }
  }
});
}

if(command === "cheesgo") {
let role = message.guild.roles.find("453278934742728705");
if (message.channel.id = 453984941558988804) {
  message.author.addRole(role).catch(console.error);
  message.channel.send(":white_check_mark: thanks for your verify, ${message.author}");
}
}
  if(command === "tafeltennis") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const b = await message.channel.send("Ping");
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`Pong`);
    b.edit(`Ping`);
    b.edit(`jij wint! :smile:`)
  }
  
  if(command === "say") {
    if(!message.member.roles.some(r=>["🎓 | Owner", "⚙️ Head-Support ⚙️", "bot perms","MC Owner", "MC Owner"].includes(r.name)) )
    return message.reply("Sorry je hebt hier geen perms voor :(");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage); 
  }
  
if(command === "set") {
  if(!message.member.roles.some(r=>["🎓 | Owner"].includes(r.name)) )
  return message.reply("Je hebt hier geen perms voor");
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{});
  client.user.setActivity(sayMessage);
}
  
if(command === "members") {
const embed = new Discord.RichEmbed()
.setColor(0xCF40FA)
.addField(``)
.setTimestamp();
message.channel.send({ embed: embed });
}

	
  if(command === "warn") {
    if(!message.member.roles.some(r=>["🎓 | Owner", "⚙️ Head-Support ⚙️", "bot perms","MC Owner"].includes(r.name)) )
    return message.reply("Sorry je hebt hier geen perms voor :(");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send("**WARN!**");
	message.channel.send("`Virus detected!`");
    message.channel.send("`This is a warn because:`");
    message.channel.send(sayMessage)
  }

  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["bot perms","MC Owner", "🎓 | Owner", "⚙️ Head-Support ⚙️"].includes(r.name)) )
      return message.reply("dacht je nu echt dat jij iemand kon kicken XD");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("je moet @ gebruiken");
    if(!member.kickable) 
      return message.reply("hu, ik kan hem niet kicken heb ik eigenlijk wel kick perms??");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "hij heeft geen reden ingevult";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} kan ik niet kicken om: ${error}`));
    message.reply(`${member.user.tag} is gekickt door ${message.author.tag} omdat: ${reason}`);

  }
  

  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["⚙️ Head-Support ⚙️", "🎓 | Owner", "bot perms","MC Owner"].includes(r.name)) )
      return message.reply("srs !ban dacht je nou echt.......");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("je moet @ gebruiken");
    if(!member.bannable) 
      return message.reply("hu, ik kan hem niet bannen heb ik eigenlijk wel kick perms??");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "geen reden ingevult";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} kan ik niet bannen om: ${error}`));
    message.reply(`${member.user.tag} is geband door ${message.author.tag} omdat: ${reason}`);
  }

  if(command === "invite") {
    message.channel.send("📪 I have send you a DM with a explenation.📪 ")
    message.author.send("You can invite me with this link: https://discordapp.com/api/oauth2/authorize?client_id=453861286242025484&permissions=8&scope=bot")
   }

  if(command === "clear") {
    if(!message.member.roles.some(r=>["🎓 | Owner"].includes(r.name)) )
    return message.reply("je kan geen !clear vraag aan een CEO of head-support om hulp");
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("voer een nummer tussen de 2 en 100 in");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`ik kan de message's niet delete omdat: ${error}`));
  }
});


client.login("NDUzODYxMjg2MjQyMDI1NDg0.DflDIQ.4xjaOv9FGN-x8hJAUfKKXK7ejvE");
