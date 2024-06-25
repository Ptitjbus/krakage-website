<script setup lang="ts">
import gsap from "gsap";

const isMenu = ref(false);
const isMenuMobile = ref(false);

const onClickHandler = () => {
    isMenu.value = !isMenu.value;
};
const onClickHandlerMobile = () => {
    console.log('clicked')
    isMenuMobile.value = !isMenuMobile.value;
};

</script>

<template>
    <div class="hidden sm:block">
        <header class="header absolute h-screen text-white flex justify-between w-full" >
            <HeaderTop class="absolute headerTop z-20 backdrop-blur-sm top-0" />
            <HeaderLeft class="fixed z-20 headerleft left-0 backdrop-blur-sm" :onClick="onClickHandler"/>
            <HeaderRight class="fixed z-20 headerRight right-0 backdrop-blur-sm" />
        </header>
        <div v-show="isMenu">
            <Menu :onClick="onClickHandler" />
        </div>
    </div>
    <div class="block sm:hidden">
        <header class="header fixed z-20 text-white h-screen flex justify-between w-full">
            <HeaderTopMobile class="absolute headerTop z-20 backdrop-blur-sm top-0 " :onClick="onClickHandlerMobile"/>
        </header>
        <div v-show="isMenuMobile">
            <MobileMenu :onClick="onClickHandlerMobile" />
        </div>
    </div>
</template>