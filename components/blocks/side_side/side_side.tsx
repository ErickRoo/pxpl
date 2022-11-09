import React, { FunctionComponent } from 'react'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import SideSideInterface from './side_side.interface'
import styles from './side_side.module.scss'

export const typename = 'Set_Replicator_BlockSideSide'

const SideSideBlock:FunctionComponent<{ block: SideSideInterface }> = ({ block }) => (
  <div className={styles.root}>
    <section className={styles.wrapper}>
      <div className={styles.leftSide}>
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
