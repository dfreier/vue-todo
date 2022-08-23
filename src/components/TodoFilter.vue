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
    const { filter } = useTodo()
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
