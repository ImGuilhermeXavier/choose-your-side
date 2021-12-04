import React from 'react'
import Button from '../../components/Button/Button'
import styles from './Home.module.scss'

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.welcome}>
        <h1 className={styles.title}>
          Welcome to <b>iClinic</b>
        </h1>
        <h3 className={styles.subtitle}>Frontend Challenge</h3>
      </div>
      <Button size="lg">START</Button>
    </section>
  )
}

export default Home
