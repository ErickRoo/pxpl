import React, { FunctionComponent } from 'react'

import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import PromoToutItemInterface from './promo_tout_item.interface'
import styles from './promo_tout_item.module.scss'
import PromoToutBgCircles from '../promo_tout_bg_circles/promo_tout_bg_circles'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutItem:FunctionComponent<PromoToutItemInterface> = ({
  centered, headline, description, ctaLink, bgImageCircles,
}) => (
  <div className={`${styles.root} ${bgImageCircles ? styles.circles : ''}`}>
    <section className={`${styles.wrapper} ${centered ? styles.wrapper__centered : ''} ${bgImageCircles ? styles.wrapper__circles : ''}`}>
      <PromoToutBgCircles bgImageCircles={bgImageCircles} alignment={centered ? 'centered' : ''} />
      <div className={styles.leftSide}>
        <h5 className={`typo-h5 ${styles.headline}`}>{headline}</h5>
        <p className="typo-body">{description}</p>
      </div>
      <div className={styles.rightSide}>
        <TertiaryButton type="link" text="Learn more" variant={!bgImageCircles ? 'outline' : ''} href={ctaLink} />
      </div>
    </section>
  </div>
)

export default PromoToutItem
