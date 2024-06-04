<script setup lang="ts">
import gsap from "gsap";

let landingStore = useUiStore();
let isHeaderDisplayed = ref(false);

const onEnter = (el:Element,done:CallableFunction) => {
    const headerLeft = el.querySelector('.headerleft');
    const headerRight = el.querySelector('.headerRight');

    let tl = gsap.timeline()
    tl.fromTo(headerLeft, {
        x: -200
    }, {
        x: 0,
        duration: 1.6,
        delay: 0.6,
        ease: 'power3.inOut',
        onComplete: () => {
            done();
        }
    },0)
    tl.fromTo(headerRight, {
        x: 200
    }, {
        x: 0,
        duration: 1.6,
        delay: 0.6,
        ease: 'power3.inOut',
        onComplete: () => {
            done();
        }
    },0)

}

onMounted(() => {
    watch(() => landingStore.displayHeader, (value) => {
        if(value){
            isHeaderDisplayed.value = true;
        }
    })
})
</script>

<template>
    <Transition @enter="onEnter">
        <header class="header fixed header z-20 text-white h-screen flex justify-between w-full" v-show="isHeaderDisplayed">
            <HeaderLeft class="headerleft backdrop-blur-sm" />
            <HeaderRight class="headerRight backdrop-blur-sm" />    
        </header>
    </Transition>
</template>