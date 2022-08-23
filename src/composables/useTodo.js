import { computed } from 'vue'
import { createGlobalState, resolveUnref, useLocalStorage } from '@vueuse/core'
import { nanoid } from 'nanoid'

/**
 * This is thing here allows us to have shared state across composables.
 * More on that later.
 */
const useState = createGlobalState(() =>
  useLocalStorage('vue-todo-todos', {
    todos: [],
    sorting: 'asc',
    filter: 'all'
  })
)

/**
 * We can make "configure" composables by adding parameters.
 * In this case, we'd like to prefill the composable with an id of a todo,
 * so we can expose functions that do not need an id parameter afterwards.
 *
 * @param id - An optional id (ref or string)
 */
export default function (id) {
  const state = useState()

  /**
   * Wrap the id in a computed ref where it is always reactive
   */
  const todoId = computed(() => resolveUnref(id))

  /**
   * The list of all todos.
   * This is a so called "WritableComputedRef" because we have
   * a getter and a setter.
   * We have this mainly because it simplifies the access to the shared state.
   */
  const todos = computed({
    get: () => state.value.todos ?? [],
    set: (value) => (state.value.todos = value)
  })

  /**
   * A computed todo for the given id
   */
  const todo = computed(() => todos.value.find((t) => t.id === todoId.value))

  /**
   * Writable computed for simplified state access
   */
  const sorting = computed({
    get: () => state.value.sorting,
    set: (value) => (state.value.sorting = value)
  })

  /**
   * Writable computed for simplified state access
   */
  const filter = computed({
    get: () => state.value.filter,
    set: (value) => (state.value.filter = value)
  })

  /**
   * Another computed ref which applies the sorting and filtering
   */
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

  /**
   * Here our create, update and delete functions.
   * Note that update and delete are using the "baked-in" id.
   */
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

  /**
   * Return a nice interface to the outside world
   */
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
