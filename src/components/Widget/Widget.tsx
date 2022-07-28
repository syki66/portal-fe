import React from 'react'
import styles from './Widget.module.scss'

type Props = {
    title: string,
    content: string
}

export default function Widget({ title, content }: Props) {
  return (
    <div className={styles.widget}>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
  )
}