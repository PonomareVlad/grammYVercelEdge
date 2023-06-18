## Telegram Bot Template for [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions)

> 📖 [Documentation for grammY](https://grammy.dev)

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the template using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPonomareVlad%2FgrammYVercelEdge&env=TELEGRAM_BOT_TOKEN&envDescription=Telegram%20Bot%20Token%20from%20%40BotFather&envLink=https%3A%2F%2Fcore.telegram.org%2Fbots%2Ftutorial%23obtain-your-bot-token&project-name=grammy-vercel-edge&repository-name=grammy-vercel-edge)

### Clone and Deploy

Select the appropriate option and deploy it to the cloud with [Vercel](https://vercel.com/new)

#### As Vercel project

> Please note that you will need to create a Vercel project and set the bot token in the settings

##### Using long polling:

```bash
npm run polling
```

##### Using webhook with [CloudFlare tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/do-more-with-tunnels/trycloudflare/) ([`cloudflared`](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/)) :

```bash
npm run webhook
```

And open link from terminal (ends with `*.trycloudflare.com`) to set webhook URL

> If you want another tunnel, just use [`vercel dev`](https://vercel.com/docs/cli/dev)

#### As local project

Create `.env` file and set variable:

```dotenv
TELEGRAM_BOT_TOKEN="Telegram Bot Token from t.me/BotFather"
```

Run in long polling mode:

```bash
npm run start
```

> ✨ Now you can make some changes in [src/bot.mjs](src/bot.mjs)

## Template structure:

- [src/data.mjs](src/data.mjs) — Data source for bot modules
- [src/start.mjs](src/start.mjs) — Starts bot in long polling mode
- [src/build.mjs](src/build.mjs) — Sets webhook and saves bot info
- [api/update.mjs](api/update.mjs) — Function for receiving webhooks
- [api/webhook.mjs](api/webhook.mjs) — Function for set webhook in dev

Made with 💜 by [Vladislav Ponomarev](https://GitHub.com/PonomareVlad)
