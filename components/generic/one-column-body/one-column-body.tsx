import React, { FC, ElementType } from 'react'
import ArrowButton from '../arrow-button/arrow-button'
import UnderlinedButton from '../underlined-button/underlined-button'
import { OneColumnBodyInterface } from './one-column-body.interface'
import styles from './one-column-body.module.scss'

const OneColumnBody: FC<OneColumnBodyInterface> = ({
  className = '', headline, headlineLevel, description, primaryCta, secondaryCta,
}) => {
  const Heading = (headlineLevel ? `h${headlineLevel}` : 'div') as ElementType

  return (
    <div className={`${styles.root} ${className}`}>
      <Heading className={styles.heading}>
        {headline}
      </Heading>
      {description && (
        <p className={styles.description}>{description}</p>
      )}
      <section className={styles.buttonsContainer}>
        {primaryCta && (
          <ArrowButton text={primaryCta.ctaText} href={primaryCta.ctaLink} />
        )}
        {secondaryCta && (
          <UnderlinedButton text={secondaryCta.ctaText} href={secondaryCta.ctaLink} underlineColor="#5951FF" />
        )}
      </section>
    </div>
  )
}

export default OneColumnBody
