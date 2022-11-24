import React, { FunctionComponent } from 'react'
import styles from './horizontal_card.module.scss'
import HorizontalCardInterface from './horizontal_card.interface'

export const typename = 'Set_Replicator_BlockHorizontalCard'

const HorizontalCardBlock:FunctionComponent<{ block: HorizontalCardInterface }> = () => (
  <div className={styles.root}>
    Horizontal card Block
  </div>
)

export default HorizontalCardBlock
