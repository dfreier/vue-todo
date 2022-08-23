<template>
  <div
    ref="itemRef"
    css:h="12"
    css:p="x-4"
    css:flex="~"
    css:items="center"
    css:text="black dark:zinc-100"
  >
    <Checkbox v-model="done" />
    <div class="truncate">
      <span
        ref="titleRef"
        css:font="medium"
        css:text="sm"
        css:p="x-2 y-1"
        css:outline="0"
        css:ring="0"
        :class="{ 'line-through': done }"
        >{{ title }}</span
      >
    </div>
    <div class="flex-1"></div>
    <button v-if="isHovered" css:h="5" css:w="5" @click="deleteTodo">
      <TrashIcon />
    </button>
  </div>
</template>
<script>
import { computed, ref, toRefs } from 'vue'
import { PencilIcon, TrashIcon } from '@heroicons/vue/outline'
import { useElementHover } from '@vueuse/core'
import Checkbox from './Checkbox.vue'

import useTodo from '../composables/useTodo.js'

export default {
  components: {
    Checkbox,
    PencilIcon,
    TrashIcon
  },
  props: {
    id: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const itemRef = ref()
    const titleRef = ref()
    const { id } = toRefs(props)

    const { todo, updateTodo, deleteTodo } = useTodo(id)

    const title = computed(() => todo.value?.title)
    const done = computed({
      get: () => todo.value?.done,
      set: (value) => updateTodo({ done: value })
    })

    const isHovered = useElementHover(itemRef)

    return {
      title,
      done,
      isHovered,
      deleteTodo,
      itemRef,
      titleRef
    }
  }
}
</script>
