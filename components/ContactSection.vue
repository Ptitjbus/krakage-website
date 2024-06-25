<template>
    <div class="h-[100vh] bg-[#1C1C40]">
        <div class="px-4 sm:px-28 py-28 sm:p-28 flex flex-col gap-5 h-full text-white">
            <p class="text-[2rem] font-bold ">Basé à Annecy, France</p>
            <p class="text-[2rem] font-bold">hello@krakage-studio.com</p>
            <p class="text-[2rem] font-bold">04 50 98 20 33</p>
            <div class="flex gap-5">
                <NuxtImg
                    src="svg/Vector-white.svg"
                    alt="Krakage"
                    width="32"
                    height="32"
                    class="w-10 h-10 z-20"
                />
                <NuxtImg
                    src="svg/Vector-1-white.svg"
                    alt="Krakage"
                    width="32"
                    height="32"
                    class="w-10 h-10 z-20"
                />
                <NuxtImg
                    src="svg/Vector-2-white.svg"
                    alt="Krakage"
                    width="32"
                    height="32"
                    class="w-10 h-10 z-20"
                />
            </div>
        </div>
        <div class="absolute inset-0 overflow-clip">
            <NuxtImg quality="80" format="webp" src="svg/arobase.svg" width="298" height="320"
                class="absolute -bottom-10 sm:bottom-10 -right-10 sm:right-24 z-12  transform-gpu" />
        </div>
    </div>
</template>