const Discord = require ("discord.js);
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
  bot.user.setGame("En développement");
  console.log("Connecté")
});

bot.login('NTcwNTk1MjY3OTUxNDYwMzcz.XMBeVg.j9UdtGc30ykdlqHtuoJ01p4ZJkM');

bot.on''message', message -> {
  if (message.content === prefix + "dev")
    message.reply("Je suis actuellement indisponnible.")
});
