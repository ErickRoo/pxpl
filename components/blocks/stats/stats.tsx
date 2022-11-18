import React, { FunctionComponent } from 'react'

import ArrowCorner from '../../../assets/Stats/ArrowCorner.svg'
import StatsInterface from './stats.interface'
import styles from './stats.module.scss'

export const typename = 'Set_Replicator_BlockStats'

const StatsBlock:FunctionComponent<{ block: StatsInterface }> = ({ block }) => {
  if (!block) {
    return null
  }

  return (
    <div>
      {block.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
        const { top, bottom } = oneTextImageItem
        const key = `stat-item-${idx}`
        return (
          <div key={key} className={styles.root}>
            <section className={styles.inner}>
              <ArrowCorner className={styles.arrowCorner} />
              <div className={styles.wrapper}>
                <div className={styles.row}>
                  <div className={styles.leftSide}>
                    <p className="eyebrow">{top.headline}</p>
                    <h6 className="typo-h6">{top.description}</h6>
                  </div>
                  <div className="typo-stats">
                    {top.stat}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.leftSide}>
                    <p className="eyebrow">{bottom.headline}</p>
                    <h6 className="typo-h6">{bottom.description}</h6>
                  </div>
                  <div className="typo-stats">
                    {bottom.stat}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default StatsBlock
