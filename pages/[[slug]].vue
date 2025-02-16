<script setup lang="ts">
const slug = useRoute().params.slug

const recipient: Recipient | undefined = typeof slug === 'string'
    ? getRecipient(slug)
    : undefined

provide(recipientInjectionKey, recipient)
</script>

<template>
    <main class="font-serif max-w-lg mx-auto">
        <Intro />

        <Letter />

        <OurStory />

        <Gallery />

        <Wishes />
    </main>
</template>
