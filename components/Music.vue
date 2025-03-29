<script setup lang="ts">
const audio = useTemplateRef('audio')

const { playing } = useMediaControls(audio)

onMounted(() => {
    document.addEventListener('click', () => {
        playing.value = true
    }, { once: true })
})
</script>

<template>
    <button
        size="icon"
        class="fixed left-0 bottom-0 p-4 z-20 text-primary/80"
        :class="{ 'animate-[spin_3s_linear_infinite]': playing }"
        @click="playing = !playing"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 3.937A9 9 0 1 0 21 12" />

            <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />

            <path d="m20 4l-3.5 10l-2.5 2" /></g></svg>

        <audio
            ref="audio"
            preload="auto"
            autoplay
            loop
            src="https://cdn.pixabay.com/audio/2022/08/02/audio_a35547b8ad.mp3" crossorigin="anonymous"
        />
    </button>
</template>
