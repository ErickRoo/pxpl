import React, { FunctionComponent } from 'react'

import styles from './large_quote_item.module.scss'
import LargeQuoteInterface from './large_quote_item.interface'

export const typename = 'Set_Replicator_BlockLargeQuote'

const LargeQuoteItem:FunctionComponent<LargeQuoteInterface> = () => (
  <div
    className={`${styles.root} container`}
  >
    Large quote Block
  </div>
)

export default LargeQuoteItem
