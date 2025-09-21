<script setup lang="ts">
import type {TimelineItem} from "~/types/types";
import TimelineElement from "~/components/TimelineElement.vue";

const props = defineProps<{
  items: TimelineItem[]
}>()

</script>

<template>
    <div class="timeline">
      <TimelineElement v-for="item in items" :key="item.title" :item="item"/>
    </div>
</template>

<style scoped lang="stylus">

div.timeline
  display flex
  flex-direction column
  gap 1.5rem

</style>
