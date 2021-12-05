import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'

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

  async function getForceSide() {
    setLoading(true)
    const lukePromise = api.get(LUKE_URL)
    const darthVaderPromise = api.get(DARTH_VADER_URL)
    const {
      config: { url },
      data: { name },
    } = await Promise.race([lukePromise, darthVaderPromise])
    setSide(url, name)
    navigate('side')
    setLoading(false)
    console.log(name)
  }

  function setSide(url: string | undefined, name: string) {
    switch (url) {
      case LUKE_URL:
        setForceSide({
          theme: 'light',
          name,
        })
        break
      case DARTH_VADER_URL:
        setForceSide({
          theme: 'dark',
          name,
        })
        break
      default:
        setForceSide(null)
        navigate('/')
    }
  }

  useEffect(() => {
    if (!forceSide) {
      setForceSide(null)
      navigate('/')
    }
  }, [forceSide, navigate])

  return (
    <ThemeContext.Provider
      value={{ forceSide, setForceSide, getForceSide, loading }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
