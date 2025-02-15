<script setup lang="ts">
const client = useSupabaseClient()

const { data: wishes } = await useAsyncData('wishes', async () => {
    const { data } = await client.from('wishes')
        .select()
        .order('id', { ascending: false })

    return data
})
</script>

<template>
    <section class="py-16 space-y-4 px-4 max-w-screen-sm bg-background">
        <h2 class="text-2xl">
            Wishes
        </h2>

        <WishCreateDialog @created="wishes?.unshift($event)" />

        <ul class="space-y-2">
            <li
                v-for="wish in wishes"
                :key="wish.id"
                class="p-4 rounded bg-stone-200"
            >
                {{ wish.content }}

                <div class="text-right">
                    - {{ wish.name }}
                </div>
            </li>
        </ul>
    </section>
</template>
