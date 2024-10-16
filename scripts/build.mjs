import { bot, secretToken as secret_token } from '../src/bot.mjs'

// Check bot
await bot.init()

console.info('Info:', bot.botInfo)
console.info('Secret token:', secret_token)

// Default Vercel hostnames
const {
    VERCEL_URL = 'localhost',
    VERCEL_BRANCH_URL: hostname = VERCEL_URL,
} = process.env

// Webhook URL generation
const url = new URL('api/webhook', `https://${hostname}`)

// Installing a webhook
if (await bot.api.setWebhook(url.href, { secret_token })) {

    // Checking the webhook installation
    const { url } = await bot.api.getWebhookInfo()

    console.info('Webhook set to URL:', url)

}
