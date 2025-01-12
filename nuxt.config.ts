// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/eslint',
        'nuxt-i18n-micro',
    ],
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    eslint: {
        config: {
            standalone: false,
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
})
