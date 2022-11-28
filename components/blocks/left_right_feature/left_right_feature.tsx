import React, { FunctionComponent } from 'react'
import styles from './left_right_feature.module.scss'
import LeftRightFeatureBlockInterface from './left_right_feature.interface'

export const typename = 'Set_Replicator_BlockLeftRightFeature'

const LeftRightFeatureBlock:FunctionComponent<{ block: LeftRightFeatureBlockInterface }> = ({ block }) => (
  <div className={styles.main}>
    {block.TextAndImageBlocks.map((oneTextImageItem, idx) => {
      const key = `one-item-${idx}`

      return (
        <div key={key} className={styles.root}>
          <section className={styles.wrapper}>
            {oneTextImageItem.variant === 'normal' && (
              <div className={styles.wrapperImage}>
                <img className={styles.image} src={oneTextImageItem.image.src} alt="placeholder" />
              </div>
            )}
            {oneTextImageItem.variant === 'bgImage' && (
              <div className={styles.wrapperBgImage}>
                <div className={styles.bgImage} style={{ backgroundImage: `url(${oneTextImageItem.image.src})` }} />
              </div>
            )}
            <div className={styles.wrapperContent}>
              some
            </div>
          </section>
        </div>
      )
    })}
  </div>
)

export default LeftRightFeatureBlock
