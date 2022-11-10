import React, { FunctionComponent } from 'react'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import styles from './ttac.module.scss'
import TtacInterface from './ttac.interface'

export const typename = 'Set_Replicator_BlockTtac'

const TtacBlock:FunctionComponent<{ block: TtacInterface }> = ({ block }) => (
  <div className={styles.root}>
    <section className={styles.wrapper}>
      <OneColumnBody
        className={`${styles.oneColumnBody} ${block.alignment ? styles[`oneColumnBody__${block.alignment}`] : ''}`}
        topTag={block.topTag}
        headline={block.headline}
        headlineLevel={2}
        description={block.description}
        primaryCta={block.primaryCta}
        secondaryCta={block.secondaryCta}
      />
      <div className={styles.wrapperImage}>
        <img src={block.image?.src} alt="placeholderimage" />
      </div>
    </section>
  </div>
)

export default TtacBlock
