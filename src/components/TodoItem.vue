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
    <button css:h="5" css:w="5" @click="deleteTodo">
      <TrashIcon />
    </button>
  </div>
</template>
<script>
import { computed, ref, toRefs } from 'vue'
import { PencilIcon, TrashIcon } from '@heroicons/vue/outline'
import Checkbox from './Checkbox.vue'

import useTodo from '../composables/useTodo.js'

export default {
  components: {
    Checkbox,
    PencilIcon,
    TrashIcon
  },
  props: {
    /**
     * In the old version, we passed in the whole todo object.
     * It wouldn't harm here to still receive it, but for the purpose
     * of this demo, I'd like to show you how we can do everything
     * just with the id.
     */
    id: {
      type: String,
      require: true
    }
  },
  setup(props) {
    /**
     * Ignore these empty refs, we need them in a later stage
     */
    const itemRef = ref()
    const titleRef = ref()
    const { id } = toRefs(props)

    /**
     * This time we pass in the id to the composable,
     * because we like to update and delete a particular todo.
     */
    const { todo, updateTodo, deleteTodo } = useTodo(id)

    /**
     * Let's have a computed title to make it null-safe in the template
     */
    const title = computed(() => todo.value?.title)

    /**
     *  We'd like to use `v-model` on the checkbox. Therefore, it must be
     *  a writable thing.
     *  Just use the update function to partially update the todo whenever
     *  the checkbox was toggled.
     */
    const done = computed({
      get: () => todo.value?.done,
      set: (value) => updateTodo({ done: value })
    })

    return {
      title,
      done,
      deleteTodo,
      itemRef,
      titleRef
    }
  }
}
</script>
