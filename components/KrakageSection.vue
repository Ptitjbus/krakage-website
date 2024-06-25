
<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    const {$splitting } = useNuxtApp();
    $splitting();

    gsap.fromTo('.title-communication-section .char', {
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
            trigger: '.title-communication-section',
            start: 'top bottom',
        },
    })
})

</script>

<template>
    <div class="communication-section text-black relative overflow-clip sm:pt-52 sm:pb-52">
        <div class="flex-col items-center h-full px-4 sm:px-28 py-28">
            <p data-splitting class="upper-title text-dark-blue z-20 pb-2">
                {{ $t('krakageSection.uppertitle') }}
            </p>
            <p data-splitting class="title-communication-section title-section-Iro text-dark-blue z-20 pb-8">
                {{ $t('krakageSection.title1') }} <span class="text-[#FC2020]">{{ $t('krakageSection.title2') }}</span> {{ $t('krakageSection.title3') }}
            </p>
            <p data-splitting class="text-xl md:max-w-[700px]">
                {{ $t('krakageSection.description') }}
            </p>
        </div>
        <div class="absolute inset-0">
            <NuxtImg quality="80" format="webp" src="svg/quote-icon.svg" width="320" height="261"
                class="ainu-pattern absolute top-[400px] sm:top-[500px] scale-[0.4] sm:scale-100 -right-10 sm:right-32 z-12  transform-gpu" />
        </div>
    </div>
</template>