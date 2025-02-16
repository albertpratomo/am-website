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
                class="flex h-screen items-center w-[3480px]"
            >
                <NuxtImg
                    height="564"
                    loading="lazy"
                    src="https://a.storyblok.com/f/210339/4501x730/858d0a3137/gallery-small-2.png"
                    :modifiers="{ smart: false }"
                />
            </Motion>
        </div>
    </section>
</template>
