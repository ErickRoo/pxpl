import { FC } from 'react'

import LargeQuoteBlock from 'components/blocks/large_quote/large_quote'
import LargeQuoteInterface from 'components/generic/large_quote_item/large_quote_item.interface'

const placeholderPreFooterImageBlock = {

} as LargeQuoteInterface

const LargeQuote: FC = () => (
  <div>
    <LargeQuoteBlock block={placeholderPreFooterImageBlock} />
  </div>
)

export default LargeQuote
