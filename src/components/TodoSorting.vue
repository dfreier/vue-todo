<template>
  <button
    @click="toggleSorting()"
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
export default {
  components: {
    ArrowCircleDownIcon,
    ArrowCircleUpIcon
  },
  props: {
    sorting: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleSorting() {
      if (this.sorting == 'desc') {
        this.$emit('update', 'asc')
      } else {
        this.$emit('update', 'desc')
      }
    }
  }
}
</script>
