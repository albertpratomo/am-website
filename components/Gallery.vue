<script setup lang="ts">
const galleryRef = useTemplateRef('galleryRef')

const { scrollYProgress } = useScroll({
    target: galleryRef,
})

const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
</script>

<template>
    <section
        ref="galleryRef"
        class="h-[350vh]"
    >
        <div class="sticky top-0 overflow-hidden">
            <Motion
                as="div"
                :style="{ x }"
                class="flex gap-12 py-10 h-screen items-start w-[3480px]"
            >
                <NuxtImg
                    width="300"
                    src="https://a.storyblok.com/f/210339/2048x3072/64f6193094/a-m-06947.jpg"
                />

                <NuxtImg
                    width="300"
                    class="self-end"
                    src="https://a.storyblok.com/f/210339/2048x3072/f0fcbd9b62/a-m-06232.jpg"
                />

                <NuxtImg
                    width="300"
                    src="https://a.storyblok.com/f/210339/2048x3072/b7409ce5bf/a-m-04599.jpg"
                />

                <NuxtImg
                    width="800"
                    class="self-end"
                    src="https://a.storyblok.com/f/210339/2048x1365/b8f6c83de9/a-m-04868.jpg"
                />

                <NuxtImg
                    width="300"
                    src="https://a.storyblok.com/f/210339/2048x3072/64f6193094/a-m-06947.jpg"
                />

                <NuxtImg
                    width="300"
                    class="self-end"
                    src="https://a.storyblok.com/f/210339/2048x3072/f0fcbd9b62/a-m-06232.jpg"
                />

                <NuxtImg
                    width="300"
                    src="https://a.storyblok.com/f/210339/2048x3072/b7409ce5bf/a-m-04599.jpg"
                />

                <NuxtImg
                    width="800"
                    class="self-end"
                    src="https://a.storyblok.com/f/210339/2048x1365/b8f6c83de9/a-m-04868.jpg"
                />
            </Motion>
        </div>
    </section>
</template>
