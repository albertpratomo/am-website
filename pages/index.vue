<script setup lang="ts">
const recipient = {
    id: 'steven',
    name: 'Steven',
}
</script>

<template>
    <main>
        <div class="max-w-md m-auto">
            {{ $t('intro.dear', { name: recipient.name }) }}

            <NuxtImg src="https://a.storyblok.com/f/210339/2048x3072/3ac072cd07/a-m-06860.jpg/m/" />
        </div>
    </main>
</template>
