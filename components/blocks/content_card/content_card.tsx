import React, { FunctionComponent } from 'react'

import ContentCardInterface from './content_card.interface'
import styles from './content_card.module.scss'

export const typename = 'Set_Replicator_BlockContentCard'

const ContentCardBlock:FunctionComponent<{ block: ContentCardInterface }> = () => (
  <div className={styles.root}>
    ContentCard Block
  </div>
)

export default ContentCardBlock
