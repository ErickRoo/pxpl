import React, { FC } from 'react'
import styles from '../wysiwyg.module.scss'

const WysiwygSection: FC<{ children: any }> = ({ children }) => (
  <section className={styles.wysiwygSection}>
    <div className={styles.wysiwygContainer}>
      {children}
    </div>
  </section>
)

export default WysiwygSection
