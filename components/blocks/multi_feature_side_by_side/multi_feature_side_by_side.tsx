import React, { FunctionComponent } from 'react'
import DescriptionList from 'components/generic/description-list/description-list'
import styles from './multi_feature_side_by_side.module.scss'
import MultiFeatureSideBySideInterface from './multi_feature_side_by_side.interface'
import useWindowSize from '../../../styles/getBreakpointQuery'

const MultiFeatureSideBySideBlock: FunctionComponent<{
  block: MultiFeatureSideBySideInterface
}> = ({ block }) => {
  const { width } = useWindowSize()
  const orderItems = block.items.sort((a, b) => a.order - b.order)

  return (
    <div className={`${styles.root} mx-auto bg-butterCream`}>
      <section className={`${styles.wrapper}`}>
        <div className="grid grid-cols-1 gap-y-[2.4rem] pb-[4.8rem] md:gap-y-[1.6rem] md:pb-[5.6rem] lg:pb-[6.5rem] xl:pb-[7.85rem]">
          <h4 className={`${styles.blockHeadline} typo-h2 col-span-1`}>{block.headline}</h4>
          <p className={`${styles.blockDescription} col-span-1 typo-body`}>{block.description}</p>
        </div>
        <div className={styles.itemsContainer}>
          {
            orderItems && orderItems.map((e, idx) => (
              <DescriptionList
                key={`item-position-${e.order}`}
                order={e.order}
                headline={e.headline}
                description={e.description}
                ctaButton={e.ctaButton}
                image={e.image}
                initializeOpen={idx === 0}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default MultiFeatureSideBySideBlock
