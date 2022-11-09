import React, { FunctionComponent } from 'react'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import SideSideInterface from './side_side.interface'
import styles from './side_side.module.scss'

export const typename = 'Set_Replicator_BlockSideSide'

const SideSideBlock:FunctionComponent<{ block: SideSideInterface }> = ({ block }) => (
  <div className={styles.root}>
    <section className={`${styles.wrapper} ${block.reverse ? `${styles.wrapper__reverse}` : ''}`}>
      <div className={styles.leftSide}>
        {block.showCircles && (
          <ul className={styles.circlesContainer}>
            <li className={styles.circleLeft} />
            <li className={styles.circleCenter} />
            <li className={styles.circleRight} />
          </ul>
        )}
        <img className={styles.image} src={block.image?.src} alt="placeholderimage" />
      </div>
      <OneColumnBody
        className={`${styles.rightSide} ${styles.oneColumnBody}`}
        topTag={block.topTag}
        headline={block.heading}
        headlineLevel={2}
        description={block.description}
        primaryCta={block.primaryCta}
      />
    </section>
  </div>
)

export default SideSideBlock
