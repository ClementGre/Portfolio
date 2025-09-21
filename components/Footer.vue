<script setup lang="ts">

</script>

<template>
  <footer>
    <p class="footer-text">
      © {{ new Date().getFullYear() }} Clément Grennerat. All rights reserved.
    </p>
  </footer>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

footer
  background-color $p-green-darker
  color $p-green-lighter
  padding 1.8rem 1rem

  .footer-text
    text-align center
    margin 0
    font-size .95rem
    opacity .8

@media (max-width: 768px)
  footer
    padding 1.2rem .8rem


</style>
