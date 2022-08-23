<template>
  <button
    @click="next()"
    css:h="8"
    css:w="8"
    css:p="1"
    css:text="black dark:zinc-200"
    css:rounded="full"
    css:outline="black 2"
  >
    <SunIcon v-if="mode === 'light'" />
    <MoonIcon v-if="mode === 'dark'" />
    <DesktopComputerIcon v-if="mode === 'auto'" />
  </button>
</template>
<script>
import { DesktopComputerIcon, MoonIcon, SunIcon } from '@heroicons/vue/outline'
import { useColorMode, useCycleList } from '@vueuse/core'

export default {
  components: {
    DesktopComputerIcon,
    MoonIcon,
    SunIcon
  },
  setup() {
    const mode = useColorMode({ emitAuto: true })
    const { next } = useCycleList(['dark', 'light', 'auto'], {
      initialValue: mode
    })

    return {
      mode,
      next
    }
  }
}
</script>
