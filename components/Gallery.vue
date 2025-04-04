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
                    src="https://a.storyblok.com/f/210339/12917x1459/d9c3789146/gallery-final.png"
                />
            </Motion>
        </div>
    </section>
</template>
