<template>
  <button
    @click="nextSorting()"
    css:flex="~"
    css:items="center"
    css:space="x-2"
    css:m="l-2"
    css:p="x-2 y-1"
    css:text="black dark:zinc-200"
    css:rounded="md"
    css:outline="2 black"
    css:ring="focus:0"
  >
    <div css:h="6" css:w="6">
      <ArrowCircleDownIcon v-if="sorting === 'desc'" />
      <ArrowCircleUpIcon v-if="sorting === 'asc'" />
    </div>
    <span css:text="xs" css:font="medium">Most Recent</span>
  </button>
</template>
<script>
import { ArrowCircleDownIcon, ArrowCircleUpIcon } from '@heroicons/vue/outline'
import useTodo from '../composables/useTodo.js'
import { useCycleList } from '@vueuse/core'

export default {
  components: {
    ArrowCircleDownIcon,
    ArrowCircleUpIcon
  },
  setup() {
    const { sorting } = useTodo()
    const { next: nextSorting } = useCycleList(['desc', 'asc'], {
      initialValue: sorting
    })

    return {
      sorting,
      nextSorting
    }
  }
}
</script>
