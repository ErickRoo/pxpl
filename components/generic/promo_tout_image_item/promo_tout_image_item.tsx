import React, { FunctionComponent } from 'react'

import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import PromoToutImageItemInterface from './promo_tout_image_item.interface'
import styles from './promo_tout_image_item.module.scss'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutImageItem:FunctionComponent<PromoToutImageItemInterface> = ({
  centered, headline, description, variant, ctaLink,
}) => {
  const wrapperStyles = `${styles.wrapper} ${centered ? styles.wrapper__centered : ''}`
  return (
    <div className={styles.root}>
      <section className={wrapperStyles}>
        <div className={styles.leftSide}>
          <h5 className={`typo-h5 ${styles.headline}`}>{headline}</h5>
          <p className="typo-body">{description}</p>
        </div>
        <div className={styles.rightSide}>
          {variant === 'cta' && (
            <div className={styles.wrapperButton}>
              <TertiaryButton type="link" text="Learn more" variant="outline" href={ctaLink} />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default PromoToutImageItem
