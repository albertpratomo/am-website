<script setup lang="ts">
const recipient = inject(recipientInjectionKey)

const type = recipient?.type || 1 // Bali as default
</script>

<template>
    <section
        id="event"
        class="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        :style="{ backgroundImage: 'url(https://a.storyblok.com/f/210339/2048x3072/79b3207e5c/a-m-03858.jpg/m/0x1200)' }"
    >
        <VenueBdc
            v-if="type === 2"
            class="w-full"
        />

        <VenueBali
            v-else
            class="w-full"
        />
    </section>
</template>
