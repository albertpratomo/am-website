<script setup lang="ts">
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
]
</script>

<template>
    <button
        class="fixed left-4 top-4 z-20"
        :class="{ 'text-primary': isOpen }"
        @click="isOpen = !isOpen"
    >
        {{ isOpen ? 'CLOSE' : 'MENU' }}
    </button>

    <Transition name="fade">
        <ul
            v-show="isOpen"
            class="fixed w-screen h-screen bg-black text-primary z-10 flex flex-col gap-6 items-center justify-center"
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
