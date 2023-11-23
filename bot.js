const { Telegraf } = require('telegraf');
require('dotenv').config();

const messages = require('./messages.js');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('С рождеством !'));
bot.help((ctx) => ctx.reply('Покажи стикер'));
bot.on('sticker', (ctx) => ctx.reply('👍'));

const numberRegex = /^\d+$/;
const wordRegex = /[\w\u0430-\u044f]+/ig;

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