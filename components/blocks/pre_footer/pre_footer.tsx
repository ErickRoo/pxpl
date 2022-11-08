import React, { FunctionComponent } from 'react'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import styles from './pre_footer.module.scss'
import PreFooterImageInterface from './pre_footer.interface'

export const typename = 'Set_Replicator_BlockPreFooter'

const PreFooterImageBlock:FunctionComponent<{ block: PreFooterImageInterface }> = ({ block }) => {
  if (!block?.variant) {
    return null
  }

  const renderBody = () => {
    if (block.variant === 'image') {
      return (
        <section className={`${styles.wrapper} ${styles.wrapper__variantImage}`}>
          <OneColumnBody
            className={styles.leftSide}
            headline={block.headlineLeft}
            headlineLevel={3}
            description={block.description}
            primaryCta={block.primaryCta}
            secondaryCta={block.secondaryCta}
          />
          <div className={styles.rightSide}>
            <img className={styles.image} src={block.right_image?.src} alt="placeholderimage" />
          </div>
        </section>
      )
    }

    if (block.variant === 'headline') {
      return (
        <section className={styles.wrapper}>
          <div className={styles.leftSide}>
            <h2>{block.headlineLeft}</h2>
          </div>
          <OneColumnBody
            className={styles.rightSide}
            headline={block.headlineRight}
            headlineLevel={4}
            description={block.description}
            primaryCta={block.primaryCta}
            secondaryCta={block.secondaryCta}
          />
        </section>
      )
    }

    return null
  }

  return (
    <div className={styles.root}>{renderBody()}</div>
  )
}

export default PreFooterImageBlock
