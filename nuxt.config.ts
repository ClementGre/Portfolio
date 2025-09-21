// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    devtools: {
        enabled: true
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },

    fontawesome: {
        component: 'fa',
        icons: {
            solid: ['arrow-up-right-from-square'],
            regular: ['file-lines'],
            brands: ['github', 'linkedin']
        }
    },

    css: [`assets/styles/main.styl`],
    modules: ['@vesp/nuxt-fontawesome']
})
