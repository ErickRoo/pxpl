import React, { FunctionComponent } from 'react'

import HorizontalCardItem from 'components/generic/horizontal_card_item/horizontal_card_item'
import HorizontalCardInterface from './horizontal_card.interface'
import styles from './horizontal_card.module.scss'

export const typename = 'Set_Replicator_BlockHorizontalCard'

const HorizontalCardBlock:FunctionComponent<{ block: HorizontalCardInterface }> = ({ block }) => (
  <div className={styles.root}>
    {block?.rows?.map((oneRow, idx) => {
      const key = `one-row-${idx}`

      return (
        <section key={key} className={styles.row}>
          {oneRow?.items?.map((oneItem, index) => {
            const subkey = `one-card-item-${index}`

            return <HorizontalCardItem key={subkey} oneItem={oneItem} />
          })}
        </section>
      )
    })}
  </div>
)

export default HorizontalCardBlock
