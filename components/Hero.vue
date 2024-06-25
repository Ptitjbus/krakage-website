<script setup lang="ts">
import gsap from 'gsap';

let landingStore = useUiStore();
let isParalax = false; 

onMounted(() => {
    const parallaxItems = document.querySelectorAll('.parallax-item')
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

    const {$splitting } = useNuxtApp();
    $splitting();

    let tl = gsap.timeline()

    gsap.ticker.add(() => {
        // Smooth mouse transition if parallax
        if (isParalax) {
            smoothMouse.x = lerp(smoothMouse.x, mouse.x, smoothRatio)
            smoothMouse.y = lerp(smoothMouse.y, mouse.y, smoothRatio)
        }
        parallaxItems.forEach((item:any) => {
            const itemSpeed = item.dataset.speed

            gsap.set(item, {
                x: smoothMouse.x * parallaxSpeed.x * itemSpeed,
                y: smoothMouse.y * parallaxSpeed.y * itemSpeed,
            });
        })
    })    

    tl.to('.hero-inner', {
        yPercent : 80,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            scrub: true
        }
    });

    
    tl.fromTo(".herologo", { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.inOut', onComplete: () => {
            isParalax = true;
            landingStore.displayHeader = true;
        }
    });
    tl.fromTo(".hero-inner", { opacity: 1, scale: 1 }, { opacity: 0.8, scale: 1.1, duration: 1.6, ease: 'power2.inOut' }, 1);    
    tl.fromTo(".herologo", { opacity: 1 }, { opacity: 0, duration: 0.6, ease: 'power3.inOut' }, 1);
    tl.fromTo(".title-hero", { opacity: 0 }, { opacity: 1, duration: 1.6, ease: 'power3.inOut' }, 1);
    tl.fromTo('.title-hero .char', {
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
    },1.6)
    

    window.addEventListener('mousemove', (e) => {
        mouse.x = ((e.clientX / window.innerWidth) * 2) - 1
        mouse.y = ((1- (e.clientY / window.innerHeight)) * 2) - 1
    })
})

</script>

<template>
    <div class="hero w-full h-[100vh] bg-blue-900 overflow-clip">
        <div class="hero-inner relative h-full ">
            <NuxtImg
                quality="80"
                format="webp"
                src="image/background.png"
                class="parallax-item parallax-class"
                data-speed="0"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/flare-2.png"
                class="parallax-item parallax-class"
                data-speed="0.1"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/stick-right-2.png"
                class="parallax-item parallax-class"
                data-speed="-0.2"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/sheet.png"
                class="parallax-item parallax-class"
                data-speed="0.5"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/tentacle-right-2.png"
                class="parallax-item parallax-class"
                data-speed="0.3"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/tentacles-right-1.png"
                class="parallax-item parallax-class"
                data-speed="-0.3"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/tentacle-left-1.png"
                class="parallax-item parallax-class"
                data-speed="-0.3"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/tentacle-left-2.png"
                class="parallax-item parallax-class"
                data-speed="0.3"
            />
            
            <NuxtImg
                quality="80"
                format="webp"
                src="image/stick-left-2.png"
                class="parallax-item parallax-class"
                data-speed="-0.1"
            />            
            <NuxtImg
                quality="80"
                format="webp"
                src="image/stick-right-1.png"
                class="parallax-item parallax-class"
                data-speed="0.2"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/stick-left-1.png"
                class="parallax-item parallax-class"
                data-speed="0.4"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/paddle-left-1.png"
                class="parallax-item parallax-class"
                data-speed="-0.6"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/paddle-right-1.png"
                class="parallax-item parallax-class"
                data-speed="-0.5"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/flare-1.png"
                class="parallax-item parallax-class"
                data-speed="-0.2"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/bubble-left-1.png"
                class="parallax-item parallax-class"
                data-speed="0.05"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/bubble-right-2.png"
                class="parallax-item parallax-class"
                data-speed="-0.05"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/bubble-right-1.png"
                class="parallax-item parallax-class"
                data-speed="-0.08"
            />
            <NuxtImg
                quality="80"
                format="webp"
                src="image/bubble-1.png"
                class="parallax-item parallax-class"
                data-speed="0.1"
            />
        </div>
        <NuxtImg
            src="svg/logo.svg"
            class="herologo absolute-center opacity-0 pointer-events-none z-20"
            width="204"
            height="251"
        />
        <div class="heroCaption absolute bottom-0 w-full left-0 px-4 sm:px-28 py-20">
            <p data-splitting class="title-hero text-white [&_.char]:opacity-0 opacity-0">
                {{ $t('heroTitle') }}
            </p>
        </div>
    </div>
</template>

<style>
.parallax-class {
    @apply absolute inset-0 object-cover w-full h-full pointer-events-none;
}
</style>