<script setup lang="ts">

const items = [
  {
    start: '2024',
    end: '2025',
    duration: null,
    title: 'Wooden Onewheel',
    icon_path: 'icons/onewheel.jpg',
    description: 'A single-wheeled all-terrain vehicle — because why not? Handcrafted with wood, a custom spot-welded battery pack, and a dashboard powered by an STM32 microcontroller and custom PCB. Equal parts engineering challenge and absurd fun.',
    tags: ['Woodworking', 'Electronics', 'Spot welding', 'Arc welding', 'PCB routing'],
    links: [],
  },
]

</script>

<template>
  <section>
    <div class="container">
      <h2 class="title">Professional experience</h2>
      <p class="description">
        From self-taught coding to formal studies, I’ve taken on leadership roles in student associations. Here are some highlights of my journey so
        far.
      </p>
      <Timeline :items="items"/>
    </div>
  </section>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

section
  background-color $sc-orange-bg

  h2.title
    -webkit-text-stroke-color $sc-orange
    padding-bottom 1rem

    &:after
      background-color $sc-orange

  p.description
    color $sc-pink-darker
    max-width 600px
    font-size 1.1rem
    line-height 1.4
    margin-bottom 1.5rem


  //    Color adaptations for inner components

  :deep(.item .left .year), :deep(.item .left .year:before)
    background-color $sc-orange

  :deep(.item .left .year:after)
    background-color $sc-orange-bg

  :deep(.item .content .header .aside h3.title), :deep(.item .content .description)
    color $sc-orange-darker

</style>
