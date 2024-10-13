import {bot, secretToken} from "../src/bot.mjs";
import {getURL} from "vercel-grammy";
import {rm} from "node:fs/promises";

const {VERCEL_ENV} = process.env;

// List of allowed environments
const allowedEnvs = [
    "production",
    // "preview"
];

// Check bot
await bot.init()

// Exit in case of unsuitable environments
if (!allowedEnvs.includes(VERCEL_ENV)) process.exit();

// Paths to remove at allowed environment
const paths = [
    "public/index.html"
];

// Remove necessary paths
await Promise.all(paths.map(path => rm(path))).catch();

// Webhook URL generation
const url = getURL({path: "api/update"});

// Webhook setup options
const options = {secret_token: secretToken};

// Installing a webhook
if (await bot.api.setWebhook(url, options)) {

    // Checking the webhook installation
    const {url} = await bot.api.getWebhookInfo();

    console.info("Webhook set to URL:", url);
    console.info("Secret token:", secretToken);
    console.info("Info:", bot.botInfo);

}
