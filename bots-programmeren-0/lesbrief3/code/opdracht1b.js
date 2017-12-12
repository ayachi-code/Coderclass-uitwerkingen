const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '509335339:AAE2N-6q7wKitgjVX6RhBkF1sBzQUHpkOw0'
});



bot.on(/[doheni]{1,3}/,(msg) => {
  let text = "Hoi " + msg.from.first_name;
  return bot.sendMessage(msg.from.id,text);
})


bot.start();
