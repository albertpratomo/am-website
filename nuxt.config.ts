// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/eslint',
        'nuxt-i18n-micro',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
    ],

    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    eslint: {
        config: {
            standalone: false,
        },
    },

    googleFonts: {
        display: 'swap',
        families: {
            Caveat: [400],
        },
    },

    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', dir: 'ltr' },
        ],
        defaultLocale: 'en',
        translationDir: 'locales',
        meta: true,
    },

    image: {
        provider: 'storyblok',
        storyblok: {
            baseURL: 'https://a.storyblok.com',
            modifiers: { smart: true },
        },
    },
})
