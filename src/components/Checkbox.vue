<template>
  <input
    type="checkbox"
    v-model="checked"
    css:h="5"
    css:w="5"
    css:m="r-3"
    css:bg="dark:zinc-500"
    css:text="black hover:black"
    css:rounded="~"
    css:border="2 black focus:black"
    css:outline="2 black"
    css:ring="0 focus:0"
  />
</template>
<script>
export default {
  props: {
    /**
     * Vue 3 automatically recognizes this as `v-model` (Vue 2 used `value`)
     */
    modelValue: Boolean
  },
  data() {
    return {
      /**
       * Internal **writable** state (do not mutate props!)
       */
      checked: false
    }
  },
  watch: {
    modelValue: {
      /**
       * Sync updates from props to the local state
       */
      handler(value) {
        this.checked = value
      },
      immediate: true
    },
    /**
     * Communicate updates to parent component.
     * Vue 2 equivalent is `this.$emit('input', value)`
     */
    checked(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
