import { FC } from 'react'

import FaqInterface from 'components/blocks/faq/faq.interface'
import FaqBlock from 'components/blocks/faq/faq'

const placeholderFaqBlock = {
  type: 'Block',
  topTag: 'Support',
  headline: 'Frequently asked questions',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque auctor neque duis elit et, 
  arcu quis. Discover resources and training for topics all over the Outreach app.`,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  questions: [
    {
      headline: '',
      content: '',
      primaryCta: {
        ctaText: 'Learn more',
        ctaLink: '#',
      },
    },
  ],
} as FaqInterface

const Faq: FC = () => (
  <div>
    <FaqBlock block={placeholderFaqBlock} />
  </div>
)

export default Faq
