import React, { FunctionComponent } from 'react'

import SmallQuoteItemInterface from './small_quote_item.interface'
import styles from './small_quote_item.module.scss'

const SmallQuoteItem: FunctionComponent<{ quote: SmallQuoteItemInterface }> = ({ quote }) => {
  if (!quote) {
    return null
  }

  return (
    <blockquote className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={quote?.image?.src} alt="placeholder" />
        </div>
        <div className={styles.rightSide}>
          <h6 className={`typo-body ${styles.quoteText}`}>{quote.quote_text}</h6>
          <p className={`typo-body ${styles.authorName}`}>{quote.author_name}</p>
          <p className={`eyebrow ${styles.eyebrow}`}>{quote.eyebrow}</p>
        </div>
      </div>
    </blockquote>
  )
}

export default SmallQuoteItem
