const discord = require("discord.js");
const config = require("./config.json");
const bot = new discord.Client({disableEveryone: true});

client.on('ready', () => {
console.log('Vichy au rapport!');
});
 
 //code ici
 
bot.login(config.token);

