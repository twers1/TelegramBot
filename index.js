const { Telegraf } = require('telegraf');

const bot = new Telegraf('5794648410:AAEQZQt9vcCXOU8PwWakiyXBlFeeqLzK2Rs');

bot.use(async (ctx) => {
    await ctx.reply(JSON.stringify(ctx.update, null, 2));
}); 

bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

