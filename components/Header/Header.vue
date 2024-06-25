<script setup lang="ts">
import gsap from "gsap";

let landingStore = useUiStore();
let isHeaderDisplayed = ref(false);

const onEnter = (el:Element,done:CallableFunction) => {
    const headerLeft = el.querySelector('.headerleft');
    const headerRight = el.querySelector('.headerRight');
    const headerTop = el.querySelector('.headerTop');

    let tl = gsap.timeline({delay: 0.5})
    tl.fromTo(headerLeft, {
        x: -200
    }, {
        x: 0,
        duration: 1.6,
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
        ease: 'power3.inOut',
        onComplete: () => {
            done();
        }
    },0)
    tl.fromTo(headerTop, {
        y: -200
    }, {
        y: 0,
        duration: 1.6,
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
    <div class="hidden sm:block">
        <Transition @enter="onEnter">
            <header class="header absolute text-white h-screen flex justify-between w-full" v-show="isHeaderDisplayed">
                <HeaderTop class="absolute headerTop z-20 backdrop-blur-sm top-0  " />
                <HeaderLeft class="fixed z-20 headerleft left-0 backdrop-blur-sm" />
                <HeaderRight class="fixed z-20 headerRight right-0 backdrop-blur-sm" /> 
            </header>
        </Transition>
    </div>
    <div class="block sm:hidden">
        <header class="header fixed z-20 text-white h-screen flex justify-between w-full">
            <HeaderTopMobile class="absolute headerTop z-20 backdrop-blur-sm top-0  " />
        </header>
    </div>
</template>