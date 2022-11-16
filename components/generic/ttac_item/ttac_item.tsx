import React, { FunctionComponent } from 'react'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import TtacItemInterface from './ttac_item.interface'
import styles from './ttac_item.module.scss'

export const typename = 'Set_Replicator_BlockTtac'

const TtacItem:FunctionComponent<TtacItemInterface> = ({
  variant, alignment, topTag, headline, description, primaryCta, secondaryCta, image, additionalSpace,
}) => {
  if (!headline) {
    return null
  }

  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const isMobile = ['normal', 'sm'].includes(currentBreakpoint?.position)

  if (variant === 'headline-top') {
    const oneColumnBodyBottomStyles = `${styles.oneColumnBody} ${styles.oneColumnBody__bottom}`
    return (
      <div className={styles.root}>
        <section className={styles.wrapper}>
          <OneColumnBody
            className={`${styles.oneColumnBody} ${alignment ? styles[`oneColumnBody__${alignment}`] : ''}`}
            topTag={topTag}
            headline={headline}
            headlineLevel={2}
          />
          <div className={`${styles.wrapperImage} ${styles.wrapperImage__headlineTop}`}>
            <img src={image?.src} alt="placeholderimage" />
          </div>
          <OneColumnBody
            className={`${oneColumnBodyBottomStyles} ${alignment ? styles[`oneColumnBody__${alignment}`] : ''}`}
            description={description}
            primaryCta={primaryCta}
            showTertiaryButton={isMobile}
            stackCtas={isMobile}
            secondaryCta={secondaryCta}
          />
        </section>
      </div>
    )
  }

  const oneColumnStyles = `${styles.oneColumnBody} ${styles.oneColumnBodySpaces} ${alignment ? styles[`oneColumnBody__${alignment}`] : ''}`
  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <OneColumnBody
          className={`${oneColumnStyles} ${additionalSpace ? '!mb-[6.8rem]' : ''}`}
          topTag={topTag}
          headline={headline}
          headlineLevel={2}
          description={description}
          primaryCta={primaryCta}
          showTertiaryButton={isMobile}
          stackCtas={isMobile}
          secondaryCta={secondaryCta}
        />
        <div className={styles.wrapperImage}>
          <img src={image?.src} alt="placeholderimage" />
        </div>
      </section>
    </div>
  )
}

export default TtacItem
