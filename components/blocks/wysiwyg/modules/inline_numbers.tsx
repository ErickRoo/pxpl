import React, { FC } from 'react'
import styles from '../wysiwyg.module.scss'

interface Content {
  numbers?: []
}

const NumberComponent: FC<{ item: string, number: number }> = ({ item, number }) => {
  const numberString = number < 10 ? `0${number}` : number
  return (
    <div className={styles.inlineTextNumber}>
      <div className={styles.inlineTextNumberBox}>
        {numberString}
      </div>
      <div className={styles.inlineTextNumberContent}>{item}</div>
    </div>
  )
}

const InlineNumbers: FC<{ content: Content }> = ({ content }) => {
  const { numbers } = content
  const random = (index: number) => Math.floor(Math.random() * (index * 1000 - 1000 + 1) + 1000)

  return (
    <div className={styles.inlineTextNumbers}>
      {numbers?.map((item, index) => (
        <NumberComponent key={`${item}-${random(index)}`} item={item} number={index + 1} />
      ))}
    </div>
  )
}

export default InlineNumbers
