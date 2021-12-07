import React from 'react'
import styles from './Back.module.scss'
import backArrow from '../../static/icons/back-arrow.svg'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../ThemeContext'

interface InterfaceBack {
  to: string
  type?: 'black-type'
}

function Back({ to, type }: InterfaceBack) {
  const { forceSide } = React.useContext(ThemeContext)

  return (
    <NavLink to={to} className={`${styles.back} ${type ? styles[type] : ''}`}>
      <img
        width={35}
        height={25}
        className={`${forceSide ? styles[forceSide.theme] : ''} `}
        src={backArrow}
        alt="Arrow back"
      />
      <span className={styles.backText}>back</span>
    </NavLink>
  )
}

export default Back
