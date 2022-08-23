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
  /**
   * Vue Composition API `setup()` function is just another thing on
   * the options object.
   *
   * - It has no `this` !!!
   * - Props and other context objects come as params
   * - Lifecyle hooks, watch and computed are importable functions
   */
  setup(props, { emit }) {
    /**
     * The same internal state we saw earlier
     */
    const checked = ref(props.modelValue)

    /**
     * Watch is a function.
     * Here we watch a prop directly using a lambda
     * as the first argument.
     */
    watch(
      () => props.modelValue,
      (value) => {
        checked.value = value
      },
      { immediate: true }
    )

    /**
     * If we'd like to watch a ref,
     * the first argument is not a function but a ref
     */
    watch(checked, (value) => {
      emit('update:modelValue', value)
    })

    /**
     * Return an object with all the things that should be
     * available in the template
     */
    return {
      checked
    }
  }
}
</script>
