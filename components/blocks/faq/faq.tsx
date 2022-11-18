import React, { FunctionComponent } from 'react'

import ArrowButton from 'components/generic/arrow-button/arrow-button'
import FaqAccordionItem from 'components/generic/faq_accordion_item/faq_accordion_item'
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
        {block.questions.map((oneQuestion, idx) => {
          const key = `one-question-${idx}`
          return (
            <FaqAccordionItem
              key={key}
              headline={oneQuestion.headline}
              content={oneQuestion.content}
              primaryCta={oneQuestion.primaryCta}
              initializeOpen={idx === 0}
            />
          )
        })}
      </div>
    </section>
  </div>
)

export default FaqBlock
