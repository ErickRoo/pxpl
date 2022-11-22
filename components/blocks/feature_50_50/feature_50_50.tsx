import React, { FunctionComponent, ReactElement } from 'react'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'

import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import Feature5050Interface from './feature_50_50.interface'
import styles from './feature_50_50.module.scss'

export const typename = 'Set_Replicator_BlockFeature5050'

const Feature5050Block:FunctionComponent<{ block: Feature5050Interface }> = ({ block }) => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const isMobile = ['normal', 'sm'].includes(currentBreakpoint?.position)

  if (!block) {
    return null
  }

  return (
    block.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
      const { left, right } = oneTextImageItem
      const key = `feature-item-${idx}`

      return (
        <div key={key} className={styles.root}>
          <section className={styles.wrapper}>
            <div className={styles.leftSide}>
              <div className={`${styles.wrapperImage} ${left?.alignment === 'bottom' ? styles.wrapperImage__bottom : ''}`}>
                <img className={styles.image} src={left.image?.src} alt="placeholderimage" />
              </div>
              <OneColumnBody
                className={styles.oneColumnBody}
                topTag={left.eyebrow}
                headline={left.headline}
                headlineLevel={4}
                description={left.description}
                primaryCta={left.primaryCta}
                hideTextPrimaryButton={isMobile}
              />
            </div>
            <div className={styles.rightSide}>
              <div className={`${styles.wrapperImage} ${right?.alignment === 'bottom' ? styles.wrapperImage__bottom : ''}`}>
                <img className={styles.image} src={right?.image?.src} alt="placeholderimage" />
              </div>
              <OneColumnBody
                className={styles.oneColumnBody}
                topTag={right?.eyebrow}
                headline={right?.headline}
                headlineLevel={4}
                description={right?.description}
                primaryCta={right?.primaryCta}
                hideTextPrimaryButton={isMobile}
              />
            </div>
          </section>
        </div>
      )
    })
  ) as unknown as ReactElement
}

export default Feature5050Block
