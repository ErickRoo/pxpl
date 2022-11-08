import React, { FunctionComponent } from 'react'
import ArrowButton from 'components/generic/arrow-button/arrow-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import styles from './pre_footer.module.scss'
import PreFooterImageInterface from './pre_footer.interface'

export const typename = 'Set_Replicator_BlockPreFooter'

const PreFooterImageBlock:FunctionComponent<{ block: PreFooterImageInterface }> = ({ block }) => {
  if (block?.variant === 'image') {
    return (
      <div className={styles.root}>
        <section className={styles.wrapper}>
          <div className={styles.leftSide}>
            <h3>{block.headlineLeft}</h3>
            <p>{block.description}</p>
            <section className={styles.groupButtons}>
              {block?.primaryCta && (
                <ArrowButton text={block.primaryCta.ctaText} href={block.primaryCta.ctaLink} />
              )}
              {block?.secondaryCta && (
                <UnderlinedButton text={block.secondaryCta.ctaText} href={block.secondaryCta.ctaLink} underlineColor="#5951FF" />
              )}
            </section>
          </div>
          <div className={styles.rightSide}>
            <img className={styles.image} src={block.right_image?.src} alt="placeholderimage" />
          </div>
        </section>
      </div>
    )
  }
  if (block?.variant === 'headline') {
    return (
      <div className={styles.root}>
        <section className={styles.wrapper}>
          <div className={styles.leftSide}>
            <h2>{block.headlineLeft}</h2>
          </div>
          <div className={styles.rightSide}>
            <h4>{block.headlineRight}</h4>
            <p>{block.description}</p>
            <section className={styles.groupButtons}>
              {block?.primaryCta && (
                <ArrowButton text={block.primaryCta.ctaText} href={block.primaryCta.ctaLink} />
              )}
              {block?.secondaryCta && (
                <UnderlinedButton text={block.secondaryCta.ctaText} href={block.secondaryCta.ctaLink} underlineColor="#5951FF" />
              )}
            </section>
          </div>
        </section>
      </div>
    )
  }

  return null
}

export default PreFooterImageBlock
