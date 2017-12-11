const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '509335339:AAE2N-6q7wKitgjVX6RhBkF1sBzQUHpkOw0' // Telegram Bot API token.
});

bot.on('/start', function (msg) {
  return bot.sendMessage(msg.from.id, "Hallo wereld");
});


bot.start();
