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
            script: [
                {
                    src: 'https://ackee.clgr.io/jquerydom.js',
                    async: true,
                    'data-ackee-server': 'https://ackee.clgr.io',
                    'data-ackee-domain-id': '47efb994-ddae-49a6-b9ff-c433ae614ede'
                }
            ]
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
