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
    <div class="flex flex-col w-50 h-full border-r ">
        <div class="flex items-center justify-center border-b p-5 w-full min-h-18">
          <NuxtLink to="/" >
            <NuxtImg 
                quality="80"
                format="webp"
                src="image/logo-icon.png"
                alt="Krakage"
                width="56"
                height="52"
                class="w-8 h-8"
            />
          </NuxtLink>
        </div>
        <div class="flex items-center justify-center p-5 w-full h-full">
            <NuxtImg
                src="svg/menu-toast-icon.svg"
                alt="Krakage"
                width="32"
                height="32"
                class="w-8 h-8 cursor-pointer"
                @click="handleClick"
            />
        </div>
        <div class="flex items-center justify-center border-t p-5 w-full min-h-18">
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