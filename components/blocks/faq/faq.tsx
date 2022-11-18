import React, { FunctionComponent } from 'react'

import ArrowButton from 'components/generic/arrow-button/arrow-button'
import FaqInterface from './faq.interface'
import styles from './faq.module.scss'

export const typename = 'Set_Replicator_BlockFaq'

const FaqBlock:FunctionComponent<{ block: FaqInterface }> = ({ block }) => (
  <div className={styles.root}>
    <section className={styles.wrapper}>
      <div className={styles.topSection}>
        <p className={`eyebrow ${styles.topTag}`}>{block.topTag}</p>
        <h1 className={`typo-h2 ${styles.headline}`}>{block.headline}</h1>
        <p className={`typo-body ${styles.description}`}>{block.description}</p>
        <ArrowButton text={block.primaryCta.ctaText} href={block.primaryCta.ctaLink} />
      </div>
      <div className={styles.questionsSection}>
        some
      </div>
    </section>
  </div>
)

export default FaqBlock
