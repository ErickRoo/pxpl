import React, { FC } from 'react'
import styles from '../wysiwyg.module.scss'

const WysiwygKeyResult: FC<{ icon: string, content: string, bgToggle: boolean }> = ({
  icon = '/images/kr-1.svg',
  content = `With a single system-of-execution, 
  sellers are equipped for successful inbound and outbound prospecting.`,
  bgToggle = false,
}) => (
  <div className={bgToggle ? styles.keyResultBoxTb : styles.keyResultBox}>
    <div className={bgToggle ? styles.keyResultIconTb : styles.keyResultIcon}>
      <img src={icon} alt="icon" />
    </div>
    <div className={bgToggle ? styles.keyResultContentTb : styles.keyResultContent}>
      {content}
    </div>
  </div>
)

export default WysiwygKeyResult
