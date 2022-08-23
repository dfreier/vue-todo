import { ref, watch } from 'vue'

/**
 * Composables are just functions, that are called from `setup()` or
 * from other composables (and therefore ultimately again from `setup()`).
 *
 * Since composables are plain functions, executed during the `setup()` phase,
 * they can make use of the same stuff we already saw earlier (e.g. `watch`).
 *
 * --> The only thing that changed here is the dynamic prop name <--
 *
 * Convention: The name should start with `use` -> `useModel` in our case.
 *
 * @param props - The reactive prop object we got from `setup(props, { emit })`
 * @param name - The name of the particular prop (normally `modelValue`)
 * @param emit - Also from `setup(props, { emit })`
 */
export default function (props, name, emit) {
  const model = ref(props?.[name])
  watch(
    () => props?.[name],
    (value) => {
      model.value = value
    },
    { immediate: true }
  )
  watch(model, (value) => {
    emit(`update:${name}`, value)
  })

  return model
}
