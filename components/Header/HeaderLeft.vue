<template>
    <div class="flex flex-col w-50 h-full border-r border-white">
        <div class="flex items-center justify-center border-b border-white p-5 w-full h-20">
            <NuxtImg 
                quality="80"
                format="webp"
                src="image/logo-icon.png"
                alt="Krakage"
                width="56"
                height="52"
                class="w-full h-full"
            />
        </div>
        <div class="flex items-center justify-center p-5 w-full h-full">
            <NuxtImg
                src="svg/menu-toast-icon.svg"
                alt="Krakage"
                width="32"
                height="32"
                class="w-8 h-8"
            />
        </div>
        <div class="flex items-center justify-center border-t border-white p-5 w-full h-20  ">
            <NuxtImg
                src="svg/sound-icon.svg"
                alt="Krakage"
                width="32"
                height="32"
                class="w-8 h-8"
            />
        </div>
    </div>
</template>