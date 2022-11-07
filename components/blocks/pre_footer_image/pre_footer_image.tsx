import React, { FunctionComponent } from 'react'
import ArrowButton from 'components/generic/arrow-button/arrow-button'
import UnderlinedButton from 'components/generic/underlined-button/underlined-button'
import styles from './pre_footer_image.module.scss'
import PreFooterImageInterface from './pre_footer_image.interface'

export const typename = 'Set_Replicator_BlockPreFooter'

const PreFooterImageBlock:FunctionComponent<{ block: PreFooterImageInterface }> = ({ block }) => {
  console.log(block)
  return (
    <div
      className={`${styles.root} container`}
    >
      <section className={styles.wrapper}>
        <div className={styles.leftSide}>
          <h3>H3 headline that is titlecase.</h3>
          <p>Get the latest insights from the best in the industry. Every week we provide new content to help optimize your results.</p>
          <section className={styles.groupButtons}>
            <ArrowButton text="Try Outreach" href="#" />
            <UnderlinedButton text="Explore pricing" href="" underlineColor="#5951FF" />
          </section>
        </div>
        <div className={styles.rightSide}>
          <img src={block.right_image?.src} alt="placeholderimage" />
        </div>
      </section>
    </div>
  )
}

export default PreFooterImageBlock
