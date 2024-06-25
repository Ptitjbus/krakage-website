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
    <div class="flex h-50 w-full border-b z-20 backdrop-blur-sm">
        <div class="flex items-center justify-center border-r p-5 w-full min-w-18">
            <NuxtImg 
                quality="80"
                format="webp"
                src="image/logo-icon.png"
                alt="Krakage"
                width="56"
                height="52"
                class="w-8 h-8"
            />
        </div>
        <div class="flex items-center justify-center p-5 w-full">
            <div class="h-8 w-8 flex items-center justify-center">
                <HeaderLangSwitcher />
            </div>
        </div>
        <div class="flex items-center justify-center border-l p-5 w-full min-h-18" @click="handleClick">
            <NuxtImg
                src="svg/menu-toast-icon.svg"
                alt="Krakage"
                width="32"
                height="32"
                class="w-8 h-8"
            />
        </div>
    </div>
</template>