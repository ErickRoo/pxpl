import React, { FunctionComponent } from 'react'

import PromoToutItem from 'components/generic/promo_tout_item/promo_tout_item'
import PromoToutImageItem from 'components/generic/promo_tout_image_item/promo_tout_image_item'
import PromoToutInterface from './promo_tout.interface'
import styles from './promo_tout.module.scss'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutBlock:FunctionComponent<{ block: PromoToutInterface }> = ({ block }) => (
  <div className={styles.root}>
    {block.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
      const key = `promo-tout-item-${idx}`

      if (oneTextImageItem.variant === 'image') {
        return (
          <PromoToutImageItem
            key={key}
            variant={oneTextImageItem.variant}
            headline={oneTextImageItem.headline}
            description={oneTextImageItem.description}
            image={oneTextImageItem.image}
            imageAlignment={oneTextImageItem.imageAlignment}
            bgImageCircles={oneTextImageItem.bgImageCircles}
            ctaLink={oneTextImageItem.ctaLink}
          />
        )
      }

      return (
        <PromoToutItem
          key={key}
          variant={oneTextImageItem.variant}
          headline={oneTextImageItem.headline}
          description={oneTextImageItem.description}
          centered={oneTextImageItem.centered}
          bgImageCircles={oneTextImageItem.bgImageCircles}
          ctaLink={oneTextImageItem.ctaLink}
        />
      )
    })}
  </div>
)

export default PromoToutBlock
