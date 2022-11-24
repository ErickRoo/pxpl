import React, { FunctionComponent } from 'react'

import HorizontalCardItem from 'components/generic/horizontal_card_item/horizontal_card_item'
import HorizontalCardInterface from './horizontal_card.interface'
import styles from './horizontal_card.module.scss'

export const typename = 'Set_Replicator_BlockHorizontalCard'

const HorizontalCardBlock:FunctionComponent<{ block: HorizontalCardInterface }> = ({ block }) => (
  <div className={styles.root}>
    <section className={styles.wrapper}>
      {block?.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
        const key = `horizontal-card-item-${idx}`
        return <HorizontalCardItem key={key} oneItem={oneTextImageItem} odd={idx % 2 === 0} />
      })}
    </section>
  </div>
)

export default HorizontalCardBlock
