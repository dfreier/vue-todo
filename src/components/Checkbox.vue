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
import useModel from '../composables/useModel.js'

export default {
  props: {
    modelValue: Boolean
  },
  setup(props, { emit }) {
    const checked = useModel(props, 'modelValue', emit)
    return {
      checked
    }
  }
}
</script>
