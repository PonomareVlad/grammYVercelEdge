import bot from "../src/bot.mjs";

const getURL = ({
                    headers = {},
                    path = "api/update",
                    header = "x-forwarded-host",
                }) => {
    const host = headers?.get(header) || process.env.VERCEL_URL;
    return new URL(path, `https://${host}`).href;
}

export default async ({headers}) => {
    const result = await bot.api.setWebhook(getURL({headers}));
    return new Response(JSON.stringify({result}));
}

export const config = {runtime: "edge"};
