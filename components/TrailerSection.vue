<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    const {$splitting } = useNuxtApp();
    $splitting();

    gsap.fromTo('.title-trailer-section .char', {
        x: -10,
        y : 20,
        opacity: 0
    }, {
        x: 0,
        y : 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.015,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.title-trailer-section',
            start: 'top bottom',
        },
    })
})

</script>

<template>
    <div class="trailer-section bg-white  relative overflow-clip">
        <div class="flex-col items-center h-full px-4 sm:px-28 py-28">
            <p data-splitting class="upper-title text-dark-blue z-20 pb-2">
                {{ $t('trailerSection.uppertitle') }}
            </p>
            <p data-splitting class="title-trailer-section title-section text-dark-blue z-20 pb-8">
                {{ $t('trailerSection.title') }}
            </p>
            <CldVideoPlayer
                width="1920"
                height="1080"
                src="https://res.cloudinary.com/dau53hmfi/video/upload/v1719270607/Utari-cutscene-FINAL_1_xbxflx.mp4"
                fontFace="IroSans Arial Serif Pro"
            />
        </div>
    </div>
</template>