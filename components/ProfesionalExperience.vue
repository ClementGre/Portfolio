<script setup lang="ts">

const items = [
  {
    start: '2024',
    end: '2027',
    duration: null,
    title: 'INSA Lyon - Computer Science',
    icon_path: 'icons/insal.jpg',
    description: 'INSA Lyon – one of France’s most prestigious grandes écoles in engineering, with a leading computer science department. Its generalist engineering program combines technical depth with team-driven projects, preparing students to tackle real-world tech challenges.',
    tags: ['Software engineering', 'UML', 'AGILE', 'DBMS', 'Networks', 'System programming', 'Compilers', 'Distributed Infrastructures', 'Probabilities & Statistics', 'Algorithms'],
    links: [
      {
        text: 'Department website',
        url: 'https://if.insa-lyon.fr/en'
      }
    ],
  },
  {
    start: '2025',
    duration: '2 months',
    title: 'Intern in HPC scheduling',
    icon_path: 'icons/inria.svg',
    description: 'Built the core of a high-performance cluster scheduler in Rust during a 2-month internship at INRIA. My code fully reimplemented OAR3’s features, achieving 10-100x speedups over the original Python version, proving Rust’s potential for HPC workloads.',
    tags: ['Rust', 'HPC', 'Python'],
    links: [
      {
        text: 'GitHub Open Source Code',
        url: 'https://github.com/oar-team/oar-scheduler-redox'
      },
      {
        text: 'Research team website',
        url: 'https://team.inria.fr/datamove/'
      }
    ],
  },
  {
    start: '2024',
    end: '2026',
    duration: null,
    title: 'Student Union - Head of IT',
    icon_path: 'icons/sia.svg',
    description: 'I am the IT Team Lead at the student Union, managing a team of about a dozen people. Overseeing BareMetal, Kubernetes, and Docker infrastructure. Handling CI and scaling of associative services. Experience in project management, DevOps, and system administration.',
    tags: ['Docker', 'System Administration', 'Gitlab CI', 'Django'],
    links: [
      {
        text: 'Website',
        url: 'https://sia.asso-insa-lyon.fr'
      }
    ],
  },
  {
    start: '2022',
    end: '2024',
    duration: null,
    title: 'INSA Lyon - Initial Engineering Training Program',
    icon_path: 'icons/insal.jpg',
    description: 'Achievement: Ranked in the top 10% of the class',
    tags: ['Mathematics', 'Physics', 'Mechanics', 'CAD', 'Sustainability'],
    links: [
      {
        text: 'School website',
        url: 'https://www.insa-lyon.fr/en/'
      }
    ],
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
