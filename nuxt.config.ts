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
        'motion-v/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/supabase',
        'nuxt-aos',
    ],

    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.cdnfonts.com/css/optima?styles=16596,24894',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.cdnfonts.com/css/adobe-garamond-pro-2?styles=29966',
                },
            ],
            meta: [
                {
                    name: 'robots',
                    content: 'noindex, nofollow',
                },
            ],
        },
    },

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

    image: {
        provider: 'storyblok',
        storyblok: {
            baseURL: 'https://a.storyblok.com',
            modifiers: { smart: true },
        },
    },

    supabase: {
        redirect: false,
    },

    aos: {
        offset: 300,
        duration: 800,
        once: false,
    },
})
