import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'

const LUKE_URL = 'people/1'
const DARTH_VADER_URL = 'people/4'

interface InterfaceThemeContext {
  theme: 'light' | 'dark' | null
  setTheme: (theme: InterfaceThemeContext['theme']) => void
  forceSide: string | null
  getForceSide: () => void
  loading: boolean
}

export const ThemeContext = React.createContext<InterfaceThemeContext>({
  theme: null,
  forceSide: null,
  getForceSide: () => null,
  setTheme: () => null,
  loading: false,
})

interface InterfaceThemeStorage {
  children: React.ReactNode
}

export const ThemeStorage = ({ children }: InterfaceThemeStorage) => {
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState<InterfaceThemeContext['theme']>(null)
  const [forceSide, setForceSide] = useState<string | null>(null)
  const navigate = useNavigate()

  async function getForceSide() {
    setLoading(true)
    const lukePromise = api.get(LUKE_URL)
    const darthVaderPromise = api.get(DARTH_VADER_URL)
    const {
      config: { url },
      data: { name },
    } = await Promise.race([lukePromise, darthVaderPromise])
    navigate('side')
    setSide(url, name)
    setLoading(false)
    console.log(name)
  }

  function setSide(url: string | undefined, name: string) {
    switch (url) {
      case LUKE_URL:
        setTheme('light')
        setForceSide(name)
        break
      case DARTH_VADER_URL:
        setTheme('dark')
        setForceSide(name)
        break
      default:
        setTheme(null)
        setForceSide(null)
        navigate('/')
    }
  }

  // useEffect(() => {
  //   const main = document.querySelector('main') as HTMLDivElement
  //   main.className = theme || ''
  // }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, forceSide, setTheme, getForceSide, loading }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
