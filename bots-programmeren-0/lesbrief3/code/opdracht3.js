const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '509335339:AAE2N-6q7wKitgjVX6RhBkF1sBzQUHpkOw0'
});


bot.on(/.*[\.\?]$/,(msg) => {

  let text = "Weet ik veel " + msg.from.first_name;
  return bot.sendMessage(msg.from.id,text);
})


bot.start();
