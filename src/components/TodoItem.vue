<template>
  <div
    ref="itemRef"
    css:h="12"
    css:p="x-4"
    css:flex="~"
    css:items="center"
    css:text="black dark:zinc-100"
    :class="{
      'bg-white dark:bg-zinc-900': contenteditable
    }"
  >
    <Checkbox v-model="done" v-if="!contenteditable" />
    <PencilIcon v-else class="h-5 w-5 mr-3"></PencilIcon>
    <div class="truncate">
      <span
        ref="titleRef"
        :contenteditable="contenteditable"
        css:font="medium"
        css:text="sm"
        css:p="x-2 y-1"
        css:outline="0"
        css:ring="0"
        :class="{ 'line-through': done && !contenteditable }"
        >{{ title }}</span
      >
    </div>
    <div class="flex-1"></div>
    <button
      v-if="isHovered && !contenteditable"
      css:h="5"
      css:w="5"
      @click="deleteTodo"
    >
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
import useContentEditable from '../composables/useContentEditable.js'

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
    const { contenteditable } = useContentEditable(titleRef, (value) =>
      updateTodo({ title: value })
    )

    return {
      title,
      done,
      contenteditable,
      isHovered,
      deleteTodo,
      itemRef,
      titleRef
    }
  }
}
</script>
