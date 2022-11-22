import React, { FunctionComponent } from 'react'

import CardOutlineItemInterface from './card_outline_item.interface'
import styles from './card_outline_item.module.scss'

const CardOutlineItem:FunctionComponent<{ block: CardOutlineItemInterface }> = () => (
  <div className={styles.root}>
    CardOutlineItem
  </div>
)

export default CardOutlineItem
