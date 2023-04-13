import {Bot} from "grammy/web";

export const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("message:text", async ctx => ctx.reply(ctx.msg.text));

export default bot;
