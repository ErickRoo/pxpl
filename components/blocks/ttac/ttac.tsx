import React, { FunctionComponent } from 'react'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import TtacInterface from './ttac.interface'
import styles from './ttac.module.scss'

export const typename = 'Set_Replicator_BlockTtac'

const TtacBlock:FunctionComponent<{ block: TtacInterface }> = ({ block }) => {
  if (!block) {
    return null
  }

  const { alignment, variant } = block
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const showTertiaryButton = ['normal', 'sm'].includes(currentBreakpoint?.position)

  if (variant === 'headline-top') {
    const oneColumnBodyBottomStyles = `${styles.oneColumnBody} ${styles.oneColumnBody__bottom}`
    return (
      <div className={styles.root}>
        <section className={styles.wrapper}>
          <OneColumnBody
            className={`${styles.oneColumnBody} ${alignment ? styles[`oneColumnBody__${alignment}`] : ''}`}
            topTag={block.topTag}
            headline={block.headline}
            headlineLevel={2}
          />
          <div className={`${styles.wrapperImage} ${styles.wrapperImage__headlineTop}`}>
            <img src={block.image?.src} alt="placeholderimage" />
          </div>
          <OneColumnBody
            className={`${oneColumnBodyBottomStyles} ${alignment ? styles[`oneColumnBody__${alignment}`] : ''}`}
            description={block.description}
            primaryCta={block.primaryCta}
            showTertiaryButton={showTertiaryButton}
            secondaryCta={block.secondaryCta}
          />
        </section>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <OneColumnBody
          className={`${styles.oneColumnBody} ${styles.oneColumnBodySpaces} ${alignment ? styles[`oneColumnBody__${alignment}`] : ''}`}
          topTag={block.topTag}
          headline={block.headline}
          headlineLevel={2}
          description={block.description}
          primaryCta={block.primaryCta}
          showTertiaryButton={showTertiaryButton}
          secondaryCta={block.secondaryCta}
        />
        <div className={styles.wrapperImage}>
          <img src={block.image?.src} alt="placeholderimage" />
        </div>
      </section>
    </div>
  )
}

export default TtacBlock
