<script setup lang="ts">
const galleryRef = useTemplateRef('galleryRef')

const { scrollYProgress } = useScroll({
    target: galleryRef,
})

const x = useTransform(scrollYProgress, [0, 0.98, 1], ['0%', '-88%', '-88%'])
</script>

<template>
    <section
        ref="galleryRef"
        class="h-[350vh] relative"
    >
        <div class="sticky top-0 overflow-hidden">
            <Motion
                as="div"
                :style="{ x }"
                class="flex h-screen items-center w-[5150px] bg-paper"
            >
                <NuxtImg
                    width="4990"
                    quality="88"
                    loading="lazy"
                    src="https://a.storyblok.com/f/210339/12917x1459/630a6b0d81/uncompressed.png"
                />
            </Motion>
        </div>
    </section>
</template>
