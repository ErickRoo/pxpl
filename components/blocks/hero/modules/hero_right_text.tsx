import React, { FC } from 'react'
import ArrowButton from 'components/generic/arrow-button/arrow-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import HeroInterface from '../hero.interface'
import styles from '../hero.module.scss'

const HeroModuleRightText: FC<{ block: HeroInterface }> = ({ block }) => {
  const sectionStyles = {
    backgroundImage: `url(${block?.image})`,
  }
  return (
    <section className={`${styles.root} ${block?.variant} ${styles.heroJustText} mx-auto`} style={sectionStyles}>
      <div className={`${styles.wrapper} w-full flex flex-wrap items-center justify-end mx-auto`}>
        <div className={`w-full md:w-1/2 ${styles.rightTextFull}`}>
          <h1 className="typo-h1">
            {block?.headline?.map(
              (headline) => (
                <span key={headline?.text} className={headline?.color}>
                  {headline?.text}
                  <br />
                </span>
              ),
            )}
          </h1>
          <p className={`typo-body text-darkBlue ${styles.description}`}>{block?.description}</p>
          <div className={`${styles.buttonsContainer} flex-col md:flex-row`}>
            {block?.primaryCta && (
              <ArrowButton text={block?.primaryCta?.ctaText} href={block?.primaryCta?.ctaLink} />
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

export default HeroModuleRightText
