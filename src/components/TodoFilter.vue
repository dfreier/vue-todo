<template>
  <div
    css:flex="~"
    css:items="center"
    css:p="x-2 y-1"
    css:rounded="md"
    css:outline="2 black"
    css:ring="focus:0"
  >
    <Switch v-model="checked">Show done</Switch>
  </div>
</template>
<script>
import Switch from './Switch.vue'
import useTodo from '../composables/useTodo.js'
import { computed } from 'vue'

export default {
  components: {
    Switch
  },
  setup() {
    /**
     * This was the last remaining component in the hierarchy that was
     * involved into state management.
     *
     * Think about that.
     * We have now the full freedom to add, remove,
     * move components up and down in the component tree, without ever
     * worrying about passing props and events.
     * We can test components by mocking composables.
     * We can test composables in isolation.
     * We can reuse general purpose composables in many places.
     * ...
     */
    const { filter } = useTodo()

    /**
     * A simple writable computed to translate between
     * the internal Boolean model and the string representation (true/false vs. all/pending)
     */
    const checked = computed({
      get: () => filter.value === 'all',
      set: (checked) => (filter.value = checked ? 'all' : 'pending')
    })

    return {
      checked
    }
  }
}
</script>
