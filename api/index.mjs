export const config = {runtime: "edge"}

export default async ({url, body, headers}) => new Response(JSON.stringify({
    query: Object.fromEntries(new URL(url).searchParams.entries()),
    headers: Object.fromEntries(headers.entries()),
    body: await new Response(body).text(),
    env: process.env,
}))
