<script setup lang="ts">

</script>

<template>
  <header>
    <div class="hook-container absolute top-0 w-screen">
      <div class="hook flex-col items-left justify-center h-full max-w-2xl content-center p-20">
        <h1>
          Hey, I’m <span>Clément Grennerat</span>
        </h1>
        <hr class=""/>
        <p class="">
          Computer Engineering Student at INSA Lyon
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped lang="stylus">

header
  z-index 40
  background-color hsla(0, 0%, 96%, 1.0)
  font-family 'Domine'

header > .background-container
  width 100vw
  height 100vh

header > .hook-container > .hook
  text-shadow 0 0 10px rgba(0, 0, 0, .5)


@media (max-width: 768px)
  header > .hook-container > .hook
    padding 0 20px

  header > .border-text-container
    display none

</style>
