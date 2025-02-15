<script setup lang="ts">
const galleryRef = useTemplateRef('galleryRef')

const { scrollYProgress } = useScroll({
    target: galleryRef,
})

const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

const images = [
    {
        src: 'https://a.storyblok.com/f/210339/3480x4640/ca8ded8348/bharatika.jpg',
        caption: '2017 - Ketua Bharatika dan anak IT',
    },
    {
        src: 'https://a.storyblok.com/f/210339/1108x1477/eea31df3c7/wisuda.jpg',
        caption: '2019 - S. Desain dan S. Kom IPK tertinggi',
    },
    {
        src: 'https://a.storyblok.com/f/210339/828x1472/e67181836e/covid.jpg',
        caption: '2021 - Merantau ke Kelapa Gading Jakarta',
    },
    {
        src: 'https://a.storyblok.com/f/210339/2160x3840/715b0046ac/awal-pacaran-2.jpg',
        caption: '2023 - Jadian di mobil travel',
    },
    {
        src: 'https://a.storyblok.com/f/210339/1600x1039/81f7fe2923/ldr.jpg',
        caption: '2023 - LDR Indonesia Belanda',
    },
    {
        src: 'https://a.storyblok.com/f/210339/1512x2688/1b1a5727aa/europe-first-time-amsterdam.jpg',
        caption: '2023 - Mel ke Amsterdam',
    },
    {
        src: 'https://a.storyblok.com/f/210339/2000x2992/8e79172214/volendam.JPG',
        caption: '2023 - Foto turis Indo 101',
    },
    {
        src: 'https://a.storyblok.com/f/210339/2688x1512/bce113a831/eiffel-landscape.jpg',
        caption: '2024 - From Porong to Paris, with love',
    },
    {
        src: 'https://a.storyblok.com/f/210339/1512x2688/681f4c6829/picnic.jpg',
        caption: '2024 - Mel ke Europe part 2, summer time!',
    },
    {
        src: 'https://a.storyblok.com/f/210339/4672x7008/200c85a220/engaged.jpg',
        caption: '2024 - Engaged in the Dolomites!',
    },
]
</script>

<template>
    <section
        ref="galleryRef"
        class="h-[350vh] bg-background"
    >
        <div class="sticky top-0 overflow-hidden">
            <Motion
                as="div"
                :style="{ x }"
                class="flex gap-12 py-10 h-screen items-start w-[3480px]"
            >
                <figure
                    v-for="(image, i) in images"
                    :key="i"
                    :class="{ 'self-end': i % 2 !== 0 }"
                >
                    <NuxtImg
                        width="300"
                        :src="image.src"
                    />

                    <figcaption class="mt-1">
                        {{ image.caption }}
                    </figcaption>
                </figure>
            </Motion>
        </div>
    </section>
</template>
