<script setup lang="ts">
const open = ref(false)
</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child>
            <Button variant="link" class="text-lg">
                <div class="italic bg-dark/20 mt-4">
                    Dresscode
                </div>
            </Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Dresscode</DialogTitle>
            </DialogHeader>

            <div class="font-semibold text-lg mt-4">
                Women
            </div>

            <div>
                Nude or earth-tone colors (no white)
            </div>

            <div class="font-semibold text-lg mt-4">
                Men
            </div>

            <div>
                Nude or earth-tone colors (no suits or batik)
            </div>

            <div class="mt-4">
                It’s an outdoor event, so be sure to wear something comfortable.
            </div>

            <div class="mt-4 text-sm italic">
                P.S. Avoid pointy heels and be ready to mingle! ;)
            </div>
        </DialogContent>
    </Dialog>
</template>
