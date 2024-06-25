<template>
    <footer class="hidden sm:block flex flex-col text-black px-28 border">
        <div class="flex py-10 px-32 items-center justify-between border-b ">
            <NuxtLink to="/contact" class="hover:text-[#FC2020]  transition-all z-20">
                <p class="text-2xl font-bold">
                    {{ $t('footer.contact') }}
                </p>
            </NuxtLink>            
            <NuxtImg
                src="svg/krakage-icon.svg"
                alt="Krakage"
                width="259"
                height="72"
                class=""
            />
            <div class="flex gap-5">
                <NuxtImg
                    src="svg/Vector.svg"
                    alt="Krakage"
                    width="24"
                    height="24"
                    class="w-6 h-6 z-20"
                />
                <NuxtImg
                    src="svg/Vector-1.svg"
                    alt="Krakage"
                    width="24"
                    height="24"
                    class="w-6 h-6 z-20"
                />
                <NuxtImg
                    src="svg/Vector-2.svg"
                    alt="Krakage"
                    width="24"
                    height="24"
                    class="w-6 h-6 z-20"
                />
            </div>
        </div>
        <div class="flex py-5 items-center justify-between border-b">
            <p>
                Copyright © 2024
            </p> 
            <p>
                KrakageStudio®
            </p>
            <p>
                {{ $t('footer.legal') }}
            </p>
        </div>
    </footer>
    <footer class="block sm:hidden text-black px-28 border">
        <div class="flex flex-col items-center justify-center py-5">
            <NuxtImg
            src="svg/krakage-icon.svg"
            alt="Krakage"
            width="259"
            height="72"
            class="mb-2"
            />
            <NuxtLink to="/contact" class="hover:text-[#FC2020]  transition-all z-20">
                <p class="text-xl font-bold">
                    {{ $t('footer.contact') }}
                </p>
            </NuxtLink>
        </div>
    </footer>
</template>