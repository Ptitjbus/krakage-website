<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: false
    }
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    }
  }
}
</script>

<template>
    <div class="fixed inset-0 bg-white w-screen h-screen z-30">
        <header class="header absolute h-screen flex justify-between w-full" >
            <div class="absolute w-full z-20 top-0">
                <div class="flex items-center justify-center border-b border-black p-1  w-full min-h-18">
                    <div class="h-16 w-16 flex items-center justify-center backdrop-blur-sm">
                        <NuxtImg
                            src="svg/krakage-icon.svg"
                            alt="Krakage"
                            width="259"
                            height="72"
                            class=""
                        />
                    </div>
                </div>
            </div>
            <div class="fixed z-20 h-full left-0">
                <div class="flex flex-col w-50 h-full border-r border-black">
                    <div class="flex items-center justify-center border-b border-black p-5 w-full min-h-18">
                        <div class="w-8 h-8"></div>
                    </div>
                    <div class="flex items-center justify-center p-5 w-full h-full backdrop-blur-sm">
                        <NuxtImg
                            src="svg/close.svg"
                            alt="Krakage"
                            width="32"
                            height="32"
                            class="w-8 h-8 cursor-pointer"
                            @click="handleClick"
                        />
                    </div>
                    <div class="flex items-center justify-center border-t border-black p-5 w-full min-h-18">
                        <div class="w-8 h-8"></div>
                    </div>
                </div>
            </div>
            <div class="fixed z-20 h-full right-0">
                <div class="flex flex-col w-50 h-full border-l border-black">
                    <div class="flex items-center justify-center border-b border-black p-5 w-full min-h-18">
                        <div class="h-8 w-8 flex items-center justify-center"></div>
                    </div>
                    <div class="flex items-center justify-center p-5 w-full h-full backdrop-blur-sm"></div>
                    <div class="flex items-center justify-center border-t border-black p-5 w-full min-h-18">
                        <div class="h-8 w-8 flex items-center justify-center"></div>
                    </div>
                </div>
            </div>
            <div class="absolute w-full z-20 bottom-0">
                <div class="flex items-center justify-center border-t border-black p-5 w-full min-h-18">
                    <div class="h-8 w-8 flex gap-5 items-center justify-center backdrop-blur-sm">
                        <NuxtImg
                            src="svg/Vector.svg"
                            alt="Krakage"
                            width="24"
                            height="24"
                            class="w-4 h-4 z-20"
                        />
                        <NuxtImg
                            src="svg/Vector-1.svg"
                            alt="Krakage"
                            width="24"
                            height="24"
                            class="w-4 h-4 z-20"
                        />
                        <NuxtImg
                            src="svg/Vector-2.svg"
                            alt="Krakage"
                            width="24"
                            height="24"
                            class="w-4 h-4 z-20"
                        />
                    </div>
                </div>
            </div>
        </header>
        <div class="p-28 flex flex-col justify-center h-full ">
            <NuxtLink to="/about" class="hover:text-[#FC2020]  transition-all z-20" @click="handleClick">
                <p class="text-[4rem] lg:text-[7rem] font-bold ">
                    {{ $t('menu.studio') }}
                </p>
            </NuxtLink>
            <NuxtLink to="/" class="hover:text-[#FC2020]  transition-all z-20" @click="handleClick">
                <p class="text-[4rem] lg:text-[7rem] font-bold">
                    {{ $t('menu.game') }}
                </p>
            </NuxtLink>
            <NuxtLink to="/contact" class="hover:text-[#FC2020]  transition-all z-20" @click="handleClick">
                <p class="text-[4rem] lg:text-[7rem] font-bold">
                    {{ $t('menu.contact') }}
                </p>
            </NuxtLink>
        </div>
    </div>
</template>