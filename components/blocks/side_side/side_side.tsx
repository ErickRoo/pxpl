import React, { FunctionComponent } from 'react'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import SideSideInterface from './side_side.interface'
import styles from './side_side.module.scss'

export const typename = 'Set_Replicator_BlockSideSide'

const SideSideBlock:FunctionComponent<{ block: SideSideInterface }> = ({ block }) => (
  <div className={styles.root}>
    <section className={`${styles.wrapper} ${block.reverse ? `${styles.wrapper__reverse}` : ''}`}>
      <div className={`${styles.wrapperImage} ${block.reverse ? `${styles.wrapperImage__reverse}` : ''}`}>
        {block.showCircles ? (
          <>
            <ul className={`${styles.circlesContainer} ${block.reverse ? `${styles.circlesContainer__reverse}` : ''}`}>
              <li />
              <li />
              <li />
            </ul>
            <img src={block.image?.src} alt="placeholderimage" />
          </>
        ) : (
          <section className={`${styles.bgImage} ${block.reverse ? `${styles.bgImage__reverse}` : ''}`}>
            <div style={{ backgroundImage: `url(${block.image?.src})` }} />
          </section>
        )}
      </div>
      <div className={`${styles.wrapperContent} ${block.reverse ? `${styles.wrapperContent__reverse}` : ''}`}>
        <OneColumnBody
          className={`${styles.oneColumnBody}`}
          topTag={block.topTag}
          headline={block.heading}
          headlineLevel={2}
          description={block.description}
          primaryCta={block.primaryCta}
        />
      </div>
    </section>
  </div>
)

export default SideSideBlock
