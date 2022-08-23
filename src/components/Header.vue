<template>
  <header css:h="[128px]" css:flex="~" css:items="center" css:justify="between">
    <h1 css:text="4xl black dark:zinc-200" css:font="bold" css:tracking="tight">
      <span css:text="green-500">Vue</span> Todos
    </h1>
    <ColorMode />
  </header>
</template>
<script>
import ColorMode from './ColorMode.vue'

export default {
  components: {
    ColorMode
  }
}
</script>
