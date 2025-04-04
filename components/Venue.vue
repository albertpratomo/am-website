<script setup lang="ts">
const recipient = inject(recipientInjectionKey)

const type = recipient?.type || 2 // BDC as default
</script>

<template>
    <section
        id="event"
        class="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        :style="{ backgroundImage: 'url(https://a.storyblok.com/f/210339/2048x3072/c56abc575b/a-m-06768.jpg/m/0x1800)' }"
    >
        <VenueBali
            v-if="type === 1"
            class="w-full"
        />

        <VenueBdc
            v-else
            class="w-full"
        />
    </section>
</template>
