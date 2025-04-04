<script setup lang="ts">
const recipient = inject(recipientInjectionKey)

const containerRef = useTemplateRef('containerRef')

const { scrollYProgress } = useScroll({
    target: containerRef,
})

const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], ['0.01', '0.01', '1', '1'])
const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], ['0', '0', '1'])
</script>

<template>
    <section
        id="letter"
        ref="containerRef"
        class="h-[200vh] relative"
    >
        <div class="sticky bg-paper top-0 h-screen flex items-center justify-center px-4 overflow-x-hidden">
            <div class="text-center text-2xl/loose font-mayonice">
                <div
                    v-if="recipient" class="mb-6"
                    data-aos="fade"
                >
                    Dear {{ recipient.name }},
                </div>

                <p
                    data-aos="fade"
                    data-aos-offset="500"
                >
                    They say every crossing has a purpose, and we are grateful for yours in our story.

                    Through the years, in laughters and struggles, you have been a part of our journey.

                    We have waited for this moment and we can't imagine celebrating this day without you.
                </p>
            </div>

            <Motion
                as="div"
                class="absolute h-full"
                :style="{ scale, opacity }"
            >
                <NuxtImg
                    height="1000"
                    width="667"
                    class="object-cover max-w-none h-full"
                    src="https://a.storyblok.com/f/210339/2667x4000/6bd1f5f78c/letter.jpg"
                />
            </Motion>
        </div>
    </section>
</template>
