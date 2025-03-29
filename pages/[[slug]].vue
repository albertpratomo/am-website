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

        <Intro />

        <Letter />

        <OurStory />

        <Gallery />

        <Venue />

        <Wishes />

        <Gift />
    </main>
</template>
