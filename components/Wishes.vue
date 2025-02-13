<script setup lang="ts">
const client = useSupabaseClient()

const { data: wishes } = await useAsyncData('wishes', async () => {
    const { data } = await client.from('wishes').select()

    return data
})
</script>

<template>
    <section class="py-16 space-y-4 px-4">
        <h2 class="text-2xl">
            Wishes
        </h2>

        <Button variant="secondary">
            Make a wish
        </Button>

        <ul>
            <li
                v-for="wish in wishes"
                :key="wish.id"
                class="p-4 rounded bg-stone-200"
            >
                {{ wish.content }}

                <div class="text-right">
                    {{ wish.name }}
                </div>
            </li>
        </ul>
    </section>
</template>
