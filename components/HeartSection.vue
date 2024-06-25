<script setup lang="ts">
import gsap from 'gsap';

let isParalax = false;


onMounted(() => {
    const {$splitting } = useNuxtApp();
    $splitting();
    const parallaxItems = document.querySelectorAll('.heart-item')
    const parallaxSpeed = {
        x: 40,
        y: 20
    }
    const smoothRatio = 0.03

    const mouse = {
        x: 0,
        y: 0
    }

    const smoothMouse = {
        x: 0,
        y: 0
    }

    let tl = gsap.timeline({ defaults: { duration: 1, ease: 'none' } })

    gsap.ticker.add(() => {
        smoothMouse.x = lerp(smoothMouse.x, mouse.x, smoothRatio)
        smoothMouse.y = lerp(smoothMouse.y, mouse.y, smoothRatio)

        parallaxItems.forEach((item: any) => {
            const itemSpeed = item.dataset.speed

            gsap.set(item, {
                x: smoothMouse.x * parallaxSpeed.x * itemSpeed,
                y: smoothMouse.y * parallaxSpeed.y * itemSpeed,
            });
        })
    })

    gsap.fromTo('.title-heart-section .char', {
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
            trigger: '.title-heart-section',
            start: 'top bottom',
        },
    })

    tl.fromTo('.heart-parent', {
        x: 200
    }, {
        x: 0,
        scrollTrigger: {
            trigger: '.heart-section',
            start: 'top bottom',
            scrub: true,
            end: '+=100%'
        },
        onComplete: () => {
            isParalax = true;
        }
    }, 0)



    window.addEventListener('mousemove', (e) => {
        mouse.x = ((e.clientX / window.innerWidth) * 2) - 1
        mouse.y = ((1 - (e.clientY / window.innerHeight)) * 2) - 1
    })
})

</script>

<template>
    <div class="heart-section bg-white h-[100vh] relative overflow-clip">
        <div class="flex items-center h-full px-4 sm:px-28 py-28">
            <p data-splitting class="title-heart-section title-section text-dark-blue z-20 max-w-[900px]">
                {{ $t('heartSection') }}
            </p>
        </div>
        <div class="heart-parent absolute inset-0">
            <NuxtImg quality="80" format="webp" src="image/heart-1.png" width="254" height="198"
                class="heart-item absolute top-16 right-24 z-20" data-speed="0.3" />
            <NuxtImg quality="80" format="webp" src="image/heart-3.png" width="228" height="222"
                class="heart-item absolute top-48 right-96 z-20" data-speed="-0.5" />
            <NuxtImg quality="80" format="webp" src="image/heart-2.png" width="207" height="247"
                class="heart-item absolute bottom-28 right-32 z-20" data-speed="0.4" />
        </div>
    </div>
</template>