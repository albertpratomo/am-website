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

        <Intro class="sticky top-0" />

        <Letter class="" />

        <OurStory class="relative" />

        <Gallery class="relative" />

        <Venue class="relative" />

        <Wishes class="relative" />

        <Gift class="relative" />

        <Music />
    </main>
</template>
