export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "server", // FOR SSR

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "AndyFinCaucus",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "The website for the Freshman Caucus!",
            },
            { name: "format-detection", content: "telephone=no" },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxt/http"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        parallel: true,
        cache: true,
        hardSource: true,
    },

    serverMiddleware: {
        "/api": "~/api",
    },
};
