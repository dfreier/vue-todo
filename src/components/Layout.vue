<template>
  <div
    css:w="full"
    css:flex="1"
    css:bg="dark:zinc-800"
    css:animate="bgfade dark:none"
  >
    <div css:w="max-[768px]" css:m="x-auto" css:p="x-8" css:flex="~ col">
      <Header />
      <main css:flex="~ col">
        <slot></slot>
      </main>
      <footer css:h="20"></footer>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'

export default {
  components: {
    Header
  }
}
</script>
