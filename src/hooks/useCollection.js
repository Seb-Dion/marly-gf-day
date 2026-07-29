import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'marly-blindbox-collection'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function useCollection() {
  const [collected, setCollected] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collected))
    } catch {
      // localStorage unavailable — collection just won't persist across reloads
    }
  }, [collected])

  const addToCollection = useCallback((id) => {
    setCollected((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }, [])

  return { collected, addToCollection }
}
