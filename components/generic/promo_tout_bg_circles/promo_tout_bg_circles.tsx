import React, { FunctionComponent } from 'react'

import PromoToutBgCirclesInterface from './promo_tout_bg_circles.interface'
import styles from './promo_tout_bg_circles.module.scss'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutBgCircles:FunctionComponent<PromoToutBgCirclesInterface> = ({
  alignment, bgImageCircles,
}) => {
  if (!bgImageCircles) {
    return null
  }

  return (
    <ul className={`${styles.root} ${styles?.[`circles__${alignment}`] ?? ''}`}>
      <li className={styles.circleA} />
      <li className={styles.circleB} />
      <li className={styles.circleC} />
    </ul>
  )
}

export default PromoToutBgCircles
