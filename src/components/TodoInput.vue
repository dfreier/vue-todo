<template>
  <input
    type="text"
    placeholder="What needs to be done?"
    v-model="model"
    css:h="16"
    css:p="x-6"
    css:bg="white dark:zinc-600"
    css:font="medium"
    css:text="xl black dark:zinc-50"
    css:rounded="xl"
    css:border="2 black focus:black"
    css:outlint="focus:0"
    css:shadow="~ focus:lg"
    css:transition="all"
    class="focus:outline-0 focus:ring-0"
    @keydown.enter="enterTodo()"
  />
</template>
<script>
export default {
  data() {
    return {
      model: ''
    }
  },
  methods: {
    enterTodo() {
      const title = this.model.trim()
      if (title) {
        this.$emit('create', title)
        this.model = ''
      }
    }
  }
}
</script>
