// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/styles/main.scss"],
    ssr: true,
    runtimeConfig: {
        public: {
            backendHost: "https://testwiz-backend-production.up.railway.app/",
        },
    },
});
