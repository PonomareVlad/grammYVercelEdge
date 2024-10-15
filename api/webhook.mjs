import { bot, secretToken } from '../src/bot.mjs'
import { setWebhookCallback } from 'vercel-grammy'

// Uncomment next line to use Edge Runtime
// export const config = { runtime: 'edge' }

// Handler to set webhook url based on request headers
export const POST = setWebhookCallback(bot, {
    path: 'api/update',
    secretToken,
})
