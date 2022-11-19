import React, { FunctionComponent } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import PromoToutBgCircles from '../promo_tout_bg_circles/promo_tout_bg_circles'
import PromoToutImageItemInterface from './promo_tout_image_item.interface'
import styles from './promo_tout_image_item.module.scss'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutImageItem:FunctionComponent<PromoToutImageItemInterface> = ({
  headline, description, ctaLink, image, imageAlignment, bgImageCircles,
}) => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const isLargeDesktop = ['xxl', 'xl'].includes(currentBreakpoint?.position)

  const wrapperStyles = `${styles.wrapper} ${imageAlignment === 'left' ? styles.wrapper__left : ''}`
  return (
    <div className={styles.root}>
      <section className={`${wrapperStyles} ${bgImageCircles ? styles.wrapper__circles : ''}`}>
        <PromoToutBgCircles bgImageCircles={bgImageCircles} alignment={imageAlignment} />
        <div className={styles.firstCol}>
          <h5 className={`typo-h5 ${styles.headline}`}>{headline}</h5>
          <p className="typo-body">{description}</p>
          {(imageAlignment === 'right' || !isLargeDesktop) && (
            <div className={styles.wrapperButton}>
              <TertiaryButton type="link" text="Learn more" variant={!bgImageCircles ? 'outline' : ''} href={ctaLink} />
            </div>
          )}
        </div>
        <div className={styles.secondCol}>
          <img className={styles.image} src={image?.src} alt="placeholderimage" />
        </div>
        {imageAlignment === 'left' && isLargeDesktop && (
          <div className={styles.wrapperButton}>
            <TertiaryButton type="link" text="Learn more" variant={!bgImageCircles ? 'outline' : ''} href={ctaLink} />
          </div>
        )}
      </section>
    </div>
  )
}

export default PromoToutImageItem
