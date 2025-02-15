<script setup lang="ts">
const containerRef = useTemplateRef('containerRef')

const { scrollYProgress } = useScroll({
    target: containerRef,
})

const scale = useTransform(scrollYProgress, [0, 0.9, 1], ['0.01', '1', '1'])
</script>

<template>
    <section
        ref="containerRef"
        class="h-[200vh] bg-background"
    >
        <div class="sticky top-0 h-screen flex items-center justify-center">
            <p class="text-center text-3xl/normal">
                Now, under the endless blue sky, they invite you to celebrate their next chapter.
            </p>

            <Motion
                as="div"
                class="absolute h-full"
                :style="{ scale }"
            >
                <NuxtImg
                    height="1000"
                    width="667"
                    class="object-cover max-w-none h-full"
                    src="https://a.storyblok.com/f/210339/2048x3072/3ab801adbd/a-m-04606.jpg"
                />
            </Motion>
        </div>
    </section>
</template>
