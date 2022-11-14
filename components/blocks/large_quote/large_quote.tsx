import React, { FunctionComponent } from 'react'
import styles from './large_quote.module.scss'
import LargeQuoteInterface from './large_quote.interface'

export const typename = 'Set_Replicator_BlockLargeQuote'

const LargeQuoteBlock:FunctionComponent<{ block: LargeQuoteInterface }> = () => (
  <div
    className={`${styles.root} container`}
  >
    Large quote Block
  </div>
)

export default LargeQuoteBlock
