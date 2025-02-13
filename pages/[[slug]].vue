<script setup lang="ts">
const slug = useRoute().params.slug

const recipient: Recipient | undefined = typeof slug === 'string'
    ? getRecipient(slug)
    : undefined

provide(recipientInjectionKey, recipient)
</script>

<template>
    <main class="container">
        <Wishes />

        <Intro />

        <Letter />

        <OurStory />

        <Gallery />

        <HowWeMet />
    </main>
</template>
