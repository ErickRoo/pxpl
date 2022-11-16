import React, { FunctionComponent } from 'react'

import Feature5050Item from 'components/generic/feature_50_50_item/feature_50_50_item'
import Feature5050Interface from './feature_50_50.interface'
import styles from './feature_50_50.module.scss'

export const typename = 'Set_Replicator_BlockFeature5050'

const Feature5050Block:FunctionComponent<{ block: Feature5050Interface }> = ({ block }) => {
  if (!block) {
    return null
  }

  return (
    <div className={styles.root}>
      {block.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
        const key = `feature-50-50-item-${idx}`
        return (
          <Feature5050Item
            key={key}
            alignment={oneTextImageItem?.alignment}
            eyebrow={oneTextImageItem?.eyebrow}
            headline={oneTextImageItem?.headline}
            description={oneTextImageItem?.description}
            primaryCta={oneTextImageItem?.primaryCta}
            image={oneTextImageItem?.image}
          />
        )
      })}
    </div>
  )
}

export default Feature5050Block
