const {Telegraf} = require('telegraf');

const bot = new Telegraf('yourTOKEN');

bot.command('help', (ctx) => {
    ctx.reply(`
    Бот может здороваться на разных языках.
    Список поддерживаемых приветствий:
    - привет - русский
    - hello - английский
    - hola - испанский
    - barev - армянский 
    - merhaba - турецкий
    `)
});

bot.hears('привет', (ctx) => ctx.reply('привет'));
bot.hears('hello', (ctx) => ctx.reply('hello'));
bot.hears('hola', (ctx) => ctx.reply('hola'));
bot.hears('barev', (ctx) => ctx.reply('barev'));
bot.hears('merhaba', (ctx) => ctx.reply('merhaba'));

bot.on('text', (ctx) => ctx.reply(`Приветствие "${ctx.update.message.text}" не поддерживается.`))

bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
