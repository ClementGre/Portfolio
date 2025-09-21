<script setup lang="ts">

</script>

<template>
  <header>
    <div class="container">
      <h1 class="greeting">
        Hey,<br>
        I’m <span class="name">Clément<br>Grennerat</span>
      </h1>
      <div class="divider"></div>
      <p class="subtitle">
        Full-Stack Developer & INSA Lyon CpE Student
        <span>Bridging Code, Infrastructure, and Leadership</span>
      </p>
    </div>
  </header>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

header
  height 600px
  max-height 100vh
  min-height 450px

  color $p-green
  font-size clamp(3rem, 6vw, 4.6rem)

  background linear-gradient($bg-light-trans, $bg-light-trans), url('../public/landing-bg.svg') , $bg-white
  background-size cover
  box-shadow inset 0 0 40px hsla(0, 0%, 0%, .5)
  display flex
  flex-direction column
  justify-content center
  align-items center


.greeting
  font-size 1em
  font-weight 500
  line-height 1.1
  margin 0
  text-shadow 0 0 .04em hsla(0, 0%, 70%, 1.0)

  .name
    color $p-green-dark
    font-weight 700

  &:after
    content ''
    display block
    width 1.2em
    height .06em
    border-radius .03em
    margin-top .1em
    margin-bottom .2em
    background-color $p-green-dark
    text-shadow 0 0 .04em hsla(0, 0%, 70%, 1.0)

.subtitle
  font-size .35em
  color $p-green-dark
  font-weight 400
  line-height 1
  margin 0
  text-shadow 0 0 .04em hsla(0, 0%, 70%, 1.0)

  span
    color $p-green-darker
    font-size .75em
    font-weight 300
    display block
    margin-top .6em

</style>
