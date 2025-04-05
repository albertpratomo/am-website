<script setup lang="ts">
import type { Tables } from '~/types/database.types'

const emit = defineEmits<{
    created: [Tables<'wishes'>]
}>()

const name = ref('')
const content = ref('')
const open = ref(false)
const client = useSupabaseClient()

async function submit() {
    open.value = false

    const { data, error } = await client.from('wishes').insert({
        name: name.value,
        content: content.value,
    }).select()

    if (!error) {
        emit('created', data![0])

        name.value = ''
        content.value = ''
    }
}
</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child>
            <Button variant="link">
                <div class="text-lg">
                    Make a wish
                </div>
            </Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>What's your wish?</DialogTitle>
            </DialogHeader>

            <Input
                v-model="name"
                class="mt-4"
                placeholder="Your name"
            />

            <Textarea
                v-model="content"
                placeholder="Your wish"
            />

            <DialogFooter>
                <Button
                    variant="link-dark"
                    type="submit"
                    @click="submit"
                >
                    Send
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
