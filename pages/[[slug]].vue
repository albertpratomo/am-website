<script setup lang="ts">
const slug = useRoute().params.slug

const recipient: Recipient | undefined = typeof slug === 'string'
    ? getRecipient(slug)
    : undefined

provide(recipientInjectionKey, recipient)
</script>

<template>
    <main class="font-serif max-w-lg mx-auto">
        <TheMenu />

        <Intro class="sticky top-0 z-[1]" />

        <Letter class="relative z-[5]" />

        <OurStory class="relative z-[5]" />

        <Gallery class="relative z-[5]" />

        <Venue class="relative z-[5]" />

        <Wishes class="relative z-[5]" />

        <Gift class="relative z-[5]" />

        <Music />
    </main>
</template>
