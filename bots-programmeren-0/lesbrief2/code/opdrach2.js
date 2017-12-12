const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '509335339:AAE2N-6q7wKitgjVX6RhBkF1sBzQUHpkOw0'
});

bot.on("/versie",(msg) => {
  let replay = {replyToMessage: msg.message_id}
  return bot.sendMessage(msg.from.id,"Hey de versie van de bot is 0.1 ",replay);
});



bot.start();
