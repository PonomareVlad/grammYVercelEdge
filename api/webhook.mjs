import {bot} from "../src/bot.mjs";
import {secretToken as secret_token} from "../src/data.mjs";

export const config = {runtime: "edge"};

const {VERCEL_URL, VERCEL_ENV} = process.env;

const headers = {"Content-Type": "application/json"};

const json = value => new Response(JSON.stringify(value), {headers});

export default async ({headers}) => {
    try {
        if (VERCEL_ENV !== "development") return json({});
        const host = headers.get("x-forwarded-host") || VERCEL_URL;
        const {href} = new URL("api/update", `https://${host}`);
        const ok = await bot.api.setWebhook(href, {secret_token});
        return json({ok});
    } catch (e) {
        console.error(e);
        return json(e);
    }
}
