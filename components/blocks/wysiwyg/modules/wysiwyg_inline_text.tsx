import React, { FC } from 'react'
import WysiwygInterface from '../wysiwyg.interface'
import styles from '../wysiwyg.module.scss'
import InlineContentSelector from './inline_content_selector'
import WysiwygBgToggle from './wysiwtg_bg_toggle'
import WysiwygSection from './wysiwyg_section'

const WysiwygInlineText: FC<{ block: WysiwygInterface }> = ({ block }) => {
  if (!block?.type) return null

  const { modules, backgroundToggle } = block
  const { inlineText } = modules
  // const eyebrow = inlineText?.eyebrow || 'Eyebrow'
  const random = (index: number) => Math.floor(Math.random() * (index * 1000 - 1000 + 1) + 1000)

  return (
    <WysiwygSection>
      <WysiwygBgToggle
        bgToggle={backgroundToggle}
        stylesOn={styles.inlineTextContainerBT}
        stylesOff={styles.inlineTextContainer}
      >
        {
          inlineText?.map(
            (item, index) => (
              <InlineContentSelector
                key={`${item?.type}-${random(index)}`}
                type={item?.type}
                content={item?.content}
                bgToggle={backgroundToggle}
              />
            ),
          )
        }
      </WysiwygBgToggle>
    </WysiwygSection>
  )
}

export default WysiwygInlineText
