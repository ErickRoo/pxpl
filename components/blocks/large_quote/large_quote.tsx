import React, { FunctionComponent } from 'react'
import LargeQuoteItem from 'components/generic/large_quote_item/large_quote_item'
import LargeQuoteInterface from './large_quote.interface'
import styles from './large_quote.module.scss'

export const typename = 'Set_Replicator_BlockLargeQuote'

const LargeQuoteBlock:FunctionComponent<{ block: LargeQuoteInterface }> = ({ block }) => {
  if (!block) {
    return null
  }

  return (
    <div className={styles.root}>
      {block.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
        const key = `ttac-item-${idx}`
        return (
          <LargeQuoteItem
            key={key}
            variant={oneTextImageItem?.variant}
            quote_text={oneTextImageItem?.quote_text}
            author_name={oneTextImageItem?.author_name}
            job_title={oneTextImageItem?.job_title}
            icon={oneTextImageItem?.icon}
            image={oneTextImageItem?.image}
            primaryCta={oneTextImageItem?.primaryCta}
          />
        )
      })}
    </div>
  )
}

export default LargeQuoteBlock
