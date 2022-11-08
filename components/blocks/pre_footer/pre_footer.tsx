import React, { FunctionComponent } from 'react'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import FormPlaceHolder from 'components/generic/form-placeholder/form-placeholder'
import useWindowSize from 'styles/getBreakpointQuery'
import styles from './pre_footer.module.scss'
import PreFooterImageInterface from './pre_footer.interface'
import tailwindConfig from '../../../tailwind.config'

export const typename = 'Set_Replicator_BlockPreFooter'

const getCurrentBreakpoint = (width: number) => {
  const { screens } = tailwindConfig.theme

  if (width <= 375) {
    return {
      position: 'normal',
      width,
    }
  }

  const findBreakpoint = Object
    .entries(screens)
    .map(([key, value]) => { return { position: key, width: Number(value.replace('px', '')) } })
    .sort((a, b) => b.width - a.width)
    .find((oneBreakpoint) => oneBreakpoint.width < width)

  return findBreakpoint
}

const PreFooterImageBlock:FunctionComponent<{ block: PreFooterImageInterface }> = ({ block }) => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const showTertiaryButton = ['normal', 'sm', 'md'].includes(currentBreakpoint?.position)

  if (!block?.variant) {
    return null
  }

  const renderBody = () => {
    if (block.variant === 'image') {
      return (
        <section className={`${styles.wrapper} ${styles.wrapper__variantImage}`}>
          <OneColumnBody
            className={`${styles.leftSide} ${showTertiaryButton ? styles.tertiaryButton : ''}`}
            headline={block.headlineLeft}
            headlineLevel={3}
            description={block.description}
            primaryCta={block.primaryCta}
            showTertiaryButton={showTertiaryButton}
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
            className={`${styles.rightSide} ${showTertiaryButton ? styles.tertiaryButton : ''}`}
            headline={block.headlineRight}
            headlineLevel={4}
            description={block.description}
            primaryCta={block.primaryCta}
            showTertiaryButton={showTertiaryButton}
            secondaryCta={block.secondaryCta}
          />
        </section>
      )
    }

    if (block.variant === 'form') {
      return (
        <section className={`${styles.wrapper} ${styles.wrapper__variantForm}`}>
          <OneColumnBody
            className={styles.leftSide}
            headline={block.headlineLeft}
            headlineLevel={3}
            description={block.description}
            primaryCta={block.primaryCta}
            secondaryCta={block.secondaryCta}
          />
          <div className={styles.rightSide}>
            <FormPlaceHolder />
          </div>
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
