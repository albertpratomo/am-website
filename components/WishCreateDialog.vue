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
    const { data, error } = await client.from('wishes').insert({
        name: name.value,
        content: content.value,
    }).select()

    if (!error) {
        emit('created', data![0])
    }

    open.value = false
}
</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child>
            <Button variant="link">
                Make a wish
            </Button>
        </DialogTrigger>

        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Make a wish</DialogTitle>

                <DialogDescription>
                    Make a wish for Albert & Melissa
                </DialogDescription>
            </DialogHeader>

            <div>
                <Label for="name">
                    Name
                </Label>

                <Input
                    id="name"
                    v-model="name"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <Label for="content">
                    Message
                </Label>

                <Textarea
                    id="content"
                    v-model="content"
                    placeholder="Type your message here."
                />
            </div>

            <DialogFooter>
                <Button
                    type="submit"
                    @click="submit"
                >
                    Submit
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
