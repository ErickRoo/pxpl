import React, { FC } from 'react'
import WysiwygInterface from '../wysiwyg.interface'
import styles from '../wysiwyg.module.scss'
import WysiwygBgToggle from './wysiwtg_bg_toggle'
import WysiwygSection from './wysiwyg_section'

const WysiwygQuote: FC<{ block: WysiwygInterface }> = ({ block }) => {
  if (!block?.type) return null

  const { modules, backgroundToggle } = block
  const { quote } = modules
  const box = backgroundToggle ? styles.quoteBoxBT : styles.quoteBox
  return (
    <WysiwygSection>
      <WysiwygBgToggle
        bgToggle={backgroundToggle}
        stylesOn={styles.quoteContainerBT}
        stylesOff={styles.quoteContainer}
      >
        <div className={box}>
          <div className={styles.quoteText}>
            “
            {quote?.text}
            ”
          </div>
          <div className={styles.quoteAuthor}>
            {quote?.author}
          </div>
          <div className={styles.quoteAbout}>
            {quote?.about}
          </div>
        </div>
      </WysiwygBgToggle>
    </WysiwygSection>
  )
}

export default WysiwygQuote
