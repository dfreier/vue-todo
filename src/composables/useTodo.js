import { computed } from 'vue'
import { createGlobalState, resolveUnref, useLocalStorage } from '@vueuse/core'
import { nanoid } from 'nanoid'

const useState = createGlobalState(() =>
  useLocalStorage('vue-todo-todos', {
    todos: [],
    sorting: 'asc',
    filter: 'all'
  })
)

export default function (id) {
  const state = useState()

  const todoId = computed(() => resolveUnref(id))

  const todos = computed({
    get: () => state.value.todos ?? [],
    set: (value) => (state.value.todos = value)
  })

  const todo = computed(() => todos.value.find((t) => t.id === todoId.value))

  const sorting = computed({
    get: () => state.value.sorting,
    set: (value) => (state.value.sorting = value)
  })

  const filter = computed({
    get: () => state.value.filter,
    set: (value) => (state.value.filter = value)
  })

  const visibleTodos = computed(() => {
    const filtered = todos.value.filter((todo) => {
      if (filter.value === 'pending') {
        return !todo.done
      }
      return true
    })

    const sorted = filtered?.sort((a, b) => {
      let result = 0
      if (a.createdAt < b.createdAt) result = -1
      if (a.createdAt > b.createdAt) result = 1
      if (sorting.value === 'asc') result = result * -1
      return result
    })

    return sorted
  })

  function createTodo(title) {
    const todo = { id: nanoid(), title, done: false, createdAt: Date.now() }
    todos.value = [...todos.value, todo]
    return todo
  }

  function updateTodo(changes) {
    const updated = { ...todo.value, ...changes, id: todoId.value }
    todos.value = todos.value.map((t) => (t.id === todoId.value ? updated : t))
  }

  function deleteTodo() {
    todos.value = todos.value.filter((t) => t.id !== todoId.value)
  }

  return {
    todo,
    todos: visibleTodos,
    sorting,
    filter,
    createTodo,
    updateTodo,
    deleteTodo
  }
}
