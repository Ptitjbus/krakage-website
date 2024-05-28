<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (process.client) {
    gsap.registerPlugin(ScrollTrigger);    

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

        gsap.ticker.add(() => {
            smoothMouse.x = lerp(smoothMouse.x, mouse.x, smoothRatio)
            smoothMouse.y = lerp(smoothMouse.y, mouse.y, smoothRatio)

            parallaxItems.forEach((item:any) => {
                const itemSpeed = item.dataset.speed

                gsap.set(item, {
                    x: smoothMouse.x * parallaxSpeed.x * itemSpeed,
                    y: smoothMouse.y * parallaxSpeed.y * itemSpeed,
                    scale: 1.1
                });
            })
        })

        gsap.to('.hero-inner', {
            yPercent : 80,
            ease: 'none',
            scrollTrigger: {
                markers : true,
                trigger: '.hero',
                start: 'top top',
                scrub: true
            }
        });

        window.addEventListener('mousemove', (e) => {
            mouse.x = ((e.clientX / window.innerWidth) * 2) - 1
            mouse.y = ((1- (e.clientY / window.innerHeight)) * 2) - 1
        })
    })
}

</script>

<template>
    <div class="hero w-full h-[100vh] bg-amber-100 overflow-clip">
        <div class="hero-inner relative h-full">
            <NuxtImg
                src="image/frame_akkoro.png"
                class="parallax-item absolute inset-0 object-cover w-full h-full"
                data-speed="-1"
            />
            <NuxtImg 
                src="image/frame_trees.png" 
                class="parallax-item absolute inset-0 object-cover w-full h-full"
                data-speed="-0.5"    
            />
            <NuxtImg 
                src="image/frame_fujiko.png" 
                class="parallax-item absolute inset-0 object-cover w-full h-full"
                data-speed="0.5"    
            />
            <NuxtImg 
                src="image/frame_foreground.png" 
                class="parallax-item absolute inset-0 object-cover w-full h-full"
                data-speed="1"    
            />
        </div>
    </div>
</template>