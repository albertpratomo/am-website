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
        id="wishes"
        class="py-16 px-4 bg-center bg-cover bg-no-repeat h-screen bg-paper text-dark overlay-dark"
        :style="{ backgroundImage: 'url(https://a.storyblok.com/f/210339/2048x3072/831a895d24/a-m-04770.jpg/m/880x0)' }"
    >
        <h2 class="text-3xl flex justify-center items-end text-primary">
            WISHES

            <span class="text-2xl italic font-garamond ml-2.5 mr-2">
                from
            </span>

            YOU
        </h2>

        <ul
            class="h-[70vh] overflow-y-auto flex flex-col-reverse mt-10 items-start"
            :style="{ scrollbarColor: 'hsl(var(--primary) / .2) transparent' }"
        >
            <li
                v-for="wish in wishes"
                :key="wish.id"
                class="mb-4"
            >
                <div class="text-sm text-primary">
                    {{ wish.name }}
                </div>

                <div class="px-4 py-2 rounded bg-dark/80 text-primary">
                    {{ wish.content }}
                </div>
            </li>
        </ul>

        <div class="text-center mt-6">
            <WishCreateDialog @created="wishes?.unshift($event)" />
        </div>
    </section>
</template>
