import { FC } from 'react'

import LargeQuoteBlock from 'components/blocks/large_quote/large_quote'
import LargeQuoteItemInterface from 'components/generic/large_quote_item/large_quote_item.interface'
import PlaceholderImage from '../../assets/LargeQuote/placeholder_image.png'
import PlaceholderProfileImage from '../../assets/LargeQuote/placeholder_profile_image.png'

const placeholderLargeQuoteABlock = {
  variant: '',
  quote_text: 'Outreach accelerates the conversations we have with customers. Then also helps convert those conversations into dollars.',
  author_name: 'Pam Kong',
  job_title: 'Manager of GMT Acceleration at Zoom',
  image: PlaceholderImage,
  icon: PlaceholderProfileImage,
  primaryCta: {
    ctaText: 'Read all customer stories',
    ctaLink: '#',
  },
} as LargeQuoteItemInterface

const placeholderLargeQuoteBBlock = {
  variant: 'center',
  quote_text: 'Outreach accelerates the conversations we have with customers. Then also helps convert those conversations into dollars.',
  author_name: 'Pam Kong',
  job_title: 'Manager of GMT Acceleration at Zoom',
  image: PlaceholderImage,
  icon: PlaceholderProfileImage,
  primaryCta: {
    ctaText: 'Read all customer stories',
    ctaLink: '#',
  },
} as LargeQuoteItemInterface

const LargeQuote: FC = () => (
  <div>
    <LargeQuoteBlock block={{
      type: 'block',
      TextAndImageBlocks: [
        placeholderLargeQuoteABlock,
        placeholderLargeQuoteBBlock,
      ],
    }}
    />
  </div>
)

export default LargeQuote
