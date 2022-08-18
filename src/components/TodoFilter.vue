<template>
  <div
    css:flex="~"
    css:items="center"
    css:p="x-2 y-1"
    css:rounded="md"
    css:outline="2 black"
    css:ring="focus:0"
  >
    <Switch :model-value="showDone" @update:modelValue="handleChanged"
      >Show done</Switch
    >
  </div>
</template>
<script>
import Switch from './Switch.vue'
export default {
  components: {
    Switch
  },
  props: {
    showDone: {
      type: Boolean,
      default: ''
    }
  },
  methods: {
    handleChanged(value) {
      this.$emit('update', value)
    }
  }
}
</script>
