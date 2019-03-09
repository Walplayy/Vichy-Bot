const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('Vichy au rapport!');
});
 
 //code ici
 
 client.login(process.env.BOT_TOKEN);
