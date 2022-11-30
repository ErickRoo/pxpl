import React, { FunctionComponent } from 'react'

import ArrowButton from 'components/generic/arrow-button/arrow-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import FormPlaceHolder from 'components/generic/form-placeholder/form-placeholder'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'

import { FormHeroItemInterface } from '../form_hero.interface'
import styles from '../form_hero.module.scss'

const FormHeroItem: FunctionComponent<{ oneItem: FormHeroItemInterface }> = ({ oneItem }) => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const alternative = oneItem.variant === 'alternative'
  const isDesktop = ['lg', 'xl', 'xxl'].includes(currentBreakpoint?.position)
  const isMobile = ['normal', 'sm'].includes(currentBreakpoint?.position)

  const renderBody = () => (
    <>
      <h5 className={`typo-h5 ${styles.subHeadline}`}>{oneItem.subHeadline}</h5>
      <p className={`typo-body ${styles.bodyText}`}>{oneItem.bodyTopText}</p>
      <ul className={`typo-body ${styles.listText}`}>
        {oneItem.listText.map((oneText, index) => {
          const subKey = `one-text-${index}`
          return <li className={styles.oneText} key={subKey}>{oneText}</li>
        })}
      </ul>
      <p className={`typo-body ${styles.bodyText}`}>{oneItem.bodyBottomText}</p>
      <div className={styles.buttonsContainer}>
        {oneItem.primaryCta && (
          isMobile
            ? <TertiaryButton type="link" text={oneItem.primaryCta.ctaText} href={oneItem.primaryCta.ctaLink} />
            : <ArrowButton text={oneItem.primaryCta.ctaText} href={oneItem.primaryCta.ctaLink} />
        )}
        {oneItem.secondaryCta && (
          <UnderlinedButton
            text={oneItem.secondaryCta.ctaText}
            href={oneItem.secondaryCta.ctaLink}
            underlineColor="passionBlue"
          />
        )}
      </div>
    </>
  )

  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <div className={styles.leftSide}>
          <p className={`eyebrow ${styles.eyebrow}`}>{oneItem.eyebrow}</p>
          <h4 className={`typo-h4 ${styles.headline}`}>{oneItem.headline}</h4>
          {isDesktop && renderBody()}
        </div>
        {!isDesktop && (
          <div className={`${styles.middleSide} ${alternative ? styles.middleSide__alternative : ''}`}>
            {renderBody()}
          </div>
        )}
        <div className={`${styles.rightSide} ${alternative ? styles.rightSide__alternative : ''}`}>
          <FormPlaceHolder />
        </div>
      </section>
    </div>
  )
}

export default FormHeroItem
