import bot from "../src/bot.mjs";
import {setWebhook} from "edge-grammy";

export const config = {runtime: "edge"};

export default setWebhook(bot, "api/update");
