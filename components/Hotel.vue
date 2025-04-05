<script setup lang="ts">
const recipient = inject(recipientInjectionKey)

const type = recipient?.type || 2 // BDC as default
</script>

<template>
    <section
        v-if="type === 1"
        id="hotel"
        class="h-screen bg-paper flex items-center justify-center"
    >
        <div class="text-center text-dark space-y-8 max-w-sm">
            <h2
                data-aos="fade"
            >
                Hotel recommendation
            </h2>

            <div
                data-aos="fade"
                class="text-4xl/10"
            >
                WYNDHAM <br>

                TAMANSARI JIVVA <br>
                RESORT BALI
            </div>

            <div
                data-aos="fade"
                class="max-w-xs"
            >
                There will be shuttle provided from the hotel to the event and back.
            </div>

            <div
                data-aos="fade"
            >
                <a
                    href="https://www.wyndhamjivvabali.com/"
                    class="underline"
                    target="_blank"
                >
                    See the website
                </a>
            </div>
        </div>
    </section>
</template>
