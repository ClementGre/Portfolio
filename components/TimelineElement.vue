<script setup lang="ts">

import type {TimelineItem} from "~/types/types";

const props = defineProps<{
  item: TimelineItem
}>()

</script>

<template>
  <div class="item">
    <div class="left">
      <div class="year">
        <p>
          <span v-if="item.end" class="end">{{ item.end }}<br></span>
          <span class="start">{{ item.start }}</span>
          <span v-if="item.duration" class="duration"><br>{{ item.duration }}</span>
        </p>
      </div>
    </div>
    <div class="content">
      <div class="header">
        <img v-if="item.icon_path" :src="item.icon_path" :alt="'Icon of ' + item.title"/>
        <div class="img-placeholder" v-else/>
        <div class="aside">
          <h3 class="title">{{ item.title }}</h3>
          <div class="tags">
            <p class="tag" v-for="tag in item.tags" :key="tag">
              {{ tag }}
            </p>
          </div>
        </div>
      </div>
      <div class="description">
        <p>
          {{ item.description }}
        </p>
      </div>
      <div class="buttons" v-if="item.links && item.links.length > 0">
        <LinkButton v-for="link in item.links" :key="link.url" :href="link.url" :icon="'arrow-up-right-from-square'" :text="link.text"/>
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../assets/styles/variables.styl'

div.item
  display flex
  flex-direction row
  align-items center
  justify-content center
  gap 8px
  flex-wrap wrap

  .left, .right
    flex-basis 100px
    flex-shrink 0

  .left .year
    width 85px
    height 73px
    background-color $sc-orange
    border-radius 5px
    display flex
    align-items center
    justify-content center
    position relative
    padding-bottom 12px
    z-index 9

    &:before, &:after
      content ''
      display block
      width 30px
      height 30px
      border-radius 50%
      position absolute
      left 50%

    &:before
      top 0
      background-color $sc-orange
      transform translateX(-50%) translateY(-60%)

    &:after
      bottom 0
      background-color $sc-orange-bg
      transform translateX(-50%) translateY(40%)
      z-index 10

    p
      margin 0
      color white
      font-weight bold
      text-align center
      font-size 1.15em

      .end, .end + .start
        line-height 1.4em

      .duration
        font-size 0.8em

  .content
    flex-basis 1px
    flex-grow 1
    flex-shrink 1
    min-width 300px;
    z-index 11

    background-color white
    border-radius .5rem
    box-shadow 0 2px .5rem hsla(0, 0%, 0%, .1)
    padding 1rem

    .header
      display flex
      flex-direction row
      align-items left

      img, div.img-placeholder
        width 3.5rem
        height 3.5rem
        border-radius .25rem
        object-fit cover
        margin-right 1rem
        background-color hsla(0, 0%, 90%, 1.0)
      img
        // set alt not visible (visible only for screen readers)
        color transparent

      .aside
        h3.title
          color $sc-orange-darker
          margin 0
          margin-bottom 0.2rem
          font-size 1.4rem
          word-break break-word

        .tags
          .tag
            display inline-block
            background-color $sc-pink-bg
            color $sc-pink
            padding 0.2rem .4rem
            border-radius 0.2rem
            font-size 0.8em
            margin 0.2rem 0.4rem 0 0

    .description
      line-height 1.4em
      color $sc-orange-darker

      p
        margin-bottom 0

    .buttons
      margin-top 1rem
      display flex
      gap 1em
      font-size .9rem
      flex-wrap wrap

      &:deep(a)
        color $p-green
        background-color $p-green-lighter
        padding 0.35rem 0.5rem

        &:hover
          background-color $p-green-light
          color $p-green-darker

        .icon
          font-size 1em

</style>
