import React, { FunctionComponent } from 'react'

import FormNewsletter from 'components/generic/form-newsletter/form-newsletter'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import PromoToutItemInterface from './promo_tout_item.interface'
import styles from './promo_tout_item.module.scss'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutItem:FunctionComponent<PromoToutItemInterface> = ({
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
          {variant === 'signup' && <FormNewsletter className={styles.wrapperForm} />}
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

export default PromoToutItem
