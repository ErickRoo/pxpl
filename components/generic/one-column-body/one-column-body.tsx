import React, { FC } from 'react'
import ArrowButton from '../arrow-button/arrow-button'
import Headline from '../headline/headline'
import TertiaryButton from '../tertiary-button/tertiary-button'
import UnderlinedButton from '../underlined-button/underlined-button'
import { OneColumnBodyInterface } from './one-column-body.interface'
import styles from './one-column-body.module.scss'

const OneColumnBody: FC<OneColumnBodyInterface> = ({
  className = '', topTag, headline, headlineLevel, description, primaryCta, secondaryCta, showTertiaryButton,
}) => (
  <div className={`${styles.root} ${className}`}>
    {topTag && (
      <p className="eyebrow mb-[2.4rem]">{topTag}</p>
    )}
    {headline && (
      <Headline as={`h${headlineLevel}`} className={styles.heading}>{headline}</Headline>
    )}
    {description && (
      <p className={`${styles.description} typo-body`}>{description}</p>
    )}
    <section className={styles.buttonsContainer}>
      {primaryCta && (
        showTertiaryButton
          ? <TertiaryButton type="link" text={primaryCta.ctaText} href={primaryCta.ctaLink} />
          : <ArrowButton text={primaryCta.ctaText} href={primaryCta.ctaLink} />
      )}
      {secondaryCta && (
        <UnderlinedButton text={secondaryCta.ctaText} href={secondaryCta.ctaLink} underlineColor="passionBlue" />
      )}
    </section>
  </div>
)

export default OneColumnBody
