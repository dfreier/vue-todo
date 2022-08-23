<template>
  <SwitchGroup as="div" css:flex="~" css:items="center">
    <Switch
      v-model="checked"
      css:h="4"
      css:w="7"
      css:position="relative"
      css:flex="shrink-0"
      css:inline="flex"
      css:rounded="full"
      css:border="2 transparent"
      css:outline="focus:none"
      css:ring="2 black dark:zinc-300"
      css:transitions="colors"
      css:ease="in-out"
      css:duration="200"
      css:cursor="pointer"
      :class="{ 'bg-black dark:bg-zinc-300': checked }"
    >
      <span
        aria-hidden="true"
        css:h="3"
        css:w="3"
        css:inline="block"
        css:rounded="full"
        css:ring="0"
        css:pointer="events-none"
        css:transform="~"
        css:transition="~"
        css:ease="in-out"
        css:duration="200"
        :class="[
          checked
            ? 'translate-x-3 bg-white dark:bg-zinc-800'
            : 'translate-x-0 bg-black dark:bg-zinc-300'
        ]"
      />
    </Switch>
    <SwitchLabel
      as="span"
      css:m="l-3"
      css:font="medium"
      css:text="xs black dark:zinc-300"
      css:cursor="pointer"
    >
      <slot></slot>
    </SwitchLabel>
  </SwitchGroup>
</template>
<script>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import useModel from '../composables/useModel.js'

export default {
  components: {
    Switch,
    SwitchGroup,
    SwitchLabel
  },
  props: {
    modelValue: Boolean
  },
  /**
   * Way less code duplication now! 💪
   */
  setup(props, { emit }) {
    /**
     * Each time we call `useModel()` we get a fresh Boolean ref.
     * Again, we are just calling a totally normal function.
     *
     *☝️Keep in mind, state between composables is NOT shared.
     * We see later how we can share state if we'd like to.
     */
    const checked = useModel(props, 'modelValue', emit)
    return {
      checked
    }
  }
}
</script>
