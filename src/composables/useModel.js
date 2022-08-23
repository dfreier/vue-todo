import { ref, watch } from 'vue'

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
