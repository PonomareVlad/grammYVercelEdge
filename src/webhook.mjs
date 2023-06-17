import {bot} from "./bot.mjs";
import {secretToken as secret_token} from "./data.mjs";
import {writeFileSync} from "fs";

const {VERCEL_URL, VERCEL_ENV} = process.env;

if (VERCEL_ENV === "development") process.exit();

if (!VERCEL_URL) throw "VERCEL_URL is required to set webhook";

const infoPath = new URL("../info.json", import.meta.url);

const info = await bot.api.getMe();

console.info("Bot info:", info);

writeFileSync(infoPath, JSON.stringify(info));

const {href} = new URL("api/update", `https://${VERCEL_URL}`);
const result = await bot.api.setWebhook(href, {secret_token});

if (!result) throw "Failed to set webhook";

console.info("Webhook set to URL:", href);
console.info("Secret token:", secret_token);
