<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div :class="cn('flex flex-col gap-y-1.5 text-center text-dark', props.class)">
        <slot />
    </div>
</template>
