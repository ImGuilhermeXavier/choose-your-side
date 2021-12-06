import React, { useEffect } from 'react'
import Button from '../../components/Button/Button'
import Image from '../../components/Image/Image'
import { ThemeContext } from '../../ThemeContext'
import styles from './Side.module.scss'
import backArrow from '../../static/icons/back-arrow.svg'
import { NavLink, useNavigate } from 'react-router-dom'

function Side() {
  const { forceSide, getForceSide, loading } = React.useContext(ThemeContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!forceSide) navigate('/')
  }, [forceSide, navigate])

  if (!forceSide) return null
  return (
    <section className={`${forceSide.theme || ''} ${styles.side}`}>
      <NavLink to="/" className={styles.back}>
        <img
          width={35}
          height={25}
          className={styles[forceSide.theme]}
          src={backArrow}
          alt="Arrow back"
        />
        <span className={styles.backText}>back</span>
      </NavLink>
      <Button
        onClick={() => getForceSide()}
        disabled={loading}
        size="md"
        className={styles.button}
      >
        choose your path again, Padawan
      </Button>
      <Image
        src={forceSide.theme}
        alt={forceSide.name}
        isRounded={true}
        className={styles.img}
        width="100%"
        height="100%"
      />
      <h1 className={styles.title}>
        Your master is <b>{forceSide.name}</b>
      </h1>
    </section>
  )
}

export default Side
