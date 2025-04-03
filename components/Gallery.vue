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
        class="h-[350vh] bg-background relative"
    >
        <div class="sticky top-0 overflow-hidden">
            <Motion
                as="div"
                :style="{ x }"
                class="flex h-screen items-center w-[5150px]"
            >
                <NuxtImg
                    width="4990"
                    loading="lazy"
                    src="https://a.storyblok.com/f/210339/12918x1460/6e87af76ff/gallery-ori.png"
                />
            </Motion>
        </div>
    </section>
</template>
