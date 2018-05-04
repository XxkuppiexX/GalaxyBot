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

client.on('guildMemberAdd', member => {
    member.guild.channels.get('428835187456213013').send('🌎 Welkom in de ruimte, ' + member + '!🌎'); 
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
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
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
    if(!message.member.roles.some(r=>["☄️ Galaxy CEO ☄️", "⚙️ Head-Support ⚙️", "⚙️ Support⚙️"].includes(r.name)) )
    return message.reply("Sorry je hebt hier geen perms voor :(");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  if(command === "warn") {
    if(!message.member.roles.some(r=>["☄️ Galaxy CEO ☄️", "⚙️ Head-Support ⚙️", "⚙️ Support⚙️"].includes(r.name)) )
    return message.reply("Sorry je hebt hier geen perms voor :(");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send("**LET OP!**");
	message.channel.send("`Ook in de ruimte gelden regels!`");
    message.channel.send("`dit is een waarschuwing wegens:`");
    message.channel.send(sayMessage)
  }

  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["⚙️ Support⚙️", "☄️ Galaxy CEO ☄️", "⚙️ Head-Support ⚙️"].includes(r.name)) )
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
    if(!message.member.roles.some(r=>["⚙️ Head-Support ⚙️", "☄️ Galaxy CEO ☄️", "⚙️ Support⚙️"].includes(r.name)) )
      return message.reply("srs +ban dacht je nou echt.......");
    
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
  
  if(command === "clear") {
    if(!message.member.roles.some(r=>["☄️ Galaxy CEO ☄️"].includes(r.name)) )
    return message.reply("je kan geen +clear vraag aan een CEO of head-support om hulp");
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

client.login(process.env.BOT_TOKEN);