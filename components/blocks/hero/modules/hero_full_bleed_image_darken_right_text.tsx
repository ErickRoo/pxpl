import React, { FC } from 'react'
import ArrowButton from 'components/generic/arrow-button/arrow-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import HeroInterface from '../hero.interface'
import styles from '../hero.module.scss'

const HeroModuleFullBleedImageDarkenRightText: FC<{ block: HeroInterface }> = ({ block }) => {
  if (!block?.variant) return null

  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const noMobile = ['md', 'lg', 'xl', 'xxl'].includes(currentBreakpoint?.position)
  const sectionStyles = !noMobile ? { backgroundImage: `url(${block?.imageMobile})` } : { backgroundImage: `url(${block?.image})` }
  const circle = `${styles.circleLeftFullBleed} ${styles.circleFullBleedMobile}`

  return (
    <section className={`${block?.variant} ${styles.imageDarkenRight} mx-auto`} style={sectionStyles}>
      <div className={`${styles.wrapperFullBleed} w-full flex flex-wrap items-center justify-between mx-auto`}>
        <div className={`${styles.imageLeftFullBleed} ${block?.circle ? circle : ''} relative`} />
        <div className={`${styles.rightTextFullBleed} relative`}>
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
              noMobile ? (
                <ArrowButton text={block?.primaryCta?.ctaText} href={block?.primaryCta?.ctaLink} />
              ) : (
                <TertiaryButton type="link" href={block?.primaryCta?.ctaLink} text={block?.primaryCta?.ctaText} />
              )
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

export default HeroModuleFullBleedImageDarkenRightText
