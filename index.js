// для создания бота вк для группы, необходимо установить ngrok и запустить ngrok http 80
const express = require('express');
const bodyParser = require('body-parser');
const { Botact} = require('botact');

const app = express();
const bot = new Botact({
	token: 'bef8b307e320c8b40ad20bc0de8fb2f396a0e03b46760ed8517adc682ff81bd91c88654cdbf8cf6efc7ed',
	confirmation: '49646d6e'
});

bot.on((ctx) => {
	//console.log(ctx.body);
	ctx.reply('Вы сказали: ' + ctx.body + '. Пожалуйста перепроверьте написанное:)');
})

bot.command('Начать', (ctx) => {
  ctx.reply('Доброго времени суток! Напишите в ответ регион России в котором вы хотели бы побывать? (Карелия, Москва, Санкт-Петербург)')
});
bot.command('Карелия', (ctx) => {
  ctx.reply('Республика Карелия. Советую посетить Ладожское озеро, или озеро Импилампи.')
});
bot.command('Москва', (ctx) => {
  ctx.reply('Москва. Советую посетить центр Москвы')
});
bot.command('Санкт-Петербург', (ctx) => {
  ctx.reply('Санкт-Петербург. Советую посетить парк 300 летия, а также Канонерский остров.')
});

app.use(bodyParser.json());
app.post('/', bot.listen);
app.listen(80);