const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '509335339:AAE2N-6q7wKitgjVX6RhBkF1sBzQUHpkOw0'
});


bot.on(/[hH]oi/,(msg) => {
  let woorden = ["hey ","hai ","hoi ","goedenmorgen ","gegroet "];
  let random = woorden[Math.floor(Math.random() * woorden.length)];
  let text = random + msg.from.first_name;
  return bot.sendMessage(msg.from.id,text);
});




bot.start()
