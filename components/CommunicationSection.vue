
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
    <div class="communication-section  bg-[#1C1C40] text-white relative overflow-clip sm:pt-52">
        <div class="flex-col items-center h-full px-4 sm:px-28 py-28">
            <p data-splitting class="upper-title text-dark-blue z-20 pb-2">
                {{ $t('communicationSection.uppertitle') }}
            </p>
            <p data-splitting class="title-communication-section title-section text-dark-blue z-20 pb-8">
                {{ $t('communicationSection.title') }}
            </p>
            <p data-splitting class="text-xl md:max-w-[700px]">
                {{ $t('communicationSection.description') }}
            </p>
        </div>
    </div>
</template>