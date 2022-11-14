import SideSideItem from 'components/generic/side_side_item/side_side_item'
import React, { FunctionComponent } from 'react'

import SideSideInterface from './side_side.interface'
import styles from './side_side.module.scss'

export const typename = 'Set_Replicator_BlockSideSide'

const SideSideBlock:FunctionComponent<{ block: SideSideInterface }> = ({ block }) => {
  if (!block) {
    return null
  }

  return (
    <div className={styles.root}>
      {block.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
        const key = `side-side-item-${idx}`
        return (
          <SideSideItem
            key={key}
            variant={oneTextImageItem?.variant}
            image={oneTextImageItem?.image}
            showCircles={oneTextImageItem?.showCircles}
            topTag={oneTextImageItem?.topTag}
            headline={oneTextImageItem?.headline}
            description={oneTextImageItem?.description}
            primaryCta={oneTextImageItem?.primaryCta}
          />
        )
      })}
    </div>
  )
}

export default SideSideBlock
