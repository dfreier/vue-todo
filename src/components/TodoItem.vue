<template>
  <div
    ref="itemRef"
    css:h="12"
    css:p="x-4"
    css:flex="~"
    css:items="center"
    css:text="black dark:zinc-100"
  >
    <Checkbox v-model="done" @update:modelValue="handleDoneChanged()" />
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
    <button css:h="5" css:w="5" @click="handleDelete()">
      <TrashIcon />
    </button>
  </div>
</template>
<script>
import { PencilIcon, TrashIcon } from '@heroicons/vue/outline'
import Checkbox from './Checkbox.vue'
export default {
  components: {
    Checkbox,
    PencilIcon,
    TrashIcon
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      done: false,
      title: ''
    }
  },
  watch: {
    todo: {
      handler() {
        this.done = this.todo.done
        this.title = this.todo.title
      },
      immediate: true
    }
  },
  methods: {
    handleDoneChanged() {
      const updated = { ...this.todo }
      updated.done = this.done
      this.$emit('update', updated)
    },
    handleDelete() {
      this.$emit('delete', this.todo)
    }
  }
}
</script>
