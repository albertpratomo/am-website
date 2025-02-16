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
    <section
        class="py-16 px-4 bg-center bg-cover bg-no-repeat bg-background text-primary"
        :style="{ backgroundImage: 'url(https://a.storyblok.com/f/210339/2048x3072/278f8fc821/a-m-06335.jpg/m/880x0)' }"
    >
        <h2 class="text-3xl flex justify-center items-end">
            WISHES

            <span class="italic text-2xl ml-1.5 mb-px mr-1">
                from
            </span>

            YOU
        </h2>

        <ul class="h-[70vh] overflow-scroll flex flex-col-reverse mt-10 items-start">
            <li
                v-for="wish in wishes"
                :key="wish.id"
                class="mb-4"
            >
                <div class="text-sm">
                    {{ wish.name }}
                </div>

                <div class="px-4 py-2 rounded bg-black/50">
                    {{ wish.content }}
                </div>
            </li>
        </ul>

        <div class="text-center mt-6">
            <WishCreateDialog @created="wishes?.unshift($event)" />
        </div>
    </section>
</template>
