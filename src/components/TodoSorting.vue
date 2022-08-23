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
    /**
     * The sorting ref is readable and writeable
     */
    const { sorting } = useTodo()

    /**
     * This composable comes from a library (more on that later).
     * It takes a list and a writable ref and returns a `next()` function.
     * Each time you invoke it, it cycles through that list and assigns
     * the next value to the ref. Pretty cool 😎
     */
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
