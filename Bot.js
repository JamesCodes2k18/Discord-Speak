const Discord = require('discord.js');
const client = new Discord.Client();
//var tts = require('node-google-text-to-speech')
const ytdl = require('ytdl-core');
let talkedRecently = new Set();
//const opus = require('node-opus');







client.on('ready',() => {
	console.log('READY')
	
});


client.on('voiceStateUpdate',(oldMember, newMember) => {
	
	
	
	if (talkedRecently.has(newMember.id)) {
		//	message.reply(`You're talking too fast.`)
		  return;
	}
		  talkedRecently.add(newMember.id);
		  		setTimeout(() => {
  // Removes the user from the set after 2.5 seconds
  talkedRecently.delete(newMember.id);
}, 1500);

if (newMember.guild.id == "264445053596991498") {
		return
	}
	if (oldMember.guild.id == "264445053596991498") {
		return
	}

	//say.speak('Hello!');
	if(newMember.voiceChannel === undefined) {
	if (newMember.user.bot) { return }
    const voiceChannel = oldMember.voiceChannel;
	 voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=SxjDhu_PBmw", { filter: 'audioonly' });
        const dispatcher = connnection.playFile('./Left.mp3');
        dispatcher.on('end', () => voiceChannel.leave());
      });
} 

 if (newMember.voiceChannel) {
	 if (newMember.user.bot) { return }
	 
	const voiceChannel = newMember.voiceChannel;
	 voiceChannel.join()
      .then(connnection => {
      const stream = ytdl("https://www.youtube.com/watch?v=eE7K0kp7RQc", { filter: 'audioonly' });
        const dispatcher = connnection.playFile('./Joined.mp3');
      dispatcher.on('end', () => voiceChannel.leave());
		//return
      });
}

  console.log(oldMember + newMember);
});






client.on("message", message => {
	
	if (message.author.bot) return;
	

	
  let prefix = "!";
  if(!message.content.toLowerCase().startsWith(prefix)) return;
  var input = message.content.toLowerCase().split(" ")[0];
  input = input.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  var joinargs = args.join(" ");
  let internet = joinargs.replace(/ /g, "+");
  ////////////////////////////////////////////////////
  ///////
  
  if (input == "info") {
	  message.channel.send(`This bot is an audio bot join a channel to see it in action. For dutch !dutchinfo | !supportbot`)
  }
  if (input == "dutchinfo") {
	  message.channel.send(`Dit is een audio bot dat reageert op mensen die joinen en leaven !supportbot`)
  }
  
  if (input == "supportbot") {
	  message.channel.send('Other bot! https://discordapp.com/oauth2/authorize?client_id=351507284783792130&scope=bot&permissions=2146958591')
	  
  }
  
});











client.login(NICE TRY);
