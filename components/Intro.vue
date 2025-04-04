<script setup lang="ts">
const isOpen = ref(false)

const recipient = inject(recipientInjectionKey)

const scrollLock = useScrollLock(window)
scrollLock.value = true

function open() {
    isOpen.value = true
    scrollLock.value = false
}
</script>

<template>
    <Transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition-opacity duration-1000"
        leave-active-class="transition-opacity duration-1000"
    >
        <div
            v-if="!isOpen"
            class="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center"
        >
            <div
                v-if="recipient"
                class="text-primary mb-3 font-garamond italic text-2xl"
            >
                Dear {{ recipient.name }},
            </div>

            <div>
                <Button
                    variant="link"
                    @click="open"
                >
                    Open and scroll slowly
                </Button>
            </div>
        </div>
    </Transition>

    <section class="sticky top-0 z-[1]">
        <Transition
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
            enter-active-class="transition-opacity duration-1000"
            leave-active-class="transition-opacity duration-1000"
        >
            <div
                v-show="isOpen"
                class="text-center absolute inset-x-0 top-[25%] text-primary"
            >
                <h1 class="text-6xl">
                    ALBERT

                    <div class="text-2xl italic font-garamond -mt-2">
                        and
                    </div>

                    MELISSA
                </h1>
            </div>
        </Transition>

        <NuxtImg
            src="https://a.storyblok.com/f/210339/2048x3072/d08b3a12ec/a-m-06138.jpg"
            class="h-screen object-cover"
            height="1000"
        />
    </section>
</template>
