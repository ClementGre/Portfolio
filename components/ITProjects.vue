<script setup lang="ts">

import type {TimelineItem} from "~/types/types";

const items: TimelineItem[] = [
  {
    start: '2024',
    end: null,
    duration: 'wip',
    title: 'Archypix',
    icon_path: null,
    description: 'An efficient cloud based picture manager that supports automatic grouping of pictures into custom arrangements, while allowing users to share groups together. Still a work in progress.',
    tags: ['Rust', 'RestAPI', 'Nuxt', 'VueJS', 'S3'],
    links: [
      {
        text: 'GitHub (Rust backend)',
        url: 'https://github.com/Archypix/archypix-app-back'
      },
      {
        text: 'GitHub (Nuxt frontend)',
        url: 'https://github.com/Archypix/archypix-app-front'
      }
    ],
  },
  {
    start: '2024',
    end: '2026',
    title: 'INSA Utils',
    icon_path: 'icons/insa-utils.jpg',
    description: 'A collection of tools to simplify daily life at INSA: shared to-do lists, restaurant menus, collaborative link sharing, and more. Built by students, for students.',
    tags: ['PHP'],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/ClementGre/insa-utils'
      },
      {
        text: 'Website`',
        url: 'https://insa-utils.fr'
      }
    ],
  },
  {
    start: '2022',
    end: '2025',
    duration: null,
    title: 'ThreeFingerDragOnWindows',
    icon_path: 'icons/tfdow.jpg',
    description: 'Bring macOS-style three-finger dragging to Windows. This lightweight app lets you drag windows or select text with a simple touchpad gesture—no mouse button needed. Works on all Precision touchpads.',
    tags: ['C#', 'UWP', 'WinUI'],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/ClementGre/ThreeFingerDragOnWindows'
      },
      {
        text: 'Microsoft Store',
        url: 'https://apps.microsoft.com/detail/9msx91wqcm2v?hl=en-US&gl=US'
      }
    ],
  },
  {
    start: '2019',
    end: '2024',
    duration: null,
    title: 'PDF4Teachers',
    icon_path: 'icons/pdf4teachers.jpg',
    description: 'A productivity-focused PDF editor for teachers, designed to streamline grading with features like annotation retention and numerical/skill-based scoring. My largest project to date, with 40K+ lines of code and 1,000+ monthly users.',
    tags: ['Java', 'JavaFX'],
    links: [
      {
        text: 'Website',
        url: 'https://pdf4teachers.org'
      },
      {
        text: 'GitHub',
        url: 'https://github.com/ClementGre/PDF4Teachers'
      },
      {
        text: 'Tutorial',
        url: 'https://youtube.com/watch?v=tutorial'
      }
    ],
  },
  {
    start: '2020',
    end: '2022',
    duration: null,
    title: 'MonitorInternetless',
    icon_path: 'icons/monitorinternetless.jpg',
    description: 'Control and locate your Android phone via SMS — no internet required. Send commands from any phone to locate, ring or manage your phone, even when offline. Perfect for finding a lost phone in areas with no data connection.',
    tags: ['Android'],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/ClementGre/Monitor-Internetless'
      },
    ],
  },
  {
    start: '2016',
    end: '2019',
    duration: null,
    title: 'TntGun Minecraft Server',
    icon_path: 'icons/tntgun.jpg',
    description: 'A Minecraft server I built and ran in middle school, complete with a custom 20K+ line plugin. Features included land protection, in-game economy, Discord/website sync, and more.',
    tags: ['Java', 'Bukkit', 'MySQL', 'PHP', 'HTML'],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/ClementGre/TntGun-V3.3/'
      },
      {
        text: 'Website’s GitHub',
        url: 'https://github.com/ClementGre/TntGun-V3.3-Website'
      },
      {
        text: 'Tutorial',
        url: 'https://www.youtube.com/watch?v=TlnMwqFfVYE'
      },
    ],
  }
]

</script>

<template>
  <section>
    <div class="container">
      <h2 class="title">IT projects</h2>
      <p class="description">
        I build apps people rely on – mobile apps, web platforms, and desktop tools used by thousands. Here’s what I’ve created.
      </p>
      <Timeline :items="items"/>
    </div>
  </section>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

section
  background-color $sc-pink-bg

  h2.title
    -webkit-text-stroke-color $sc-pink

    &:after
      background-color $sc-pink

  p.description
    color $sc-pink-darker
    max-width 600px
    font-size 1.1rem
    line-height 1.4
    margin-bottom 1.5rem


  //    Color adaptations for inner components
  :deep(.item .left .year), :deep(.item .left .year:before)
    background-color $sc-pink
  :deep(.item .left .year:after)
    background-color $sc-pink-bg
  :deep(.item .content .header .aside h3.title), :deep(.item .content .description)
    color $sc-pink-darker

</style>
