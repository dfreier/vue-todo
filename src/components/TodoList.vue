<template>
  <div css:flex="~ col">
    <div
      css:h="12"
      css:flex="~"
      css:items="center"
      css:space="x-8"
      css:m="t-8 x-auto"
    >
      <TodoSorting />
      <TodoFilter />
    </div>
    <TransitionGroup
      name="list"
      tag="div"
      v-if="todos.length"
      css:position="relative"
      css:flex="~ col"
      css:bg="white opacity-80 dark:zinc-700 dark:opacity-70"
      css:rounded="xl"
      css:border="2 black"
      css:overflow="hidden"
      css:shadow="~"
      css:transition="all"
    >
      <div v-for="(todo, index) in todos" :key="todo.id">
        <TodoItem :id="todo.id" />
        <div css:border="b black" v-if="index < todos.length - 1"></div>
      </div>
    </TransitionGroup>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue'
import TodoSorting from './TodoSorting.vue'
import TodoFilter from './TodoFilter.vue'
import useTodo from '../composables/useTodo.js'

export default {
  components: {
    TodoItem,
    TodoSorting,
    TodoFilter
  },
  setup() {
    const { todos } = useTodo()
    return {
      todos
    }
  }
}
</script>
<style scoped>
.list-leave-active,
.list-enter-active {
  transition: all 0.4s ease;
  max-height: 9999px;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
