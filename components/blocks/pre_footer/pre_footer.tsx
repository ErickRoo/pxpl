import React, { FunctionComponent } from 'react'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import FormPlaceHolder from 'components/generic/form-placeholder/form-placeholder'
import PreFooterImageInterface from './pre_footer.interface'
import styles from './pre_footer.module.scss'

export const typename = 'Set_Replicator_BlockPreFooter'

const PreFooterImageBlock:FunctionComponent<{ block: PreFooterImageInterface }> = ({ block }) => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const stackCtas = ['normal', 'sm', 'md'].includes(currentBreakpoint?.position)
  const showTertiaryButton = ['normal', 'sm', 'md'].includes(currentBreakpoint?.position)

  if (!block?.variant) {
    return null
  }

  if (block.variant === 'image') {
    return (
      <div className={styles.root}>
        <section className={`${styles.wrapper} ${styles.wrapper__variantImage}`}>
          <div className={styles.leftSide}>
            <OneColumnBody
              className={showTertiaryButton ? styles.tertiaryButton : ''}
              topTag={block.topTag}
              headline={block.headlineLeft}
              headlineLevel={3}
              description={block.description}
              stackCtas={stackCtas}
              primaryCta={block.primaryCta}
              showTertiaryButton={showTertiaryButton}
              secondaryCta={block.secondaryCta}
            />
          </div>
          <div className={styles.rightSide}>
            <img className={styles.image} src={block.right_image?.src} alt="placeholderimage" />
          </div>
        </section>
      </div>
    )
  }

  if (block.variant === 'headline') {
    return (
      <div className={styles.root}>
        <section className={styles.wrapper}>
          <div className={styles.leftSide}>
            <h2>{block.headlineLeft}</h2>
          </div>
          <div className={styles.rightSide}>
            <OneColumnBody
              className={showTertiaryButton ? styles.tertiaryButton : ''}
              topTag={block.topTag}
              headline={block.headlineRight}
              headlineLevel={4}
              description={block.description}
              stackCtas={stackCtas}
              primaryCta={block.primaryCta}
              showTertiaryButton={showTertiaryButton}
              secondaryCta={block.secondaryCta}
            />
          </div>
        </section>
      </div>
    )
  }

  if (block.variant === 'form') {
    return (
      <div className={styles.root}>
        <section className={`${styles.wrapper} ${styles.wrapper__variantForm}`}>
          <div className={styles.leftSide}>
            <OneColumnBody
              className={showTertiaryButton ? styles.tertiaryButton : ''}
              topTag={block.topTag}
              headline={block.headlineLeft}
              headlineLevel={3}
              description={block.description}
              stackCtas={stackCtas}
              primaryCta={block.primaryCta}
              showTertiaryButton={showTertiaryButton}
              secondaryCta={block.secondaryCta}
            />
          </div>
          <div className={styles.rightSide}>
            <FormPlaceHolder />
          </div>
        </section>
      </div>
    )
  }

  return null
}

export default PreFooterImageBlock
