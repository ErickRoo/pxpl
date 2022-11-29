import React, { FunctionComponent } from 'react'

import FormNewsletter from 'components/generic/form-newsletter/form-newsletter'
import PromoToutSignUpItemInterface from './promo_tout_signup_item.interface'
import styles from './promo_tout_signup_item.module.scss'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutSignUpItem:FunctionComponent<PromoToutSignUpItemInterface> = ({
  centered, headline, description,
}) => (
  <div className={styles.root}>
    <section className={`${styles.wrapper} ${centered ? styles.wrapper__centered : ''}`}>
      <div className={styles.leftSide}>
        <h5 className={`typo-h5 ${styles.headline}`}>{headline}</h5>
        <p className="typo-body">{description}</p>
      </div>
      <div className={styles.rightSide}>
        <FormNewsletter />
      </div>
    </section>
  </div>
)

export default PromoToutSignUpItem
