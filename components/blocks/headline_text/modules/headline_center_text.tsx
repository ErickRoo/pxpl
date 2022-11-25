import React, { FC } from 'react'
import ArrowButton from 'components/generic/arrow-button/arrow-button'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import { theme } from 'tailwind.config'
import HeadlineTextInterface from '../headline_text.interface'
import styles from '../headline_text.module.scss'

const HeadlineCenterText: FC<{ block: HeadlineTextInterface }> = ({ block }) => {
  if (!block?.variant) return null
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const noMobile = ['md', 'lg', 'xl', 'xxl'].includes(currentBreakpoint?.position)
  const bgStyles = block?.background_image ? {
    backgroundImage: `url(${block?.background_image})`,
  } : {
    backgroundColor: theme.colors.butterCream,
  }
  const centerText = `${styles.centerText} ${block?.background_image ? '' : styles.extraPadding}`
  const descriptionCenter = `${styles.description} ${styles.descriptionCenter} typo-body`

  return (
    <section className={`${styles.root} ${block?.background_image ? styles.bgImage : ''}`} style={bgStyles}>
      <div className="container">
        <div className={centerText}>
          <div className={styles.headline}>
            <span className="eyebrow">{block?.eyebrow}</span>
            <h2 className="typo-h2">{block?.headline}</h2>
          </div>
          <div className={descriptionCenter}>
            {block?.description}
          </div>
          <div className={`${styles.buttonsContainer} ${styles.buttonsContainerCenter} flex-col md:flex-row`}>
            {block?.primaryCta && noMobile ? (
              <ArrowButton text={block?.primaryCta?.ctaText} href={block?.primaryCta?.ctaLink} />
            ) : (
              <TertiaryButton type="link" text={block?.primaryCta?.ctaText} href={block?.primaryCta?.ctaLink} />
            )}
            {block?.secondaryCta && (
              <UnderlinedButton text={block?.secondaryCta?.ctaText} href={block?.secondaryCta?.ctaLink} underlineColor="passionBlue" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeadlineCenterText
