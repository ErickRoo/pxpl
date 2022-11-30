import Headline from 'components/generic/headline/headline'
import React, { FC } from 'react'
import WysiwygInterface from '../wysiwyg.interface'
import styles from '../wysiwyg.module.scss'
import WysiwygBgToggle from './wysiwtg_bg_toggle'
import WysiwygSection from './wysiwyg_section'

const WysiwygIntroText: FC<{ block: WysiwygInterface }> = ({ block }) => {
  if (!block?.type) return null

  const { modules, backgroundToggle } = block
  const { introText } = modules
  const headlineLevel = introText?.headline?.headlineLevel || 2
  const headline = introText?.headline?.headline || 'H2 headline of article blog story to give context for reader.'

  return (
    <WysiwygSection>
      <WysiwygBgToggle
        bgToggle={backgroundToggle}
        stylesOn={styles.introTextContainerBT}
        stylesOff={styles.introTextContainer}
      >
        <div className={styles.introTextHeadline}>
          <span className="eyebrow">{introText?.eyebrow}</span>
          <Headline as={`h${headlineLevel}`} className={styles.introTextHeading}>{headline}</Headline>
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div className={styles.introTextBody} dangerouslySetInnerHTML={{ __html: introText?.body }} />
      </WysiwygBgToggle>
    </WysiwygSection>
  )
}

export default WysiwygIntroText
