<script setup lang="ts">

let _props = defineProps({
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  icon: {
    type: [Object, Array, String],
    required: false,
    default: null
  }
})

</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <fa v-if="icon" :icon="icon" class="icon"></fa>
    {{text}}
  </a>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

a
  display flex
  align-items center
  text-decoration none
  background-color $c-pink-lighter
  color $c-pink
  padding 0.4rem .6rem
  border-radius 0.2rem
  transition background-color, color 0.1s ease-in-out

  &:hover
    background-color $c-pink-light
    color $c-pink-dark

  .icon
    margin-right .4rem
    font-size 1.1em

</style>
