import React, { FC } from 'react'
import styles from '../wysiwyg.module.scss'

interface Content {
  body?: string
}

const InlineBody: FC<{ content: Content }> = ({ content }) => {
  const { body } = content

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <div className={styles.inlineTextBody} dangerouslySetInnerHTML={{ __html: body }} />
    </>
  )
}

export default InlineBody
