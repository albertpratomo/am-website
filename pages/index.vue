<script setup lang="ts">
const recipient = {
    id: 'steven',
    name: 'Steven',
}
</script>

<template>
    <div>
        {{ $t('intro.dear', { name: recipient.name }) }}
    </div>
</template>
