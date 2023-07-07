import { useState } from 'react'

export function useSafeLocalStorage(key, initialValue) {
  const [valueProxy, setValueProxy] = useState(() => {
    try {
      const value = window.localStorage.getItem(key)
      return value ? JSON.parse(value) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      window.localStorage.setItem(key, value)
      setValueProxy(value)
    } catch {
      setValueProxy(value)
    }
  }

  return [valueProxy, setValue]
}
