<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    const {$splitting } = useNuxtApp();
    $splitting();

    gsap.fromTo('.title-comunity-section .char', {
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
            trigger: '.title-comunity-section',
            start: 'top bottom',
        },
    })
})

</script>

<template>
    <div class="comunity-section bg-white  relative overflow-clip">
        <div class="flex-col items-center h-full px-4 sm:px-28 py-28">
            <p data-splitting class="upper-title text-dark-blue z-20 pb-2">
                {{ $t('comunitySection.uppertitle') }}
            </p>
            <p data-splitting class="title-comunity-section title-section text-dark-blue z-20 pb-8">
                {{ $t('comunitySection.title') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-10 items-center justify-around">
                <div class="">
                    <p class="text-xl font-bold ">
                        {{ $t('comunitySection.firstCommentAuthor') }}
                    </p>
                    <p class="text-xl">
                        "{{ $t('comunitySection.firstComment') }}"
                    </p>
                </div>
                <div class="">
                    <p class="text-xl font-bold ">
                        {{ $t('comunitySection.secondCommentAuthor') }}
                    </p>
                    <p class="text-xl">
                        "{{ $t('comunitySection.secondComment') }}"
                    </p>
                </div>
                <div class="">
                    <p class="text-xl font-bold ">
                        {{ $t('comunitySection.thirdCommentAuthor') }}
                    </p>
                    <p class="text-xl">
                        "{{ $t('comunitySection.thirdComment') }}"
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>