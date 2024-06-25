
<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    const {$splitting } = useNuxtApp();
    $splitting();

    gsap.fromTo('.title-culture-section .char', {
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
            trigger: '.title-culture-section',
            start: 'top bottom',
        },
    })

    gsap.fromTo('.ainu-pattern', {
        x: 200,
        y : 100,
    }, {
        x: 0,
        y : 0,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.ainu-pattern',
            start: 'top bottom',
        },
    })

    gsap.fromTo('.ainu-pattern-2', {
        x: -200,
        y : 0,
    }, {
        x: 0,
        y : 0,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.ainu-pattern-2',
            start: 'top bottom',
        },
    })
})

</script>

<template>
    <div class="culture-section h-[100vh] bg-[#1C1C40] text-white relative overflow-clip">
        <div class="flex-col items-center h-full px-4 sm:px-28 py-28">
            <p data-splitting class="upper-title text-dark-blue z-20 pb-2">
                {{ $t('cultureSection.uppertitle') }}
            </p>
            <p data-splitting class="title-culture-section title-section text-dark-blue z-20 pb-8">
                {{ $t('cultureSection.title') }}
            </p>
            <p data-splitting class="text-xl md:max-w-[700px]">
                {{ $t('cultureSection.description') }}
            </p>
        </div>
        <div class="absolute inset-0">
            <NuxtImg quality="80" format="webp" src="image/Ainu-pattern.png" width="344" height="628"
                class="ainu-pattern absolute top-[300px] sm:top-[200px] scale-[0.4] sm:scale-1 right-0 z-12  rotate-[-75deg] transform-gpu" />
            <NuxtImg quality="80" format="webp" src="image/Fujiko-pattern.png" width="554" height="212"
                class="ainu-pattern-2 absolute top-[700px] sm:top-[200px] scale-50 sm:scale-1 z-12 transform-gpu"/>
        </div>
    </div>
</template>