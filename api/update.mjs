import bot from "../src/bot.mjs";
import {webhookCallback} from "grammy/web";

export const config = {runtime: "edge"};

export default webhookCallback(bot, "std/http", "throw", 29000);
