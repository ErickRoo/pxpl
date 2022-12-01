import React, { FC } from 'react'
import styles from '../wysiwyg.module.scss'

interface Content {
  eyebrow?: string
}

const InlineEyebrow: FC<{ content: Content }> = ({ content }) => {
  const { eyebrow } = content
  return (
    <span className={`eyebrow ${styles.inlineTextEyebrow}`}>{eyebrow}</span>
  )
}

export default InlineEyebrow
