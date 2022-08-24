import { messages } from './i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LFXA',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css',
   'vue-slick-carousel/dist/vue-slick-carousel.css',
   'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
   'tippy.js/themes/light.css',
   'tippy.js/themes/light-border.css',
   'tippy.js/themes/google.css',
   'tippy.js/themes/translucent.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-tooltip.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [    
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',

  ],  
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [  '@nuxtjs/i18n' ],
  i18n: {
    parsePages: false,
    pages:{
      'about/index': {
        en: '/about',
        pt: '/sobre',
      },
      'projects/index': {
        en: '/projects',
        pt: '/projetos',
      },
    },
    locales: [{
      code: 'en',
      name: 'menu.english'
    },    
    {
      code: 'pt',
      name: 'menu.portuguese'
    },],
    defaultLocale: 'pt',
    vueI18n: {
      fallbackLocale: 'en',
      messages: messages,     
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },
}
