import React, { useEffect } from 'react'
import Button from '../../components/Button/Button'
import { ThemeContext } from '../../ThemeContext'
import styles from './Home.module.scss'

function Home() {
  const { getForceSide, loading, setTheme } = React.useContext(ThemeContext)

  useEffect(() => {
    setTheme(null)
  }, [setTheme])

  return (
    <section className={styles.home}>
      <div className={styles.welcome}>
        <h1 className={styles.title}>
          Welcome to <b>iClinic</b>
        </h1>
        <h3 className={styles.subtitle}>Frontend Challenge</h3>
      </div>
      <Button
        className={styles.btn}
        disabled={loading}
        onClick={() => getForceSide()}
        size="lg"
      >
        {loading ? 'CHOOSING' : 'START'}
      </Button>
    </section>
  )
}

export default Home
