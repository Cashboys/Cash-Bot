
    //Imports
const Discord = require('discord.js'), {token} = require('./config.json'), client = new Discord.Client();
const {hykey} = require('./config.json');
const fetch = require('node-fetch');

var {count, messages, server} = require('./config.json');

client.once('ready', () => {
	console.log('Ready with 0 errors!');
});

	//Set Up
client.on('message', message => {
	if (message.author.bot)
	return;	
	console.log(message.content);

	count++;
	server = 3;
	const playerName = "Racoo";
	const playerUUID = "eec92318-ffe5-4aec-a404-ba6405f33933";
	
	//Bot Commands 
function chatCommands(){
	if (message.content.endsWith('$help')) {
		count--;
		message.channel.send(' **Page 1 of Help Showcases Fun Commands!** \n- `$breath` :: Tells you the secret of Breathyy. \n- `$bonk` :: Tells what needs to be done \n- `$squag` :: Tells which bot is truly superior! \n- `$jrakan` :: Gives a glimpse of the jazziest Rakan. \n- `$presi` :: Shows you a legendary player. \n- `$st` :: Gives you more insight! \n- `$bloodflex` :: Memories that flex hard!  \n**Page 1 of 2** \n\nUse `$help [#]` to cycle pages.');
	}
	if (message.content.endsWith('$help 1')) {
		count--;
		message.channel.send(' **Page 1 of Help Showcases Fun Commands!** \n- `$breath` :: Tells you the secret of Breathyy. \n- `$bonk` :: Tells what needs to be done \n- `$squag` :: Tells which bot is truly superior! \n- `$jrakan` :: Gives a glimpse of the jazziest Rakan. \n- `$presi` :: Shows you a legendary player. \n- `$st` :: Gives you more insight! \n- `$bloodflex` :: Memories that flex hard!  \n**Page 1 of 2** \n\nUse `$help [#]` to cycle pages.');
	}
	if (message.content.endsWith('$help 2')) {
		count--;
		message.channel.send(' **Page 2 of Help Showcases Status Commands!** \n- `$messages` :: Shows how many messages there are since I have been up. \n- `$hyapi` :: Shows your Hypixel stats here! (WIP) \n**Help Page 2 of 2**\n\nUse `$help [#]` to cycle pages.');
	}
	if (message.content.startsWith('$breath')) {
		count--;
		message.channel.send('Breathyy is 3cool5me!');
	}
	if (message.content.startsWith('$bonk')) {
		count--;
		message.channel.send('Prepare to be bonked. \n https://gyazo.com/1fb24e776596102351e231dff8985141 \n *Falter meme*');
	}
	if (message.content.startsWith('$squag')) {
		count--
		message.channel.send('Squag Bot is superior to me, for now... \n https://gyazo.com/d05c20012d5bc11f95088ca0fda061d6');
	}
	if (message.content.startsWith('$jrakan')) {
		count--;
		message.channel.send('The jazziest of all Rakans! \n https://gyazo.com/4bcb802ab70870506ba116938c87ebb5');
	}
	if (message.content.startsWith('$presi')) {
		count--;
		message.channel.send('Its ya boi \n Presidingofficer!');
	}
	if (message.content.startsWith('$st')) {
		count--;
		message.channel.send('It is the man with the plan. \n https://gyazo.com/d6d2b80bc06be10cbf3574a39fd67329');
	}
	if (message.content.startsWith('$cabbiss')) {
		count--;
		message.channel.send('Bonk goes the cabbiss https://gyazo.com/1fb24e776596102351e231dff8985141\n __Legacy Command__');
	}
	if (message.content.startsWith('$messages')) {
		count--;
		messages = count;
		message.channel.send('There have been `' + messages + '` messages across `' + server + '` servers since my arrival!');
	    }
	if (message.content.startsWith('$thanosme')) {
		count--;
		message.channel.send('You have been Thanos`ed!');
		message.channel.send('https://gyazo.com/06968dea962547fd50cc31315a7582ab');
		message.channel.send('*Special Credit to Squag/Nora!*');
	}
	if (message.content.startsWith('$bloodflex')) {
		count--;
		message.channel.send('Bloodlust OP');
		message.channel.send('https://gyazo.com/5578157ed07482d59d473e3c90806865');
		}
	if (message.content.startsWith('$hyapi')) {
		count--;
		message.channel.send('Your Hypixel stats will show up here in the future!');
	fetch(`https://api.hypixel.net/player?key=${hykey}&name=${playerName}`)
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
			.catch(error => console.log("Network Error", error))
	}
}
var timerID = setTimeout(chatCommands,500);
});

client.login(token);