import { Markup, Telegraf } from "telegraf";
("telegraf");

const token = "6775932730:AAETOzyg9lYMlzQggxoTKVjZs6M41tw7GCQ";

const webAppUrl = "https://angular-bot-tg.web.app/";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Добро пожаловать",
    Markup.keyboard([Markup.button.webApp("Отправить сообщение", webAppUrl)])
  );
});

bot.launch();
