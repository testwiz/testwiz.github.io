import { env } from "$env/dynamic/public";
import { error } from "@sveltejs/kit";
import lzs from "lz-string";

export async function load({ params }) {
    const data = await (
        await fetch(`${env.PUBLIC_BACKEND_URL}/quiz/${params.quizid}`)
    ).json();

    if (data == null) throw error(404, "Not found");

    return JSON.parse(lzs.decompressFromBase64(data.data));
}
