import React, { FunctionComponent } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import ArrowButton from 'components/generic/arrow-button/arrow-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import TertiaryButton from '../tertiary-button/tertiary-button'
import HorizontalCardItemInterface from './horizontal_card_item.interface'

import stylesLarge from './horizontal_card_item_variant_large.module.scss'
import stylesMedium from './horizontal_card_item_variant_medium.module.scss'
import stylesSmall from './horizontal_card_item_variant_small.module.scss'

const enumStyles = {
  large: stylesLarge,
  medium: stylesMedium,
  small: stylesSmall,
}

const HorizontalCardItem: FunctionComponent<{ oneItem: HorizontalCardItemInterface, odd: boolean }> = ({ oneItem, odd }) => {
  if (!oneItem) {
    return null
  }

  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const isMobile = ['normal', 'sm'].includes(currentBreakpoint?.position)
  const styles = enumStyles[oneItem.variant] ?? {}

  const wrapperStyles = `${styles.wrapper} ${oneItem.imageAlignment === 'right' ? styles.wrapper__right : ''}`
  return (
    <div className={styles.root}>
      <div className={`${wrapperStyles} ${odd ? styles.wrapper__odd : ''}`}>
        <div className={styles.wrapperImage}>
          <div style={{ backgroundImage: `url(${oneItem?.image?.src})` }} />
        </div>
        <div className={styles.wrapperText}>
          <p className={`eyebrow ${styles.topEyebrow}`}>{oneItem?.topEyebrow}</p>
          <img className={styles.icon} src={oneItem.icon.src} alt="placeholder" />
          <h4 className={`typo-h7 ${styles.headline}`}>{oneItem.headline}</h4>
          <p className={`typo-body ${styles.description}`}>{oneItem.description}</p>
          <div className={`${styles.buttonsContainer} ${oneItem.imageAlignment === 'right' ? styles.buttonsContainer__right : ''}`}>
            {oneItem.primaryCta && (
              (isMobile && oneItem.variant === 'large')
                ? <TertiaryButton type="link" text={oneItem.primaryCta.ctaText} href={oneItem.primaryCta.ctaLink} />
                : <ArrowButton text={oneItem.primaryCta.ctaText} href={oneItem.primaryCta.ctaLink} />
            )}
            {oneItem.secondaryCta && (
              <UnderlinedButton text={oneItem.secondaryCta.ctaText} href={oneItem.secondaryCta.ctaLink} underlineColor="passionBlue" />
            )}
          </div>
          {oneItem.bottomEyebrow && (
            <>
              <hr className={styles.line} />
              <p className={`eyebrow ${styles.bottomEyebrow}`}>{oneItem.bottomEyebrow}</p>
            </>
          )}
          {oneItem.tags?.length > 0 && (
            <div className={styles.bottomTags}>
              {oneItem.tags?.map((oneText, idx) => {
                const key = `one-bottom-${idx}`
                return <span key={key} className="eyebrow">{oneText}</span>
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HorizontalCardItem
