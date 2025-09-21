<script setup lang="ts">

import LinkButton from "~/components/LinkButton.vue";
</script>

<template>
  <section>
    <div class="container">
      <h2 class="title">About me</h2>
      <p class="description">
        <span>
          Self-taught developer with <b>6+ years of experience</b> in software, automation, and system administration.
          Passionate about <b>DevOps</b>, <b>infrastructure</b>, and <b>open-source</b> – I create and <b>maintain projects used by thousands</b>.
          As <b>Head of IT for my student union</b>, I <b>lead teams</b>, deploy <b>critical solutions</b>, and adapt quickly to new challenges.
        </span>
        <span>
          Seeking a <b>2026 internship</b> where I can leverage my technical depth and cross-functional skills to build <b>robust systems</b> or <b>lead engineering projects</b>.
        </span>
      </p>

      <div class="links">
        <LinkButton text="GitHub" :icon="['fab', 'github']" href="https://github.com/ClementGre"/>
        <LinkButton text="Download my resume" :icon="['far', 'file-lines']" href="/Clement_Grennerat_resume.pdf"/>
        <LinkButton text="LinkedIn" :icon="['fab', 'linkedin']" href="https://www.linkedin.com/in/cl%C3%A9ment-grennerat-92808a214/"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

section
  background-color white

  .description
    color $p-green-darker
    font-size 1.1rem
    line-height 1.4

    display flex
    flex-direction column
    gap .5rem

  .links
    margin-top 1.5rem
    display flex
    gap 1.2em
    flex-wrap wrap

</style>
