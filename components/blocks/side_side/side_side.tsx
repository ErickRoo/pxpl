import React, { FunctionComponent } from 'react'
import OneColumnBody from 'components/generic/one-column-body/one-column-body'
import SideSideInterface from './side_side.interface'
import styles from './side_side.module.scss'

export const typename = 'Set_Replicator_BlockSideSide'

<<<<<<< HEAD
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
=======
const SideSideBlock:FunctionComponent<{ block: SideSideInterface }> = ({ block }) => {
  if (!block) {
    return null
  }

  const reverse = block.variant === 'image-right'
  return (
    <div className={styles.root}>
      <section className={`${styles.wrapper} ${reverse ? `${styles.wrapper__reverse}` : ''}`}>
        <div className={`${styles.wrapperImage} ${reverse ? `${styles.wrapperImage__reverse}` : ''}`}>
          {block.showCircles ? (
            <>
              <ul className={`${styles.circlesContainer} ${reverse ? `${styles.circlesContainer__reverse}` : ''}`}>
                <li />
                <li />
                <li />
              </ul>
              <img src={block.image?.src} alt="placeholderimage" />
            </>
          ) : (
            <section className={`${styles.bgImage} ${reverse ? `${styles.bgImage__reverse}` : ''}`}>
              <div style={{ backgroundImage: `url(${block.image?.src})` }} />
            </section>
          )}
        </div>
        <div className={`${styles.wrapperContent} ${reverse ? `${styles.wrapperContent__reverse}` : ''}`}>
          <OneColumnBody
            className={`${styles.oneColumnBody}`}
            topTag={block.topTag}
            headline={block.headline}
            headlineLevel={2}
            description={block.description}
            primaryCta={block.primaryCta}
          />
        </div>
      </section>
    </div>
  )
}
>>>>>>> feature/module-side-side-2

export default SideSideBlock
