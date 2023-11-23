const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('С рождеством !'));
bot.help((ctx) => ctx.reply('Покажи стикер'));
bot.on('sticker', (ctx) => ctx.reply('👍'));

const numberRegex = /^\d+$/;
const wordRegex = /[\w\u0430-\u044f]+/ig;
// DATA ------------------
const messages = [
    { 
      text: `📅 Today is 1.
  🌞 Embrace the new day with positivity and enthusiasm! 🌈`
    },
    { 
      text: `📅 Today is 2.
  🚀 Seize the opportunities that today brings! 💪`
    },
    { 
      text: `📅 Today is 3.
  🎉 Make today amazing and unforgettable! 🌟`
    },
    { 
      text: `📅 Today is 4.
  💬 Communicate your ideas with confidence and clarity! 🗣️`
    },
    { 
      text: `📅 Today is 5.
  🔥 Ignite your passion and work towards your goals! 🚀`
    },
    { 
      text: `📅 Today is 6.
  🌈 Surround yourself with positivity and good vibes! 😊`
    },
    { 
      text: `📅 Today is 7.
  ❤️ Show love and kindness to yourself and others! 💖`
    },
    { 
      text: `📅 Today is 8.
  🎨 Let your creativity flow and inspire those around you! 🖌️`
    },
    { 
      text: `📅 Today is 9.
  👍 Embrace challenges with a positive mindset! 💪`
    },
    { 
      text: `📅 Today is 10.
  📢 Speak your truth and make your voice heard! 📣`
    },
    { 
      text: `📅 Today is 11.
  💻 Dive into your work with focus and determination! 🚀`
    },
    { 
      text: `📅 Today is 12.
  🌟 Believe in your abilities and shine bright! ✨`
    },
    { 
      text: `📅 Today is 13.
  🎉 Celebrate your achievements, big and small! 🥳`
    },
    { 
      text: `📅 Today is 14.
  🌈 Surround yourself with positive energy and good vibes! 😊`
    },
    { 
      text: `📅 Today is 15.
  🚀 Take bold steps toward your dreams and aspirations! 💪`
    },
    { 
      text: `📅 Today is 16.
  💬 Communicate with clarity and kindness! 🗣️`
    },
    { 
      text: `📅 Today is 17.
  🔥 Ignite your passion and conquer challenges! 🌟`
    },
    { 
      text: `📅 Today is 18.
  ❤️ Spread love and positivity wherever you go! 💖`
    },
    { 
      text: `📅 Today is 19.
  🎨 Express your creativity and let it shine! 🖌️`
    },
    { 
      text: `📅 Today is 20.
  👍 Face challenges with confidence and determination! 💪`
    },
    { 
      text: `📅 Today is 21.
  📢 Share your thoughts and ideas with the world! 🌍`
    },
    { 
      text: `📅 Today is 22.
  💻 Dive into your projects with focus and dedication! 🚀`
    },
    { 
      text: `📅 Today is 23.
  🌟 Embrace the opportunities that come your way! ✨`
    },
    { 
      text: `📅 Today is 24.
  🎉 Celebrate your successes, no matter how small! 🥳`
    },
    { 
      text: `📅 Today is 25.
  🌈 Surround yourself with positivity and joy! 😊`
    },
    { 
      text: `📅 Today is 26.
  🚀 Take bold steps towards your goals and dreams! 💪`
    },
    { 
      text: `📅 Today is 27.
  💬 Communicate with kindness and understanding! 🗣️`
    },
    { 
      text: `📅 Today is 28.
  🔥 Ignite your passion and overcome challenges! 🌟`
    },
    { 
      text: `📅 Today is 29.
  ❤️ Share love and positivity with those around you! 💖`
    },
    { 
      text: `📅 Today is 30.
  🎨 Express your creativity and make a positive impact! 🖌️`
    },
    { 
      text: `📅 Today is 31.
  👍 Face challenges with strength and determination! 💪`
    }
  ];
// ----------------------


bot.hears(numberRegex, (ctx) => {
    const currentDay = new Date().getDate();
    let message = '';
    if (ctx.update.message?.text === currentDay.toString()) {
        message = messages[currentDay - 1].text;
    } else {
        message = `
Это не сегодня. Но была не была.

${messages[Number(ctx.update.message?.text) - 1].text}`;
    }
    return ctx.reply(message);
});

bot.hears(wordRegex, (ctx) => {
    return ctx.reply('Я пока глупенький, но я научусь');
});
bot.launch();

// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
exports.handler = async event => {
    try {
      await bot.handleUpdate(JSON.parse(event.body))
      return { statusCode: 200, body: "" }
    } catch (e) {
      console.error("error in handler:", e)
      return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
    }
}