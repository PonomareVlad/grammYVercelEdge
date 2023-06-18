import {bot} from "./bot.mjs";
import {safeStart} from "vercel-grammy";

await safeStart(bot);
