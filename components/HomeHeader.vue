<script setup lang="ts">

let scrollPosition = ref(0);
const onScroll = () => {
  scrollPosition.value = document.documentElement.scrollTop;
};

let blurValue = computed(() => {
  return Math.min(scrollPosition.value / 50, 10);
});

onMounted(() => {
  document.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
})

</script>

<template>
  <header>
    <div class="background-container">
      <div class="background size-full" :style="{ filter: `blur(${blurValue}px)` }"></div>
    </div>
    <div class="hook-container absolute top-0 w-screen">
      <div class="hook flex-col items-left justify-center h-full max-w-2xl content-center p-20">
        <h1 class="font-sans text-white text-6xl font-bold">
          Hey, I’m
          <span class="font-serif text-orange-100 font-semibold">
        Clément Grennerat
      </span>
        </h1>
        <hr class="h-1 w-10 bg-orange-100 my-4"/>
        <p class="font-sans text-white text-2xl font-normal mt-2">
          Computer Engineering Student at INSA Lyon
        </p>
      </div>
    </div>
    <p class="border-text-container font-sans text-transparent text-6xl font-ultrabold fixed right-0">
      CLÉMENT GRENNERAT
    </p>
  </header>
</template>

<style scoped lang="stylus">

header, .background-container, .hook-container
  max-height 90vh
  min-height 360px
  height 100vh
  overflow hidden

header
  z-index 40

header > .background-container
  width 100vw
  height 100vh

header > .background-container > .background
  background linear-gradient(rgba(0, 0, 0, .7) 0%, rgba(0, 0, 0, .3) 15%, rgba(0, 0, 0, .3) 85%, rgba(0, 0, 0, .7) 100%), url('/bg.webp') no-repeat center center / cover
  transform scale(1.1)

header > .hook-container > .hook
  text-shadow 0 0 10px rgba(0, 0, 0, .5)


header > .border-text-container
  bottom calc(15vh + 5px)
  writing-mode vertical-lr

  -webkit-text-stroke-width: 1px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: hsla(35, 100%, 92%, 1.0);

  line-height .8em
  transform rotate(180deg)
  text-wrap nowrap

@media (max-width: 768px)
  header > .hook-container > .hook
    padding 0 20px
  header > .border-text-container
    display none

</style>