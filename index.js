const Discord = require('discord.js');
const bot = new Discord.Client();

const token ='NzIxNzQwODI5NjEzNjIxMjcw.XuZCDg.33bX5prwzh-6rQ6eJyL4GJN1apQ';

const PREFIX = '!';

bot.on('ready', () => {
console.log('Online');
})

bot.on('message',message =>{
let args = message.content.substring(PREFIX.length).split("");

switch(args[0]){
  case 'selam':
     message.channel.sendMessage('Karagözlüme hosgeldiniz!')
     break;

  case 'neler var':
      message.channel.sendMessage('Bir ihtimal daha var o da ölmek mi dersin')
      break;

  case 'kaptan':
        message.channel.sendMessage('oh kaptanimmm!')
        break;    
  case 'cal':
            if(args[1] === 'vers'){
              message.channel.sendMessage('asdas');
            }else{
              message.channel.sendMessage('asdaasdasds');
            }
            break;

     message.channel.sendMessage('pong!')
     break;



}

}
)

bot.login(token);
