<script setup></script>
<template>
  <Layout>
    <TodoInput @create="createTodo" />
    <TodoList
      :todos="visibleTodos"
      :show-done="showDone"
      @delete="deleteTodo"
      @update:todo="updateTodo"
      @update:showDone="handleChangeShowDone"
    />
  </Layout>
</template>
<script>
import Layout from './components/Layout.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import { nanoid } from 'nanoid'

export default {
  data() {
    return {
      todos: [],
      showDone: true
    }
  },
  components: {
    Layout,
    TodoInput,
    TodoList
  },
  computed: {
    visibleTodos() {
      return this.todos.filter((t) => (this.showDone ? true : !t.done))
    }
  },
  methods: {
    createTodo(title) {
      const todo = { id: nanoid(), title, done: false, createdAt: Date.now() }
      this.todos = [...this.todos, todo]
      return todo
    },
    updateTodo(todo) {
      const { id } = todo
      this.todos = this.todos.map((t) => (t.id === id ? todo : t))
    },
    deleteTodo(todo) {
      const { id } = todo
      this.todos = this.todos.filter((t) => t.id !== id)
    },
    handleChangeShowDone(value) {
      this.showDone = value
    }
  }
}
</script>
