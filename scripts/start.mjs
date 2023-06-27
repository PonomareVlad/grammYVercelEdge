import {bot} from "../src/bot.mjs";

// Callback for exit tasks
const onExit = () => bot.stop();

// List of events for exit callback
const events = ["SIGTERM", "SIGINT"];

// Sets a callback for the specified events
events.forEach(eventName => process.once(eventName, onExit));

// Starts bot in long-polling mode
await bot.start();
