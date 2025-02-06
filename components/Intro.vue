<script setup lang="ts">
const containerRef = useTemplateRef('containerRef')
const { direction } = useSwipe(containerRef)

watch(direction, () => {
    if (direction.value === 'up') {
        document.getElementById('Letter')?.scrollIntoView({ behavior: 'smooth' })
    }
})
</script>

<template>
    <section
        ref="containerRef"
        class="relative"
    >
        <h1 class="font-caveat text-3xl text-center absolute inset-x-0 top-[30%] text-white">
            Albert & Melissa
        </h1>

        <NuxtImg
            src="https://a.storyblok.com/f/210339/2048x3072/d08b3a12ec/a-m-06138.jpg"
            class="h-screen object-cover"
            height="1000"
        />
    </section>
</template>
