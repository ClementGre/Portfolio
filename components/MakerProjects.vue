<script setup lang="ts">

import type {TimelineItem} from "~/types/types";

const items: TimelineItem[] = [
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
  {
    start: '2023',
    end: '2024',
    duration: null,
    title: 'Mechanical keyboard',
    icon_path: 'icons/bepoleon.jpg',
    description: 'My first custom mechanical keyboard: a TKL build with a volume knob, USB hub, OLED screens, and a fingerprint sensor. Designed the PCB from scratch — because off-the-shelf wasn’t enough.',
    tags: ['CAD', 'Steel cutting & bending', '3D printing', 'PCB design', 'embedded C'],
    links: [
      {
        text: 'Reddit post',
        url: 'https://www.reddit.com/r/MechanicalKeyboards/comments/1evd0b8/my_first_mechanical_keyboard_tkl_custom_build/'
      },
    ],
  },
]

</script>

<template>
  <section>
    <div class="container">
      <h2 class="title">Maker projects</h2>
      <p class="description">
        When I’m not behind a keyboard, I’m usually building something – whether it’s woodworking, tinkering with electronics, or designing mechanical stuff. Here are some of my greatest projects.
      </p>
      <Timeline :items="items"/>
    </div>
  </section>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

section
  background-color $p-green-bg

  h2.title
    -webkit-text-stroke-color $p-green

    &:after
      background-color $p-green

  p.description
    color $p-green-darker
    max-width 600px
    font-size 1.1rem
    line-height 1.4
    margin-bottom 1.5rem

  //    Color adaptations for inner components
  :deep(.item .left .year), :deep(.item .left .year:before)
    background-color $p-green
  :deep(.item .left .year:after)
    background-color $p-green-bg
  :deep(.item .content .header .aside h3.title), :deep(.item .content .description)
    color $p-green-darker
</style>
