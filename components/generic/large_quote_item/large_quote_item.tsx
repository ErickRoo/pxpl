import React, { FunctionComponent } from 'react'

import LargeQuoteItemInterface from './large_quote_item.interface'
import styles from './large_quote_item.module.scss'

const LargeQuoteItem:FunctionComponent<LargeQuoteItemInterface> = ({
  variant, testimony, author, position,
}) => {
  if (variant === 'center') {
    return (
      <div className={styles.root}>
        Center variant
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <div className={styles.leftSide}>
          <h4>{testimony}</h4>
          <div>
            <h4>{author}</h4>
            <p>{position}</p>
            <hr />
          </div>
        </div>
        <div className={styles.rightSide}>aa</div>
      </section>
    </div>
  )
}

export default LargeQuoteItem
