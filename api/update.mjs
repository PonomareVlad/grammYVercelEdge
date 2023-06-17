import {bot} from "../src/bot.mjs";
import {secretToken} from "../src/data.mjs";
import {webhookCallback} from "grammy/web";

export const config = {runtime: "edge"};

export default webhookCallback(bot, "std/http", {
    timeoutMilliseconds: 29_000,
    secretToken,
});
