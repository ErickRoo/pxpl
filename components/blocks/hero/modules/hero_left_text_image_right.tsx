import React, { FC } from 'react'
import ArrowButton from 'components/generic/arrow-button/arrow-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import HeroInterface from '../hero.interface'
import styles from '../hero.module.scss'

const HeroModuleLeftTextImageRight: FC<{ block: HeroInterface }> = ({ block }) => {
  if (!block?.variant) return null

  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const noMobile = ['md', 'lg', 'xl', 'xxl'].includes(currentBreakpoint?.position)
  return (
    <section className={`${styles.root} ${block?.variant} overflow-hidden`}>
      <div className={`${styles.wrapper} w-full flex flex-wrap items-center justify-center mx-auto`}>
        <div className={`${styles.leftText}`}>
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
          <div className={`${styles.buttonsContainer} flex-col md:flex-row `}>
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
        <div className={`${styles.imageRight} ${block?.circle ? styles.circle : ''} relative`}>
          <img className={`${styles.image} relative`} src={block.image} alt="placeholderimage" />
        </div>
      </div>
    </section>
  )
}

export default HeroModuleLeftTextImageRight
