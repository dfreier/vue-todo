<template>
  <Layout>
    <TodoInput />
    <TodoList />
  </Layout>
</template>
<script>
import Layout from './components/Layout.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
    Layout,
    TodoInput,
    TodoList
  }
}
</script>
