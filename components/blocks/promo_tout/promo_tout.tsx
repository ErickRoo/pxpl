import React, { FunctionComponent } from 'react'
import styles from './promo_tout.module.scss'
import PromoToutInterface from './promo_tout.interface'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutBlock:FunctionComponent<{ block: PromoToutInterface }> = ({ block }) => (
  <div>
    {block.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
      const key = `side-side-item-${idx}`
      return (
        <div className={styles.root} key={key}>something</div>
      )
    })}
  </div>
)

export default PromoToutBlock
