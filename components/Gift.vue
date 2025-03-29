<template>
    <section
        id="gift"
        class="h-screen bg-cover bg-center bg-no-repeat flex items-start justify-center pt-14"
        :style="{ backgroundImage: 'url(https://a.storyblok.com/f/210339/2048x3072/49f8b1831f/a-m-05406.jpg/m/0x1200)' }"
    >
        <div class="relative -rotate-3">
            <NuxtImg
                src="https://a.storyblok.com/f/210339/299x235/e18a6749d9/paperclip.png"
                loading="lazy"
                width="350"
            />

            <div class="absolute top-12 left-12 font-mayonice text-xl">
                A moment &nbsp;to celebrate,
                <br>
                &nbsp;a memory to hold.
                <br>

                <div class="mt-5 ml-6">
                    If you wish to gift,
                    <br>&nbsp;&nbsp;details are here.
                </div>

                <div class="mt-5">
                    <GiftDialog />
                </div>
            </div>
        </div>
    </section>
</template>
