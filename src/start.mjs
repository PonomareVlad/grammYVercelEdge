import {bot} from "./bot.mjs";

process.once("SIGTERM", () => bot.stop());
process.once("SIGINT", () => bot.stop());

await bot.start();
