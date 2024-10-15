// noinspection JSUnusedGlobalSymbols

import { bot, secretToken } from '../src/bot.mjs'
import { webhookCallback } from 'grammy'

// Uncomment next line to use Edge Runtime
// export const config = { runtime: 'edge' }

// Default grammY handler for incoming updates via webhooks
export const POST = webhookCallback(bot, 'std/http', {
    secretToken,
})
