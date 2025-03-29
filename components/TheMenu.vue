<script setup lang="ts">
import { useBodyScrollLock } from 'radix-vue'

const isOpen = ref(false)

const items = [
    {
        text: 'OUR STORY',
        to: '#our-story',
    },
    {
        text: 'EVENT',
        to: '#event',
    },
    {
        text: 'WISHES',
        to: '#wishes',
    },
    {
        text: 'GIFT',
        to: '#gift',
    },
]

const isScrollLocked = useScrollLock(window)
watch(isOpen, () => isScrollLocked.value = isOpen.value)
</script>

<template>
    <button
        class="fixed left-0 top-0 p-4 z-20"
        :class="{ 'text-primary': isOpen }"
        @click="isOpen = !isOpen"
    >
        {{ isOpen ? 'CLOSE' : 'MENU' }}
    </button>

    <Transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition-opacity duration-400"
        leave-active-class="transition-opacity duration-400"
    >
        <ul
            v-show="isOpen"
            class="fixed inset-0 bg-black text-primary z-10 flex flex-col gap-6 items-center justify-center"
        >
            <li
                v-for="item in items"
                :key="item.text"
                class="text-3xl"
            >
                <a
                    :href="item.to"
                    @click="isOpen = false"
                >
                    {{ item.text }}
                </a>
            </li>
        </ul>
    </Transition>
</template>
