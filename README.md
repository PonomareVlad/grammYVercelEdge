## Telegram Bot Template for [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPonomareVlad%2FgrammYVercelEdge&env=TELEGRAM_BOT_TOKEN&envDescription=Telegram%20Bot%20Token%20from%20%40BotFather&envLink=https%3A%2F%2Fcore.telegram.org%2Fbots%2Ftutorial%23obtain-your-bot-token&project-name=grammy-vercel-edge&repository-name=grammy-vercel-edge)

### Run locally

#### 1. Install [Vercel CLI](https://vercel.com/docs/cli)

```bash
npm i -g vercel
```

#### 2. Install [CloudFlare tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/do-more-with-tunnels/trycloudflare/) (`cloudflared`)

[Download link](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/)

#### 3. Then run local dev server with tunnel

```bash
npm run dev-with-tunnel
```

And open link from terminal (ends with `*.trycloudflare.com`) to set WebHook

Now you can make some changes in [src/bot.mjs](src/bot.mjs)

[Documentation for grammY](https://grammy.dev)

### Template structure:

- [api/update.mjs](api/update.mjs) — Function for receiving WebHooks
- [api/webhook.mjs](api/webhook.mjs) — Function for setting WebHook URL

###### P.S. Don't forget to remove or restrict [api/webhook.mjs](api/webhook.mjs) function before going to production

Made with 💜 by [Vladislav Ponomarev](https://GitHub.com/PonomareVlad)
