# [Telegram Bot](https://core.telegram.org/bots) Template for [Vercel](https://vercel.com)

This template is built on the [grammY](https://grammy.dev), thanks to which it
supports
both [Serverless (Node.js)](https://vercel.com/docs/functions/runtimes/node-js)
and [Edge Runtime](https://vercel.com/docs/functions/runtimes/edge-runtime).

## How to use

### A. Click the `Deploy` button ...

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPonomareVlad%2FgrammYVercel&env=TELEGRAM_BOT_TOKEN&envDescription=Telegram%20Bot%20Token%20from%20%40BotFather&envLink=https%3A%2F%2Fcore.telegram.org%2Fbots%2Ftutorial%23obtain-your-bot-token&project-name=telegram-bot&repository-name=telegram-bot&redirect-url=https%3A%2F%2Fgrammy.dev&demo-title=grammY&demo-description=Documantation%20for%20grammY&demo-url=https%3A%2F%2Fgrammy.dev&demo-image=https%3A%2F%2Fgrammy.dev%2Fimages%2FgrammY.png)

... and follow the instructions on next page.

### B. Click the `Use this template` button ...

...
and [connect the repository to your project on Vercel](https://vercel.com/new).

### C. Clone the template to your host ...

... and [run the bot locally](#local-development).

## Workflow

### Local development

1. Install dependencies (`npm i`)
   and [link Vercel project](https://vercel.com/docs/cli/project-linking)
2. Pull
   [envs from Vercel](https://vercel.com/docs/projects/environment-variables/managing-environment-variables) (
   `npm run env`) or set them in a `.env` file
3. Run the bot
   in [polling mode](https://grammy.dev/guide/deployment-types.html#how-does-long-polling-work) (
   `npm start`) or [use the Vercel dev server](https://vercel.com/docs/cli/dev)

### Vercel deployment

When
you [push a commit to a GitHub repository](https://vercel.com/docs/deployments/git/vercel-for-github#a-deployment-for-each-push),
Vercel runs [build script](scripts/build.mjs) and assigns
a [unique URL](https://vercel.com/docs/deployments/generated-urls) that will be
set as the URL for
incoming [webhooks](https://grammy.dev/guide/deployment-types.html#how-do-webhooks-work).

### Lifecycle

Until you [run the bot locally](#local-development), your code will [run on the
Vercel](https://vercel.com/docs/functions/concepts#functions-lifecycle) side,
where you can
view [runtime logs](https://vercel.com/docs/observability/runtime-logs)
and [usage](https://vercel.com/docs/pricing/manage-and-optimize-usage#viewing-usage).

## About this template

### Environment variables

#### Telegram bot token from [@BotFather](https://core.telegram.org/bots/tutorial#obtain-your-bot-token) (required)

```env
TELEGRAM_BOT_TOKEN = "..."
```

#### [Secret token](https://core.telegram.org/bots/api#:~:text=secret_token) for incoming requests (optional)

```env
TELEGRAM_SECRET_TOKEN = "..."
```

## Credits

Made with 🌚 by [Vladislav Ponomarev](https://github.com/PonomareVlad)
