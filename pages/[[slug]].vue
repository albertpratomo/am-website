<script setup lang="ts">
const slug = useRoute().params.slug

const recipient: Recipient | undefined = typeof slug === 'string'
    ? getRecipient(slug)
    : undefined

provide(recipientInjectionKey, recipient)

const { y } = useWindowScroll()
const stickyIntro = computed(() => y.value < 1300)
</script>

<template>
    <main class="font-serif max-w-lg mx-auto">
        <TheMenu />

        <Intro
            class="z-[7] sticky bottom-0"
            :class="{ 'top-0': stickyIntro }"
        />

        <Letter class="z-[8]" />

        <OurStory class="z-[8] relative" />

        <Gallery class="z-[8]" />

        <Venue class="z-[3] sticky bottom-0" />

        <Wishes class="z-[2] sticky bottom-0" />

        <Gift class="z-[1] sticky bottom-0" />

        <Music />
    </main>
</template>
