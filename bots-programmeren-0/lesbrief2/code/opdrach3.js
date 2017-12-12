const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '509335339:AAE2N-6q7wKitgjVX6RhBkF1sBzQUHpkOw0'
});

bot.on('/random',(msg) => {
  let fotos = ["a.jpg","b.jpg","c.jpg","d.jpg","e.png"];
  let random = fotos[Math.floor(Math.random() * fotos.length)]

  console.log(msg.from.id + msg.from.first_name + " Heeft gevraagt om een random foto ");
  console.log(random);
  return bot.sendPhoto(msg.from.id,random);
})


bot.start();
