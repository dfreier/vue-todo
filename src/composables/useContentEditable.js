import { onClickOutside, useEventListener, useFocus } from '@vueuse/core'
import { nextTick, ref } from 'vue'

export default function (element, cb) {
  let initialValue = ''
  const contenteditable = ref(false)
  const { focused } = useFocus(element)

  useEventListener(element, 'dblclick', () => {
    startEditing()
  })

  useEventListener(element, 'keydown', (e) => {
    if (e.key === 'Enter') {
      commit()
    } else if (e.key === 'Escape') {
      abort()
    }
  })

  onClickOutside(element, commit)

  async function startEditing() {
    if (!contenteditable.value) {
      initialValue = element.value.textContent
      contenteditable.value = true
      await nextTick()
      focused.value = true
    }
  }

  function commit() {
    contenteditable.value = false
    if (typeof cb === 'function' && element.value.textContent) {
      cb(element.value.textContent)
    } else {
      abort()
    }
  }

  function abort() {
    contenteditable.value = false
    element.value.textContent = initialValue
  }

  return {
    contenteditable
  }
}
