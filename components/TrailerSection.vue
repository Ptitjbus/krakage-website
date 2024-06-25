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
            <div class="relative" style="padding:56.25% 0 0 0">
                <iframe src="https://player.vimeo.com/video/968271263?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" class="absolute top-0 left-0 w-full h-full" title="Utari first cutscene"></iframe>
            </div>
        </div>
    </div>
</template>