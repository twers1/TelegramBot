const {Telegraf, Markup} = require('telegraf');

const bot = new Telegraf('5794648410:AAEQZQt9vcCXOU8PwWakiyXBlFeeqLzK2Rs');

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getCoinSide = () => getRandomInt(0, 1) === 0 ? 'Орел' : 'Решка'; /* создаем const, внутри этой константы будет функция, которая вызывает условие, если строго равно нулю, то Орел*/
/* если нет, то выводится Решка*/
const coinInlineKeyboard = Markup.inlineKeyboard([
    Markup.button.callback('Подросить еще раз', 'flip_a_coin'),
]);

bot.hears('Подбросить монетку', ctx => ctx.reply(getCoinSide(), coinInlineKeyboard));
bot.action('flip_a_coin', async(ctx) => {
    await ctx.editMessageText(`${getCoinSide()}`);
});

const getRandomNumber = () => getRandomInt(0, 100);
const numberInlineKeyboard = Markup.inlineKeyboard([
    Markup.button.callback('Сгенерировать новое', 'random_number'),
]);

bot.hears('Случайное число', ctx => ctx.reply(getRandomNumber(), numberInlineKeyboard));
bot.action('random_number', async(ctx) => {
    await ctx.editMessageText(`${getRandomNumber()}`);
});

bot.use(async (ctx) => {
    await ctx.reply('Что нужно сделать?', Markup
        .keyboard([
            ['Подбросить монетку', 'Случайное число'],
        ]).resize()
    )
});


bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

/* Подсказки по коду: 
С помощью модуля Markup в переменной coinInlineKeyboard создаем inline-клавиатуру для сообщений о подбрасывание монетки. С одной callback-кнопкой с текстом «Подбросить ещё раз». Вторым параметром указывается строка, которую Telegram передаст в апдейте боту при нажатии на кнопку. Указываем flip_a_coin, чтобы знать, что нужно перебросить монетку (можно указать произвольная текст максимальной длиной 64 байта).

В результате в переменной coinInlineKeyboard будет объект, следующего вида, который можно создать вручную. Модуль Markup просто помогает это сделать. */