<script setup lang="ts">
import type {TimelineItem} from "~/types/types";

const props = defineProps<{
  items: TimelineItem[]
}>()

</script>

<template>
  <section class="timeline-section">
    <!-- Professional Experience -->
    <div class="container">
      <h2 class="section-title">Professional experience</h2>

      <div class="timeline professional">
        <TimelineItem v-for="item in items" :key="item.title" :item="item"/>
      </div>

    </div>
  </section>
</template>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

</style>
