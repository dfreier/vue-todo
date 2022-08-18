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
    modelValue: Boolean
  },
  data() {
    return {
      checked: false
    }
  },
  watch: {
    modelValue: {
      handler(value) {
        this.checked = value
      },
      immediate: true
    },
    checked(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
