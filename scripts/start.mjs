import {bot} from "../src/bot.mjs";

// Prevent error throw
bot.catch(console.error);

// Starts bot in long-polling mode
await bot.start();
