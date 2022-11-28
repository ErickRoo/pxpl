import React, { FunctionComponent } from 'react'

import CardOutlineItem from 'components/generic/card_outline_item/card_outline_item'
import ContentCardInterface from './content_card.interface'
import styles from './content_card.module.scss'

export const typename = 'Set_Replicator_BlockContentCard'

const ContentCardBlock:FunctionComponent<{ block: ContentCardInterface }> = ({ block }) => (
  <div className={styles.root}>
    {block?.rows?.map((oneRow, idx) => {
      const key = `one-row-${idx}`

      return (
        <section className={styles.wrapper}>
          <div key={key} className={`${styles.row} ${styles?.[`row__variant${oneRow.quantity}`]}`}>
            {oneRow.items.map((oneItem, index) => {
              const subkey = `one-item-${index}`

              return (
                <CardOutlineItem
                  key={subkey}
                  variant={`variant${oneRow.quantity}`}
                  category={oneItem.category}
                  image={oneItem.image}
                  icon={oneItem.icon}
                  eyebrow={oneItem.eyebrow}
                  date={oneItem.date}
                  headline={oneItem.headline}
                  description={oneItem.description}
                  ctaLink={oneItem.ctaLink}
                  tags={oneItem.tags}
                />
              )
            })}
          </div>
        </section>
      )
    })}
  </div>
)

export default ContentCardBlock
