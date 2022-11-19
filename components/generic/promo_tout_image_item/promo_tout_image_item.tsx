import React, { FunctionComponent } from 'react'

import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import PromoToutImageItemInterface from './promo_tout_image_item.interface'
import styles from './promo_tout_image_item.module.scss'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutImageItem:FunctionComponent<PromoToutImageItemInterface> = ({
  headline, description, ctaLink, image, imageAlignment, bgImageCircles,
}) => {
  const wrapperStyles = `${styles.wrapper} ${imageAlignment === 'left' ? styles.wrapper__left : ''}`
  return (
    <div className={styles.root}>
      <section className={`${wrapperStyles} ${bgImageCircles ? styles.wrapper__circles : ''}`}>
        {bgImageCircles && (
          <ul className={`${styles.circles} ${imageAlignment === 'left' ? styles.circles__left : ''}`}>
            <li />
            <li />
            <li />
          </ul>
        )}
        <div className={styles.firstCol}>
          <h5 className={`typo-h5 ${styles.headline}`}>{headline}</h5>
          <p className="typo-body">{description}</p>
          {imageAlignment === 'right' && (
            <div className={styles.wrapperButton}>
              <TertiaryButton type="link" text="Learn more" variant={!bgImageCircles ? 'outline' : ''} href={ctaLink} />
            </div>
          )}
        </div>
        <div className={styles.secondCol}>
          <img className={styles.image} src={image?.src} alt="placeholderimage" />
        </div>
        {imageAlignment === 'left' && (
          <div className={styles.wrapperButton}>
            <TertiaryButton type="link" text="Learn more" variant={!bgImageCircles ? 'outline' : ''} href={ctaLink} />
          </div>
        )}
      </section>
    </div>
  )
}

export default PromoToutImageItem
