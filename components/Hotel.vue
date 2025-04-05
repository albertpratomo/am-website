<script setup lang="ts">
const recipient = inject(recipientInjectionKey)

const type = recipient?.type || 2 // BDC as default
</script>

<template>
    <section
        v-if="type === 1"
        id="hotel"
        class="py-20 bg-paper flex items-center justify-center"
    >
        <div class="text-center text-dark space-y-8 max-w-sm">
            <h2
                data-aos="fade"
                class="text-xl"
            >
                OUR DAY
            </h2>

            <div class="divide-stick text-lg">
                <div
                    class="relative"
                    data-aos="fade"
                >
                    Holy Matrimony

                    <NuxtImg
                        class="absolute right-[20px] -top-[20px]"
                        height="60"
                        src="https://a.storyblok.com/f/210339/571x503/42d38eb2d5/i-ring.png"
                    />
                </div>

                <div
                    class="relative"
                    data-aos="fade"
                >
                    <NuxtImg
                        class="absolute left-[40px] -top-[20px]"
                        height="60"
                        src="https://a.storyblok.com/f/210339/558x701/cd8afd7d98/i-cocktail.png"
                    />

                    Cocktail Hour
                </div>

                <div
                    class="relative"
                    data-aos="fade"
                >
                    Intimate Dinner

                    <NuxtImg
                        class="absolute right-[30px] -top-[20px]"
                        height="60"
                        src="https://a.storyblok.com/f/210339/552x610/0417f70aaa/i-paper.png"
                    />
                </div>

                <div
                    class="relative"
                    data-aos="fade"
                >
                    <NuxtImg
                        class="absolute left-[30px] -top-[20px]"
                        height="60"
                        src="https://a.storyblok.com/f/210339/537x505/8e2b436eac/i-dice.png"
                    />

                    Games
                </div>

                <div
                    class="relative"
                    data-aos="fade"
                >
                    Karaoke Time!

                    <NuxtImg
                        class="absolute right-[20px] -top-[20px]"
                        height="60"
                        src="https://a.storyblok.com/f/210339/556x483/0abbfdca5f/i-music.png"
                    />
                </div>
            </div>

            <div class="pt-8" />

            <h2
                data-aos="fade"
                class="text-xl"
            >
                HOTEL RECOMMENDATION
            </h2>

            <NuxtImg
                src="https://a.storyblok.com/f/210339/1024x1024/12e49b9e41/hotel-jeeva.png"
                width="384"
                data-aos="fade"
            />

            <div
                data-aos="fade"
                class="text-xl"
            >
                Wyndham Tamansari Jivva Resort Bali

                <div class="text-sm">
                    <a
                        href="https://www.wyndhamjivvabali.com/"
                        class="underline"
                        _target="blank"
                    >
                        Subak Lepang no. 16, Klungkung, Bali
                    </a>
                </div>
            </div>

            <div
                data-aos="fade"
                class="text-sm max-w-xs text-center mx-auto"
            >
                15 - 20 minutes drive from our venue Jeeva Saba.<br>
                There will be shuttle provided from this hotel to our venue and back.
            </div>

            <div
                data-aos="fade"
            />
        </div>
    </section>
</template>

<style lang="css">
.divide-stick {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.divide-stick > div {
    @apply w-full;
}

.divide-stick > div:not(:last-child)::after {
    @apply bg-dark;

    content: '';
    display: block;
    width: 1.5px;
    height: 20px;
    margin: 8px auto;
}
</style>
