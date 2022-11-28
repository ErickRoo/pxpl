import React, { FunctionComponent, Fragment } from 'react'

import ArrowButton from 'components/generic/arrow-button/arrow-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import SmallQuoteItem from 'components/generic/small_quote_item/small_quote_item'
import LeftRightFeatureBlockInterface from './left_right_feature.interface'
import styles from './left_right_feature.module.scss'

export const typename = 'Set_Replicator_BlockLeftRightFeature'

const LeftRightFeatureBlock:FunctionComponent<{ block: LeftRightFeatureBlockInterface }> = ({ block }) => (
  <div className={styles.main}>
    {block.TextAndImageBlocks.map((oneTextImageItem, idx) => {
      const key = `one-item-${idx}`
      const reverse = oneTextImageItem?.imageAlignment === 'right'
      const center = oneTextImageItem?.imageAlignment === 'center'

      if (!oneTextImageItem) {
        return <Fragment key={key} />
      }

      const wrapperStyles = `${styles.wrapper} ${reverse ? `${styles.wrapper__reverse}` : ''} ${center ? `${styles.wrapper__center}` : ''}`
      return (
        <div key={key} className={styles.root}>
          <section className={wrapperStyles}>
            {oneTextImageItem.variant === 'normal' && (
              <div className={`${styles.wrapperImage} ${reverse ? `${styles.wrapperImage__reverse}` : ''}`}>
                <div className={styles.image} style={{ backgroundImage: `url(${oneTextImageItem.image.src})` }} />
              </div>
            )}
            {oneTextImageItem.variant === 'bgImage' && (
              <div className={`${styles.wrapperBgImage} ${reverse ? `${styles.wrapperBgImage__reverse}` : ''}`}>
                <div className={styles.bgImage} style={{ backgroundImage: `url(${oneTextImageItem.image.src})` }} />
              </div>
            )}
            <div className={styles.wrapperContent}>
              <p className={`eyebrow ${styles.eyebrow}`}>{oneTextImageItem.eyebrow}</p>
              <h4 className={`typo-h4 ${styles.headline}`}>{oneTextImageItem.headline}</h4>
              <h5 className={`typo-h5 ${styles.subHeadline}`}>{oneTextImageItem.subHeadline}</h5>
              <p className={`typo-body ${styles.bodyText}`}>{oneTextImageItem.bodyText}</p>
              <ul className={`typo-body ${styles.listText}`}>
                {oneTextImageItem.listText.map((oneText, index) => {
                  const subKey = `one-text-${index}`
                  return <li className={styles.oneText} key={subKey}>{oneText}</li>
                })}
              </ul>
              <div className={styles.buttonsContainer}>
                {oneTextImageItem.primaryCta && (
                  <ArrowButton text={oneTextImageItem.primaryCta.ctaText} href={oneTextImageItem.primaryCta.ctaLink} />
                )}
                {oneTextImageItem.secondaryCta && (
                  <UnderlinedButton
                    text={oneTextImageItem.secondaryCta.ctaText}
                    href={oneTextImageItem.secondaryCta.ctaLink}
                    underlineColor="passionBlue"
                  />
                )}
              </div>
              <SmallQuoteItem quote={oneTextImageItem.quote} />
            </div>
          </section>
        </div>
      )
    })}
  </div>
)

export default LeftRightFeatureBlock
