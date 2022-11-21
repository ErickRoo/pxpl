import React, { FC } from 'react'
import HeadlineTextInterface from './headline_text.interface'
import HeadlineCenterText from './modules/headline_center_text'
import HeadlineLeftText from './modules/headline_left_text'

export const typename = 'Set_Replicator_BlockHeadlineText'

const HeadLineSelector: FC<{block: HeadlineTextInterface, variant: string}> = ({ block, variant }) => {
  switch (variant) {
    case 'centerText':
      return <HeadlineCenterText block={block} />
    case 'leftText':
      return <HeadlineLeftText block={block} />
    default:
      return <HeadlineCenterText block={block} />
  }
}

const HeadlineTextBlock:FC<{ block: HeadlineTextInterface }> = ({ block }) => (<HeadLineSelector block={block} variant={block?.variant} />)

export default HeadlineTextBlock
