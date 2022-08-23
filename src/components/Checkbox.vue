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
import { ref, watch } from 'vue'

export default {
  props: {
    modelValue: Boolean
  },
  setup(props, { emit }) {
    const checked = ref(props.modelValue)

    watch(
      () => props.modelValue,
      (value) => {
        checked.value = value
      },
      { immediate: true }
    )

    watch(checked, (value) => {
      emit('update:modelValue', value)
    })

    return {
      checked
    }
  }
}
</script>
