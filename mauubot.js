const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");



client.on("ready", () => {
   console.log("mira mau, el bot se activo, asi que ya lo podes usar y probarlo");
});
    
var prefix = config.prefix;

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
  
    if(command === 'putobot'){
    message.channel.send("si yo soy puto vos sos mi reflejo, jaja salu3, por cierto suscribite a pedritovm");
  } else
    if(command === 'help'){
    message.channel.send("mu!unmensaje, mu!putobot, mu!creadordelbot, mu!canaldeytdelcreador, mu!quedijiste, y mu!muybuenas");
	} else
	if(command === 'unmensaje'){
    message.channel.send("suscribite a el demente");
    } else
    if(command === 'creadordelbot'){
    message.channel.send("Maurii Designs#5758");
	} else
     if(command === 'canaldeytdelcreador'){
    message.channel.send("https://www.youtube.com/channel/UCj8qztEU2jRrTi_GI5lDxSw?view_as=subscriber")
	} else
	 if(command === 'quedijiste'){
    message.channel.send("que dijiste de la coscu army, ***RANCIO!?***")
	} else
	 if(command === 'muybuenas'){
    message.channel.send("mUy BuEnAs SoY ***nIcO vOuTrInAsSsSsS***")	
	
	}
});

client.login(config.token);     