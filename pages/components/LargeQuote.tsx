import { FC } from 'react'

import LargeQuoteBlock from 'components/blocks/large_quote/large_quote'
import LargeQuoteItemInterface from 'components/generic/large_quote_item/large_quote_item.interface'
import PlaceholderImage from '../../assets/LargeQuote/placeholder_image.png'
import PlaceholderProfileImage from '../../assets/LargeQuote/placeholder_profile_image.png'

const placeholderLargeQuoteBlock = {
  variant: '',
  testimony: 'Outreach accelerates the conversations we have with customers. Then also helps convert those conversations into dollars.',
  author: 'Pam Kong',
  position: 'Manager of GMT Acceleration at Zoom',
  image: PlaceholderImage,
  profile_image: PlaceholderProfileImage,
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
        placeholderLargeQuoteBlock,
      ],
    }}
    />
  </div>
)

export default LargeQuote
