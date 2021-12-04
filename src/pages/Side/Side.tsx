import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../ThemeContext'

function Side() {
  const { theme } = React.useContext(ThemeContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!theme) navigate('/')
  }, [theme, navigate])

  return (
    <section className={theme || ''}>
      <h1>É O SIDE CARALHO</h1>
      <h3>Frontend Challenge</h3>
    </section>
  )
}

export default Side
