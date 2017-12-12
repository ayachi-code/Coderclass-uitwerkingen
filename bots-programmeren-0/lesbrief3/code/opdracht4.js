const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '509335339:AAE2N-6q7wKitgjVX6RhBkF1sBzQUHpkOw0'
});


console.log("Bot is running...");



bot.on('/start', function (msg) {
  console.log("/start is aangevraagt ")
  return bot.sendMessage(msg.from.id, "Hallo wereld");
});



bot.on(/^\/postcode (.+)/, (msg, props) => {
    console.log("Postcode word aangevraagt .... ");


    const postcode = props.match[1];

    var karakters = {
      k1: postcode[0],
      k2: postcode[1],
      k3: postcode[2],
      k4: postcode[3],
      k5: postcode[4],
      k6: postcode[5]
    };




    var karakters_check = {
      k1: isNaN(karakters.k1)
    }





console.log("Postcode is gecheckt " + karakters_check.k1);
});



bot.start();
