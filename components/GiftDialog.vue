<script setup lang="ts">
const open = ref(false)
</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child>
            <a class="underline cursor-pointer">
                here.
            </a>
        </DialogTrigger>

        <DialogContent>
            <div>
                <span class="text-lg font-semibold">
                    BCA – Melissa Ardani
                </span>

                <div>
                    8291050492

                    <ButtonCopy
                        class="ml-2"
                        content="8291050492"
                    />
                </div>
            </div>

            <div class="mt-8">
                <span class="text-lg font-semibold">
                    ING – Albert Edwillian Pratomo
                </span>

                <div>
                    IBAN: NL19INGB0794178448

                    <ButtonCopy
                        class="ml-2"
                        content="NL19INGB0794178448"
                    />
                </div>
            </div>
        </DialogContent>
    </Dialog>
</template>
