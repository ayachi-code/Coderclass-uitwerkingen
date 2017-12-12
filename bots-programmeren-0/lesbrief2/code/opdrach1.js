const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '509335339:AAE2N-6q7wKitgjVX6RhBkF1sBzQUHpkOw0'
});

bot.on('/start',(msg) => {
  return bot.sendMessage(msg.from.id, "Hallo mijn naam is bilal de lesbrief 1 bot");
})



bot.start();
