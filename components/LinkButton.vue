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
    type: String,
    required: false,
    default: ''
  }
})

</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <fa :icon="icon"></fa>
    {{text}}
  </a>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

a
  display flex
  align-items center
  text-decoration none
  background-color $sc-orange-lighter
  color $sc-orange
  padding 0.4rem .6rem
  border-radius 0.2rem
  transition background-color, color 0.1s ease-in-out

  &:hover
    background-color $sc-orange-light
    color $sc-orange-dark

  fa-icon
    margin-right 0.5rem
    font-size 1.2rem

</style>
