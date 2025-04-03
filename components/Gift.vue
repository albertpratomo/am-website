<template>
    <section
        id="gift"
        class="h-screen bg-cover bg-center bg-no-repeat flex items-start justify-center pt-6"
        :style="{ backgroundImage: 'url(https://a.storyblok.com/f/210339/2048x3072/49f8b1831f/a-m-05406.jpg/m/0x1200)' }"
    >
        <div class="relative -rotate-3">
            <NuxtImg
                src="https://a.storyblok.com/f/210339/299x235/e18a6749d9/paperclip.png"
                loading="lazy"
                width="400"
            />

            <div class="absolute top-10 left-7 font-mayonice text-2xl">
                <div class="ml-3">
                    A day &nbsp;to cherish,
                    <br>
                    &nbsp;a memory to hold.
                </div>

                <div class="mt-5 ml-8">
                    If you wish to gift,
                    <br>

                    &nbsp;&nbsp;details are <GiftDialog />
                </div>

                <div class="mt-5">
                    Can't wait &nbsp;to celebrate with you!
                </div>

                <div class="text-right mt-2 mr-4">
                    A&M
                </div>
            </div>
        </div>
    </section>
</template>
