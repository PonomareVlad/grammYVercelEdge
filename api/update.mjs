import {bot, secretToken} from "../src/bot.mjs";
import {webhookCallback} from "grammy";

export const config = {runtime: "edge"};

// Default grammY handler for incoming updates via webhooks
export const POST = webhookCallback(bot, "std/http", {
    timeoutMilliseconds: 24_000,
    secretToken,
});
