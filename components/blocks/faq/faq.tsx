import React, { FunctionComponent } from 'react'
import styles from './faq.module.scss'
import FaqInterface from './faq.interface'

export const typename = 'Set_Replicator_BlockFaq'

const FaqBlock:FunctionComponent<{ block: FaqInterface }> = () => (
  <div className={`${styles.root} container`}>
    Faq Block
  </div>
)

export default FaqBlock
