
<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    const {$splitting } = useNuxtApp();
    $splitting();

    gsap.fromTo('.title-gameplay-section .char', {
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
            trigger: '.title-gameplay-section',
            start: 'top bottom',
        },
    })

    gsap.fromTo('.fujiko-arm', {
        x: 300,
        y : -100,
    }, {
        x: 50,
        y : 0,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.akkoro-img',
            start: 'top bottom',
        },
    })

    gsap.fromTo('.akkoro-img', {
        x: 300,
        y : 100,
    }, {
        x: 50,
        y : 0,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.akkoro-img',
            start: 'top bottom',
        },
    })
})

</script>

<template>
    <div class="gameplay-section h-[100vh] sm:h-[140vh] bg-[#1C1C40] text-white relative overflow-clip">
        <div class="flex-col items-center h-full px-4 sm:px-28 py-28">
            <p data-splitting class="upper-title text-dark-blue z-20 pb-2">
                {{ $t('gameplaySection.uppertitle') }}
            </p>
            <p data-splitting class="title-gameplay-section title-section text-dark-blue z-20 pb-8">
                {{ $t('gameplaySection.title') }}
            </p>
            <p data-splitting class="text-xl md:max-w-[700px]">
                {{ $t('gameplaySection.description') }}
            </p>
        </div>
        <div class="absolute inset-0">
            <NuxtImg quality="80" format="webp" src="image/fujiko-arm.png" width="676" height="382"
                class="fujiko-arm absolute scale-50 sm:scale-100 top-[500px] right-[-100px] sm:top-48 sm:right-0 z-12" data-speed="0.3" />
            <NuxtImg quality="80" format="webp" src="image/Akkoro.png" width="528" height="509"
                class="akkoro-img absolute top-[550px] right-[100px] sm:top-[500px] sm:right-[500px]  z-12 rotate-[240deg] scale-50 sm:scale-75 transform-gpu" data-speed="-0.5" />
        </div>
    </div>
</template>