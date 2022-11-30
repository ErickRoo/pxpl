import React, { FC } from 'react'
import styles from '../wysiwyg.module.scss'

interface Content {
  line?: boolean
}

const InlineLine: FC<{ content: Content }> = ({ content }) => {
  const { line } = content
  if (!line) return null

  return (
    <div className={styles.inlineTextLine} />
  )
}

export default InlineLine
