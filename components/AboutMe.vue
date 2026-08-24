<script setup lang="ts">

import LinkButton from "~/components/LinkButton.vue";
</script>

<template>
  <section>
    <div class="container">
      <h2 class="title">About me</h2>
      <p class="description">
        <span>
          CS student with <b>6+ years of self-taught experience</b> in software development and system administration.
          Passionate about <b>infrastructure</b> and <b>open source</b>, I design and <b>maintain projects used by thousands of users</b>.
        </span>
        <span>
          Through various <b>internships</b> and <b>associative roles</b>, I've built strong <b>technical depth</b> complemented by a <b>broad business perspective</b>, deploying critical solutions and leading teams across a wide range of environments.
        </span>
      </p>

      <div class="links">
        <LinkButton text="GitHub" :icon="['fab', 'github']" href="https://github.com/ClementGre"/>
        <LinkButton text="Download my resume" :icon="['far', 'file-lines']" href="/Clement_Grennerat_resume.pdf"/>
        <LinkButton text="LinkedIn" :icon="['fab', 'linkedin']" href="https://www.linkedin.com/in/clement-gre/"/>
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
