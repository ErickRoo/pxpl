import React, { FC } from 'react'
import Headline from 'components/generic/headline/headline'
import WysiwygInterface from '../wysiwyg.interface'
import styles from '../wysiwyg.module.scss'
import WysiwygBgToggle from './wysiwtg_bg_toggle'
import WysiwygSection from './wysiwyg_section'

const WysiwygSpotlight: FC<{ block: WysiwygInterface }> = ({ block }) => {
  if (!block?.type) return null

  const { modules, backgroundToggle } = block
  const { spotlight } = modules
  const headline = spotlight?.headline
  const bgToggle = backgroundToggle ? styles.spotlightBodyTB : styles.spotlightBody
  const sImage = backgroundToggle ? styles.spotlightImageTB : styles.spotlightImage
  const box = backgroundToggle ? styles.spotlightBoxTB : styles.spotlightBox

  return (
    <WysiwygSection>
      <WysiwygBgToggle
        bgToggle={backgroundToggle}
        stylesOn={styles.spotlightContainerTB}
        stylesOff={styles.spotlightContainer}
      >
        <div className={styles.spotlightContent}>
          <div className={sImage}>
            <img src={spotlight?.image} alt={headline?.headline} />
          </div>
          <div className={box}>
            <Headline as={`h${headline?.headlineLevel}`} className={styles.spotlightHeadline}>{headline?.headline}</Headline>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: spotlight?.body }} className={bgToggle} />
          </div>
        </div>
      </WysiwygBgToggle>
    </WysiwygSection>
  )
}

export default WysiwygSpotlight
