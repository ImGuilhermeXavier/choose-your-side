import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  size: 'sm' | 'md' | 'lg'
}

function Button({ children, className, size, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[size]} ${className || ''}`}
    >
      {children}
    </button>
  )
}

export default React.memo(Button)
