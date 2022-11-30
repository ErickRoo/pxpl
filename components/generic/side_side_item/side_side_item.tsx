import React, { FunctionComponent } from 'react'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'

import SideSideItemInterface from './side_side_item.interface'
import styles from './side_side_item.module.scss'

const SideSideItem:FunctionComponent<SideSideItemInterface> = ({
  variant, image, showCircles, topTag, headline, description, primaryCta,
}) => {
  if (!headline) {
    return null
  }

  const reverse = variant === 'image-right'
  const stylesBgImage = `${styles.bgImage} ${reverse ? `${styles.bgImage__reverse}` : ''}`
  return (
    <div className={`${styles.root} ${showCircles ? styles.variantCircles : ''}`}>
      <section className={`${styles.wrapper} ${reverse ? `${styles.wrapper__reverse}` : ''}`}>
        <div className={`${styles.wrapperImage} ${reverse ? `${styles.wrapperImage__reverse}` : ''}`}>
          {showCircles && (
            <ul className={`${styles.circlesContainer} ${reverse ? `${styles.circlesContainer__reverse}` : ''}`}>
              <li />
              <li />
              <li />
            </ul>
          )}
          <section className={`${stylesBgImage} ${showCircles ? `${styles.bgImage__circles}` : ''}`}>
            <div style={{ backgroundImage: `url(${image?.src})` }} />
          </section>
        </div>
        <div className={`${styles.wrapperContent} ${reverse ? `${styles.wrapperContent__reverse}` : ''}`}>
          <OneColumnBody
            className={`${styles.oneColumnBody}`}
            topTag={topTag}
            headline={headline}
            headlineLevel={2}
            description={description}
            primaryCta={primaryCta}
          />
        </div>
      </section>
    </div>
  )
}

export default SideSideItem
