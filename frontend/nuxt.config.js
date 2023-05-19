import colors from "vuetify/es5/util/colors";

export default {
  head: {
    titleTemplate: "%s",
    title: "frontend",
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },

  css: [
    '@/assets/global.css',
  ],

  plugins: [],

  components: true,

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
  router: {
    base: process.env.BASE_URL || "",
  },
  server: {
    host: "0.0.0.0",
  },

  publicRuntimeConfig: {
    axios: {},
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
};
