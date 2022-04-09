export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 4000, //default 3000
    host: '0.0.0.0', //default localhost
  },
  
  head: {
    title: 'rabu-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css", rel:"stylesheet", integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin:"anonymous"}
      
    ],
    scripts: [
      {src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM", crossorigin:"anonymous"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // module.exports = {
    //   modules: ['@nuxtjs/axios'],
    //   plugins: ['~/plugins/axios.js']
    // }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios","@nuxtjs/pwa"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  pwa: {
    meta:"My PWA",
    aut1hor:"Me",
  },
  manifest:{
    name: "Nuxt.js App",
    short_name: "Nuxt.js PWA",
    lang: "en",
  },
  icon:{
    source: "~/static/icon.png",
    filename: "icon",
  }
}
