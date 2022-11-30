import React, { FC } from 'react'
import WysiwygInterface from '../wysiwyg.interface'
import styles from '../wysiwyg.module.scss'
import WysiwygBgToggle from './wysiwtg_bg_toggle'
import WysiwygKeyResult from './wysiwtg_key_result'
import WysiwygSection from './wysiwyg_section'

const WysiwygKeyResults: FC<{ block: WysiwygInterface }> = ({ block }) => {
  if (!block?.type) return null

  const { modules, backgroundToggle } = block
  const { keyResults } = modules
  const eyebrow = keyResults?.eyebrow || 'Key Results'
  const random = (index: number) => Math.floor(Math.random() * (index * 1000 - 1000 + 1) + 1000)

  return (
    <WysiwygSection>
      <WysiwygBgToggle
        bgToggle={backgroundToggle}
        stylesOn={styles.keyResultsContainerBT}
        stylesOff={styles.keyResultsContainer}
      >
        <div className={styles.keyResultsTopBar}>
          <span className={`eyebrow ${styles.keyResultsEyebrow}`}>{eyebrow}</span>
          <div className={styles.keyResultsTopBarLine} />
        </div>
        <div className={styles.keyResultsBoxContainer}>
          {
            keyResults?.items?.map(
              (item, index) => (
                <WysiwygKeyResult
                  key={`${item?.content}-${random(index)}`}
                  icon={item?.icon}
                  content={item?.content}
                  bgToggle={backgroundToggle}
                />
              ),
            )
          }
        </div>
        <div className={styles.keyResultsBottomBar} />
      </WysiwygBgToggle>
    </WysiwygSection>
  )
}

export default WysiwygKeyResults
