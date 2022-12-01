import React, { FC } from 'react'
import styles from '../wysiwyg.module.scss'

interface Content {
  checkMarks?: []
}

const CheckMark: FC<{ item: string }> = ({ item }) => (
  <div className={styles.inlineTextCheckMark}>
    <div className={styles.inlineTextCheckMarkIcon}>
      <img src="/images/CheckCircle.svg" alt="check-mark" />
    </div>
    <div className={styles.inlineTextCheckMarkContent}>{item}</div>
  </div>
)

const InlineCheckMarks: FC<{ content: Content }> = ({ content }) => {
  const { checkMarks } = content
  const random = (index: number) => Math.floor(Math.random() * (index * 1000 - 1000 + 1) + 1000)

  return (
    <div className={styles.inlineTextBullets}>
      {checkMarks?.map((item, index) => (
        <CheckMark key={`${item}-${random(index)}`} item={item} />
      ))}
    </div>
  )
}

export default InlineCheckMarks
