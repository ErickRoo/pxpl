import React, { FunctionComponent } from 'react'

import TtacItem from 'components/generic/ttac_item/ttac_item'
import TtacInterface from './ttac.interface'
import styles from './ttac.module.scss'

export const typename = 'Set_Replicator_BlockTtac'

const TtacBlock:FunctionComponent<{ block: TtacInterface }> = ({ block }) => {
  if (!block) {
    return null
  }

  return (
    <div className={styles.root}>
      {block.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
        const key = `ttac-item-${idx}`
        return (
          <TtacItem
            key={key}
            variant={oneTextImageItem?.variant}
            alignment={oneTextImageItem?.alignment}
            topTag={oneTextImageItem?.topTag}
            headline={oneTextImageItem?.headline}
            description={oneTextImageItem?.description}
            primaryCta={oneTextImageItem?.primaryCta}
            secondaryCta={oneTextImageItem?.secondaryCta}
            image={oneTextImageItem?.image}
            additionalSpace={oneTextImageItem?.additionalSpace}
          />
        )
      })}
    </div>
  )
}

export default TtacBlock
