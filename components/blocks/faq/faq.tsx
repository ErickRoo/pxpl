import React, { FunctionComponent } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import ArrowButton from 'components/generic/arrow-button/arrow-button'
import FaqAccordionItem from 'components/generic/faq_accordion_item/faq_accordion_item'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import FaqInterface from './faq.interface'
import styles from './faq.module.scss'

export const typename = 'Set_Replicator_BlockFaq'

const FaqBlock:FunctionComponent<{ block: FaqInterface }> = ({ block }) => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const isMobile = ['normal', 'sm'].includes(currentBreakpoint?.position)

  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <div className={styles.topSection}>
          <p className={`eyebrow ${styles.topTag}`}>{block.topTag}</p>
          <h1 className={`typo-h2 ${styles.headline}`}>{block.headline}</h1>
          <p className={`typo-body ${styles.description}`}>{block.description}</p>
          <div className={styles.buttonsContainer}>
            {!isMobile ? (
              block.primaryCta && <ArrowButton text={block.primaryCta.ctaText} href={block.primaryCta.ctaLink} />
            ) : (
              <>
                {block.primaryCta && <TertiaryButton type="link" text={block.primaryCta.ctaText} href={block.primaryCta.ctaLink} />}
                {block.secondaryCta && (
                  <UnderlinedButton text={block.secondaryCta.ctaText} href={block.secondaryCta.ctaLink} underlineColor="passionBlue" />
                )}
              </>
            )}
          </div>
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
}

export default FaqBlock
