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

export default {
  components: {
    Switch,
    SwitchGroup,
    SwitchLabel
  },
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
