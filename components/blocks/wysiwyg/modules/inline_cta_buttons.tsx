import React, { FC } from 'react'
import ArrowButton from 'components/generic/arrow-button/arrow-button'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import styles from '../wysiwyg.module.scss'

interface Content {
  primaryCta?: {
    ctaText: string
    ctaLink: string
  }
  secondaryCta?: {
    ctaText: string
    ctaLink: string
  }
}

const InlineCtaButtons: FC<{ content: Content }> = ({ content }) => {
  const primaryCta = content?.primaryCta || null
  const secondaryCta = content?.secondaryCta || null
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const noMobile = ['md', 'lg', 'xl', 'xxl'].includes(currentBreakpoint?.position)

  return (
    <div className={`${styles.buttonsContainer} ${styles.buttonsContainerLeft} flex-col md:flex-row`}>
      {primaryCta !== null && noMobile ? (
        <ArrowButton text={primaryCta?.ctaText} href={primaryCta?.ctaLink} />
      ) : (
        <TertiaryButton type="link" text={primaryCta?.ctaText} href={primaryCta?.ctaLink} />
      )}
      {secondaryCta !== null && (
        <UnderlinedButton text={secondaryCta?.ctaText} href={secondaryCta?.ctaLink} underlineColor="passionBlue" />
      )}
    </div>
  )
}

export default InlineCtaButtons
