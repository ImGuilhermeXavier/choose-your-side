import React from 'react'
import styles from './Image.module.scss'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  isRounded?: boolean
}

function Image({ src, alt, isRounded, className }: ImageProps) {
  return (
    <img
      className={`${isRounded ? styles['rounded'] : ''} ${className || ''}`}
      src={require(`../../static/images/${src}.webp`).default}
      alt={alt}
    />
  )
}

export default Image
