import {webhookCallback} from "grammy";
import {bot, secretToken} from "../src/bot.mjs";

export const config = {runtime: "edge"};

// Default grammY handler for incoming updates via webhooks
export default webhookCallback(bot, "std/http", {
    timeoutMilliseconds: 29_000,
    secretToken,
});
