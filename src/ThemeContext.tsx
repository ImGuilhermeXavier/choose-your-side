import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'
import useLocalStorage from './hooks/useLocalStorage'

const LUKE_URL = 'people/1'
const DARTH_VADER_URL = 'people/4'

interface InterfaceThemeContext {
  forceSide: {
    theme: 'light' | 'dark'
    name: string
  } | null
  setForceSide: (forceSide: InterfaceThemeContext['forceSide']) => void
  getForceSide: () => void
  loading: boolean
}

export const ThemeContext = React.createContext<InterfaceThemeContext>({
  forceSide: null,
  setForceSide: () => null,
  getForceSide: () => null,
  loading: false,
})

interface InterfaceThemeStorage {
  children: React.ReactNode
}

export const ThemeStorage = ({ children }: InterfaceThemeStorage) => {
  const [loading, setLoading] = useState(false)
  const [forceSide, setForceSide] =
    useState<InterfaceThemeContext['forceSide']>(null)
  const navigate = useNavigate()
  const [, setSideLocalStorage] = useLocalStorage('side', '')

  async function getForceSide() {
    setLoading(true)
    const lukePromise = api.get(LUKE_URL)
    const darthVaderPromise = api.get(DARTH_VADER_URL)
    try {
      const {
        config: { url },
        data: { name },
      } = await Promise.race([lukePromise, darthVaderPromise])
      if (url) setSide(url, name)
      navigate('side')
    } catch (e) {
      setForceSide(null)
    } finally {
      setLoading(false)
    }
  }

  function setSide(url: string, name: string) {
    setForceSide({
      theme: url === LUKE_URL ? 'light' : 'dark',
      name,
    })
  }

  useEffect(() => {
    const item = localStorage.getItem('side')
    if (item) setForceSide(JSON.parse(item))
  }, [])

  useEffect(() => {
    forceSide
      ? setSideLocalStorage(JSON.stringify(forceSide))
      : setSideLocalStorage('')
  }, [forceSide, setSideLocalStorage])

  return (
    <ThemeContext.Provider
      value={{ forceSide, setForceSide, getForceSide, loading }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
