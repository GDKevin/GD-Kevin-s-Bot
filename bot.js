const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDEyOTk5MTM0ODM3MDgwMDg0.DWVYSw.lYtTM4XSFZVoUhUIISpboSoFctQ);
