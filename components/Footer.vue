<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">
        © {{ new Date().getFullYear() }} Clément Grennerat. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

.footer
  background-color $text-dark
  color white
  padding 2rem 0
  font-family 'Domine', serif

.container
  max-width 1200px
  margin 0 auto
  padding 0 2rem
  text-align center

.footer-text
  margin 0
  font-size 0.9rem
  opacity 0.8

@media (max-width: 768px)
  .container
    padding 0 1.5rem
</style>