import { bot, secretToken as secret_token } from '../src/bot.mjs'
import { getURL } from 'vercel-grammy'

// Webhook URL generation
const url = getURL({ path: 'api/webhook' })

// Installing a webhook
if (await bot.api.setWebhook(url, { secret_token })) {

    // Checking the webhook installation
    const { url } = await bot.api.getWebhookInfo()

    console.info('Secret token:', secret_token)
    console.info('Webhook set to URL:', url)
    console.info('Info:', bot.botInfo)

}
