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
        <header class="header fixed z-20 text-white h-screen flex justify-between w-full">
            <div class="absolute headerTop z-20 backdrop-blur-sm top-0 w-full">
                <div class="flex h-50 w-full border-b border-black z-20 backdrop-blur-sm">
                    <div class="flex items-center justify-center border-r border-black p-5 w-full min-w-18">
                        <NuxtImg 
                            quality="80"
                            format="webp"
                            src="svg/krakage-min-icon.svg"
                            alt="Krakage"
                            width="32"
                            height="24"
                            class="w-8 h-6"
                        />
                    </div>
                    <div class="flex items-center justify-center p-5 w-full">
                        <div class="h-8 w-8 flex items-center justify-center">
                            <HeaderLangSwitcher />
                        </div>
                    </div>
                    <div class="flex items-center justify-center border-l border-black p-5 w-full min-h-18" @click="handleClick">
                        <NuxtImg
                            src="svg/close.svg"
                            alt="Krakage"
                            width="32"
                            height="32"
                            class="w-8 h-8"
                        />
                    </div>
                </div>
            </div>
        </header>
        <div class="p-5 pt-36 flex flex-col h-full ">
            <NuxtLink to="/about" class="hover:text-[#FC2020]  transition-all z-20" @click="handleClick">
                <p class="text-[3rem] font-bold ">
                    {{ $t('menu.studio') }}
                </p>
            </NuxtLink>
            <NuxtLink to="/" class="hover:text-[#FC2020]  transition-all z-20" @click="handleClick">
                <p class="text-[3rem] font-bold">
                    {{ $t('menu.game') }}
                </p>
            </NuxtLink>
            <NuxtLink to="/contact" class="hover:text-[#FC2020]  transition-all z-20" @click="handleClick">
                <p class="text-[3rem] font-bold">
                    {{ $t('menu.contact') }}
                </p>
            </NuxtLink>
        </div>
        <div class="absolute inset-0">
            <NuxtImg quality="80" format="webp" src="svg/krakage-star.svg" width="320" height="320"
                class="ainu-pattern absolute -bottom-10 -right-10  z-12  transform-gpu" />
        </div>
    </div>
</template>