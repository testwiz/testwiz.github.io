import { env } from "$env/dynamic/public";
import { error } from "@sveltejs/kit";
import cookie from "js-cookie";
import lzs from "lz-string";

export async function load({ params }) {
    const url =
        cookie.get("auth_session") && cookie.get("auth_username")
            ? `${env.PUBLIC_BACKEND_URL}/auth`
            : `${env.PUBLIC_BACKEND_URL}`;
    const headers: any =
        cookie.get("auth_session") && cookie.get("auth_username")
            ? {
                  Authorization:
                      "Basic " +
                      btoa(
                          `${cookie.get("auth_username")}:${cookie.get(
                              "auth_session"
                          )}`
                      ),
              }
            : {};

    const data = await fetch(`${url}/quizzes`, {
        headers: headers,
    });

    let jsonData: Array<any> = await data.json();
    jsonData = jsonData.map((e) =>
        JSON.parse(lzs.decompressFromBase64(e.data))
    );

    return { data: jsonData };
}
