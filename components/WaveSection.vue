
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

    gsap.fromTo('.wave-1', {
        x: 20,
        y : 5,
    }, {
        x: -20,
        y : -5,
        duration: 2.5,
        stagger: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '.wave-4',
            start: 'top bottom',
        },
    })

    gsap.fromTo('.wave-2', {
        x: -20,
        y : 0,
    }, {
        x: 20,
        y : 5,
        duration: 2.5,
        stagger: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '.wave-4',
            start: 'top bottom',
        },
    })
})

</script>

<template>
    <div class="culture-section h-[50vh] sm:h-[100vh] bg-[#1C1C40] text-white relative overflow-clip">
        <div class="absolute inset-0">
            <NuxtImg quality="80" format="webp" src="image/wave-4.png" width="1925" height="723"
                class="wave-1 bottom-10 left-0 absolute z-12 scale-125" />
            <NuxtImg quality="80" format="webp" src="image/wave-3.png" width="1925" height="723"
                class="wave-2 bottom-10 left-0 absolute z-12 scale-125" />
            <NuxtImg quality="80" format="webp" src="image/wave-2.png" width="1925" height="723"
                class="wave-1 bottom-10 left-0 absolute z-12 scale-125" />
            <NuxtImg quality="80" format="webp" src="image/wave-1.png" width="1925" height="723"
                class="wave-2 bottom-10 left-0 absolute z-12 scale-125" />
        </div>
    </div>
</template>