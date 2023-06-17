import {Bot} from "grammy/web";
import {token, botInfo} from "./data.mjs";

export const bot = new Bot(token, {botInfo});

bot.on("message:text", async ctx => ctx.reply(ctx.msg.text));
