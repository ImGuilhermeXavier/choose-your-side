import React from 'react'
import Button from '../../components/Button/Button'
import Image from '../../components/Image/Image'
import { ThemeContext } from '../../ThemeContext'
import styles from './Side.module.scss'
import backArrow from '../../static/icons/back-arrow.svg'

function Side() {
  const { theme, forceSide, getForceSide, loading, setTheme } =
    React.useContext(ThemeContext)

  if (!theme || !forceSide) return null
  return (
    <section className={`${theme || ''} ${styles.side}`}>
      <button className={styles.back} onClick={() => setTheme(null)}>
        <img className={styles[theme]} src={backArrow} alt="Arrow back" />
        <span className={styles.backText}>back</span>
      </button>
      <Button
        onClick={() => getForceSide()}
        disabled={loading}
        size="md"
        className={styles.button}
      >
        choose your path again, Padawan
      </Button>
      <Image
        src={theme}
        alt={forceSide}
        isRounded={true}
        className={styles.img}
      />
      <h1 className={styles.title}>
        Your master is <b>{forceSide}</b>
      </h1>
    </section>
  )
}

export default Side
